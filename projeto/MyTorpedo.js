/**
 * MyTorpedo
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
 function MyTorpedo(scene, x, y, z, angle, target) {
 	CGFobject.call(this,scene);

 	this.position = new Position(x,y,z);
 	this.angle = angle;
 	this.target = target;
 	this.launchPosition = new Position(x,y,z);
 	this.startingAngle = angle;
 	this.durationTime = Math.sqrt(Math.pow(this.position.x - this.target.position.x,2) + Math.pow(this.position.y - this.target.position.y,2) + Math.pow(this.position.z - this.target.position.z,2));
	this.animationTime = 0;
  this.arrived = false;
	this.inclination = 0;

	//body
	this.body = new MyCilinder(this.scene, 12, 1);

	// covers
	this.cover = new MyHalfSphere(this.scene,12,10);

	// trapezoids
	this.trapezoid = new MyTrapezoid(this.scene);

 };

 MyTorpedo.prototype = Object.create(CGFobject.prototype);
 MyTorpedo.prototype.constructor = MyTorpedo;


 MyTorpedo.prototype.display = function() {
	this.scene.pushMatrix();
 		this.scene.translate(this.position.x,this.position.y,this.position.z);
 		this.scene.rotate(this.angle, 0,1,0);
 		this.scene.rotate(this.inclination,1,0,0);
 		this.scene.metalAppearance.apply();

     //	Body
	this.scene.pushMatrix();
		this.scene.translate(0, 0, -0.5);
		this.scene.rotate(0, 0,1,0);
	   	this.scene.scale(0.3,0.3,0.8);
	   this.body.display();
	this.scene.popMatrix();

	// Cover
	this.scene.pushMatrix();
		this.scene.translate(0, 0, -0.49);
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.scale(0.15,0.15,0.15);
	   this.cover.display();
	this.scene.popMatrix();

	// Cover2
	this.scene.pushMatrix();
		this.scene.translate(0, 0, +0.30);
		this.scene.rotate(Math.PI,0,0,1);
		this.scene.scale(0.15,0.15,0.5);
		this.scene.blueMetalAppearance.apply();
	   this.cover.display();
	this.scene.popMatrix();

	// Trapezoid1
	this.scene.pushMatrix();
		this.scene.translate( 0, 0, -0.55);
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.scale(0.5,0.3,0.4);
		this.scene.blueMetalAppearance.apply();
		this.trapezoid.display();
	this.scene.popMatrix();

	// Trapezoid2
	this.scene.pushMatrix();
		this.scene.translate(0, 0, -0.55);
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.scene.scale(0.5,0.3,0.4);
		this.trapezoid.display();
	this.scene.popMatrix();

	this.scene.popMatrix();
 };
