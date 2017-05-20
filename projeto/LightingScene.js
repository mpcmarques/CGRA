var degToRad = Math.PI / 180.0;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	this.initCameras();
	// Start lights
	this.initLights();

	this.gl.clearColor(0.0, 191/255, 1.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	//	Enables textures
	this.enableTextures(true);

	//	enable timer
	this.setUpdatePeriod(1);

	// interface
	this.light1 = true;
	this.light2 = true;
	this.isClockPaused = false;
	this.speed = 3;

	/* SUBMARINE */
	this.submarineX = 5;
	this.submarineZ = 5;
	this.submarineY = 5;
	this.submarineAngle = Math.PI - Math.PI/6;

	/* TORPEDOES */
	this.torpedoes = [];

	/* Scene Elements */

	// Submarine
	this.submarine = new MySubmarine(this);

	// Plane
	this.plane = new Plane(this, 10, 0, 10, 0, 10);

	// Poste
	this.post = new MyPost(this);

	// Targets
	this.targets = [];
	this.targets[0] = new MyTarget(this, 3, 0.1, 5);
	this.targets[1] = new MyTarget(this, 10, 0.1, 5);

	/* Appearances */

	// default appearance
	this.greenAppearance = new CGFappearance(this);
	this.greenAppearance.setSpecular(0.3,0.5,1,1);
	this.greenAppearance.setDiffuse(0.1,0.1,0.1,1);
	this.greenAppearance.setAmbient(0,0,1);
	this.greenAppearance.setShininess(10);

	//	water appearance
	this.waterAppearance = new CGFappearance(this);
	this.waterAppearance.loadTexture("../resources/images/underwater_ground.jpg");
	this.waterAppearance.setTextureWrap('REPEAT', 'REPEAT');
	this.waterAppearance.setSpecular(0.2,0.2,0.2,1);
	this.waterAppearance.setDiffuse(0.8,0.8,0.8,1);
	this.waterAppearance.setShininess(30);

};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0.4,0.4,0.4, 1.0);
	
	// Positions for light
	this.lights[0].setPosition(5, 10, 5, 1);
	this.lights[1].setPosition(0, 3, 0, 1);


	// light 0
	this.lights[0].setSpecular(1,1,1,1);
	this.lights[0].setDiffuse(1,1,1,1);
	this.lights[0].setConstantAttenuation(3);
	
	
	// light 1
	this.lights[1].setSpecular(30/255,144/255,1);
	this.lights[1].setDiffuse(30/255,144/255,1);
	this.lights[1].setSpotDirection(5,0,5);
};

LightingScene.prototype.updateLights = function() {
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
};


LightingScene.prototype.display = function() {
	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	this.updateLights();

	// Draw axis
	this.axis.display();


	// ---- END Background, camera and axis setup

	// ---- BEGIN Geometric transformation section

	// ---- END Geometric transformation section


	// ---- BEGIN Primitive drawing section

	/* Scene Elements */

	// submarine
	this.pushMatrix();
		this.translate(this.submarineX, this.submarineY, this.submarineZ);
		this.rotate(this.submarineAngle,0,1,0);
		this.greenAppearance.apply();
		this.submarine.display();
	this.popMatrix();

	// plane
	this.pushMatrix();
		this.translate(5, 0, 5);	
		this.rotate(Math.PI/2, 1,0,0);
		this.rotate(Math.PI,0,1,0);
		this.scale(100,100,1);
		// appearance
		this.waterAppearance.apply();
		this.plane.display();
	this.popMatrix();

	// post
	this.pushMatrix();
		this.translate(8,0,0);
		this.post.display();
	this.popMatrix();
	
	// targets
	for(var i = 0; i < this.targets.length; i++){
		// target
		this.pushMatrix();
			this.targets[i].display();
		this.popMatrix();
	}

	// torpedoes
	for(var i = 0; i < this.torpedoes.length; i++){
		this.pushMatrix();
			this.torpedoes[i].display();
		this.popMatrix();
	}
	// ---- END Primitive drawing section
};

// update function
LightingScene.prototype.update = function(currTime){
	
	// update clock
	if(this.isClockPaused == false){
		this.post.clock.update(currTime);
	}
	

	// update gui options
	if(this.light1  == true){
		this.lights[0].enable();	
	} else {
		this.lights[0].disable();
	}

	if (this.light2 == true){
		this.lights[1].enable();
	} else {
		this.lights[1].disable();
	}

	// move torpedoes
	this.moveTorpedoes();
}

// Pause clock function
LightingScene.prototype.pauseClock = function(){
	if(this.isClockPaused == true){
		this.isClockPaused = false;
		console.log("Clock resumed\n");
	} else {
		this.isClockPaused = true;
		console.log("Clock stopped\n");
	}
}; 

// Rotate submarine
LightingScene.prototype.rotateSubmarine = function(rotation){
	this.submarineAngle += rotation;
};

// Move submarine
LightingScene.prototype.moveSubmarine = function(isForward){
	var deltaX = Math.sin(this.submarineAngle);
	var deltaZ = Math.cos(-this.submarineAngle);

	if(isForward == true){
		this.submarineX += deltaX;
		this.submarineZ += deltaZ;
	} else {
		this.submarineX -= deltaX;
		this.submarineZ -= deltaZ;
	}
};


// Move torpedoes
LightingScene.prototype.moveTorpedoes = function(){

	for(var i = 0; i < this.torpedoes.length; i++){
		var torpedo = this.torpedoes[i];
		// update torpedo
		if (torpedo.animationTime + 1/100 <= torpedo.durationTime){
			torpedo.animationTime += 1/100;
		}

		// torpedo has a target
		if( torpedo.target != null ){
			// move torpedo next to target

			torpedo.x = this.bezier(torpedo.x, 
						torpedo.x ,
			 			torpedo.target.x ,
			 			torpedo.target.x,
			 			torpedo.animationTime / torpedo.durationTime);
			torpedo.y = this.bezier(torpedo.y, 
						torpedo.y ,
			 			torpedo.target.y,
			 			torpedo.target.y,
			 			torpedo.animationTime / torpedo.durationTime);
			 torpedo.z = this.bezier(torpedo.z, 
						torpedo.z ,
			 			torpedo.target.z ,
			 			torpedo.target.z,
			 			torpedo.animationTime / torpedo.durationTime);
		}			
	}
}


// Launch torpedo
LightingScene.prototype.launchTorpedo = function() {
	// create torpedo 
	var torpedo = new MyTorpedo(this, 
					this.submarineX, 
					this.submarineY-1, 
					this.submarineZ, 
					this.submarineAngle,
					this.targets[0]);
	
	// lock target torpedo to target 
	this.targets[0].locked = true;

	// add torpedo
	this.torpedoes.push(torpedo);
};


// Bezier
LightingScene.prototype.bezier = function(P1, P2, P3, P4, t) {
	//var  P1 = pInicio;
	//var  P2 = 6 UNIDADES DE DISTANCIA DA POSICAO INICIAL, FRENTE DO SUBMARINE
	// 	P3 = 3 UNIDADES ACIMA DO ALVO, NA VERTICAL
	// 	P4 = POSICAO DO ALVO

	var qT = Math.pow((1 - t),3) * P1 
	+ 3 * t * Math.pow((1 - t),2) * P2 
	+ 3 * Math.pow(t,2) * (1 - t) * P3 
	+ Math.pow(t,3) * P4;
		
	//console.log("bezier: " + P1 + " " + P2 + " " + P3 + " " + P4 + " T " + t + " RES " + qT );
	return qT;
};

