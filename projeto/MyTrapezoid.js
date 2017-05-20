/**
 * MyTrapezoid
 * @constructor
 */
function MyTrapezoid(scene) {
    CGFobject.call(this, scene);
    this.triangle= new MyTriangleRetangle(scene);
    this.quad= new MyQuad(scene,0,1,0,1);
    this.cube= new MyUnitCubeQuad(scene);
    this.triangle.initBuffers();
};

MyTrapezoid.prototype = Object.create(CGFobject.prototype);
MyTrapezoid.prototype.constructor = MyTrapezoid;

MyTrapezoid.prototype.display = function() {
	this.scene.pushMatrix();
		this.scene.translate(0,0,0.82);
		this.scene.scale(0.30,0.1,0.35);
		this.scene.pushMatrix();
			this.scene.translate(0,1,0);
			this.triangle.display();
			this.scene.translate(0,-1,0);
			this.scene.rotate(180 * degToRad,0, 0, 1);
			this.scene.rotate(-90 * degToRad,0, 1, 0);
			this.triangle.display();
		this.scene.popMatrix();
		this.scene.rotate(90 * degToRad,1, 0, 0);
		this.scene.rotate(-90 * degToRad,0, 1, 0);
		this.scene.translate(-0.5,0.5,0)
		this.quad.display();
		this.scene.pushMatrix();
			this.scene.translate(0,0,-0.5);
			this.scene.rotate(-135 * degToRad,1, 0, 0);
			this.scene.scale(1,Math.sqrt(2),1);
			this.quad.display();
		this.scene.popMatrix();
	this.scene.popMatrix();
	
	
	this.scene.pushMatrix();
		this.scene.translate(0,0,-0.82);
		this.scene.rotate(90 * degToRad,0, 1, 0);
		this.scene.scale(0.35,0.1,0.30);
		this.scene.pushMatrix();
			this.scene.translate(0,1,0);
			this.triangle.display();
			this.scene.translate(0,-1,0);
			this.scene.rotate(180 * degToRad,0, 0, 1);
			this.scene.rotate(-90 * degToRad,0, 1, 0);
			this.triangle.display();
		this.scene.popMatrix();
		this.scene.rotate(90 * degToRad,1, 0, 0);
		this.scene.rotate(-90 * degToRad,0, 1, 0);
		this.scene.translate(-0.5,0.5,0)
		
		this.scene.pushMatrix();
			this.scene.rotate(90 * degToRad,1, 0, 0);
			this.scene.translate(0,-0.5,0.5);
			this.quad.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
			this.scene.translate(0,0,-0.5);
			this.scene.rotate(-135 * degToRad,1, 0, 0);
			this.scene.scale(1,Math.sqrt(2),1);
			this.quad.display();
		this.scene.popMatrix();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0.15,0.05,0);
		this.scene.scale(0.3,0.1,1.64);
		this.cube.display();
	this.scene.popMatrix();
};	