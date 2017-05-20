/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCubeQuad(scene) {
	CGFobject.call(this,scene);
	
	//
	this.quad = new MyQuad(this.scene, 0,1,0,1);
	this.quad.initBuffers();
};

MyUnitCubeQuad.prototype = Object.create(CGFobject.prototype);
MyUnitCubeQuad.prototype.constructor=MyUnitCubeQuad;

MyUnitCubeQuad.prototype.display = function () {
	var halfturn  = 1.57079633;
	var fullturn = 3.14159265;
	
	// Top side
	this.scene.pushMatrix();
	this.scene.translate(0,0.5,0);
	this.scene.rotate(halfturn,0.5,0,0);
	this.scene.rotate(fullturn,0.5,0,0);
	this.quad.display();
	this.scene.popMatrix();
	//	Front side
	this.scene.pushMatrix();
	this.scene.translate(0,0,0.5);
	this.quad.display();
	this.scene.popMatrix();
	//	Back side
	this.scene.pushMatrix();
	this.scene.translate(0,0,-0.5);
	this.scene.rotate(-fullturn,0.5,0,0);
	this.quad.display();
	this.scene.popMatrix();
	// Left side
	this.scene.pushMatrix();
	this.scene.translate(-0.5,0,0);
	this.scene.rotate(-halfturn,0,0,1);
	this.scene.rotate(halfturn,1,0,0);
	this.quad.display();
	this.scene.popMatrix();
	// Right side
	this.scene.pushMatrix();
	this.scene.translate(0.5,0,0);
	this.scene.rotate(halfturn,0,0.5,0);
	this.quad.display();
	this.scene.popMatrix();
	// Down side
	this.scene.pushMatrix();
	this.scene.translate(0,-0.5,0);
	this.scene.rotate(halfturn,0.5,0,0);
	this.quad.display();
	this.scene.popMatrix();
};
