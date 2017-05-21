/**
 * MyExplosion
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyExplosion(scene, x, y, z) {
	CGFobject.call(this,scene);

	this.position = new Position(x,y,z);

	//  Ponta Inicial
	this.body = new MyHalfSphere(this.scene,3, 3);

	// timer
	this.leftTime = 70;
};

MyExplosion.prototype = Object.create(CGFobject.prototype);
MyExplosion.prototype.constructor=MyExplosion;

MyExplosion.prototype.display = function () {
	this.scene.pushMatrix();
			this.scene.fireAppearance.apply();

			this.scene.translate(this.position.x, this.position.y, this.position.z);
			this.scene.scale(1.5,2,1.5);
			this.scene.rotate(-Math.PI/2,1,0,0);

			this.scene.pushMatrix();
					this.body.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
					this.scene.rotate(-Math.PI/3,0,0,1);
					this.body.display();
			this.scene.popMatrix();



	this.scene.popMatrix();
};
