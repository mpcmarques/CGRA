/**
 * MyClockHand
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyClockHand(scene, deltaX, deltaY) {
	CGFobject.call(this,scene);
	
	//	Create cube
	this.cube = new MyUnitCubeQuad(this.scene);
	this.angle = 0;

	this.deltaX = deltaX;
	this.deltaY = deltaY;
};

MyClockHand.prototype = Object.create(CGFobject.prototype);
MyClockHand.prototype.constructor=MyClockHand;

MyClockHand.prototype.display = function () {
	//	Clock hand
	this.scene.pushMatrix();
	   this.scene.rotate(-this.angle, 0,0,1);
	   //this.scene.translate(0,0.5,0);
	   this.scene.scale(this.deltaX,this.deltaY,0.01);
	   this.scene.translate(0,0.5,0);
	   this.cube.display();
	this.scene.popMatrix();
};

MyClockHand.prototype.setAngle = function(angle){
    this.angle = angle* Math.PI/180;
}
