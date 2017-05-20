/**
 * MyTorpedo
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
 function MyTorpedo(scene, x, y, z, angle, target) {
 	CGFobject.call(this,scene);

 	this.x = x;
 	this.y = y;
 	this.z = z;
 	this.angle = angle;
 	this.target = target;
 	this.durationTime = Math.sqrt(Math.pow(this.x - this.target.x,2) + Math.pow(this.y - this.target.y,2) + Math.pow(this.z - this.target.z,2));
	this.animationTime = 0;
	
	//body
	this.body = new MyCilinder(this.scene, 12, 1);
 };

 MyTorpedo.prototype = Object.create(CGFobject.prototype);
 MyTorpedo.prototype.constructor = MyTorpedo;


 MyTorpedo.prototype.display = function() {
     //	MARK: Body
	this.scene.pushMatrix();
		this.scene.translate(this.x,this.y,this.z);
		this.scene.rotate(this.angle, 0,1,0);
	   	this.scene.scale(0.3,0.3,1);
	   this.body.display();
	this.scene.popMatrix();
 };