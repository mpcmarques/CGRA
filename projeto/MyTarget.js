/**
 * MyTarget
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
 function MyTarget(scene, x, y, z) {
 	CGFobject.call(this,scene);

 	// setup
 	this.x = x;
 	this.y = y;
 	this.z = z;
 	this.locked = false;

	//body
	this.body = new MyCover(scene,20);

	// appearance
	this.targetAppearance = new CGFappearance(scene);
	this.targetAppearance.loadTexture("../resources/images/target.png");
	this.targetAppearance.setAmbient(0.3,0.3,0.3,1);
	this.targetAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.targetAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.targetAppearance.setShininess(5);
 };

 MyTarget.prototype = Object.create(CGFobject.prototype);
 MyTarget.prototype.constructor = MyTarget;


 MyTarget.prototype.display = function() {
     //	MARK: Body
	this.scene.pushMatrix();
		this.scene.translate(this.x,this.y,this.z);
		this.scene.rotate(-Math.PI/2, 1,0,0);
		// apply appearance
		this.targetAppearance.apply();
	   this.body.display();
	this.scene.popMatrix();
 };