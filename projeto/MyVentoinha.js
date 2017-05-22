/**
 * MyVentoinha
 * @constructor
 */
function MyVentoinha(scene) {
    CGFobject.call(this,scene);

    //	Ventoinha
 	this.ventoinha = new MyUnitCubeQuad(this.scene);

	this.angle = 0;
};

MyVentoinha.prototype = Object.create(CGFobject.prototype);
MyVentoinha.prototype.constructor = MyVentoinha;

MyVentoinha.prototype.display = function() {
	this.scene.pushMatrix();
		this.scene.rotate(this.angle, 0,0,1);
		this.scene.scale(0.1,0.34,0.1);
		this.ventoinha.display();
	this.scene.popMatrix();
		
};
