/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTable(scene) {
	CGFobject.call(this,scene);
	
	//	Create cube
	this.cube = new MyUnitCubeQuad(this.scene);
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function () {
	//	MARK: Table
	this.scene.pushMatrix();
	this.scene.translate(0,3.5,0);
	this.scene.scale(5,0.3,3);
	this.scene.tableAppearance.apply();
	this.cube.display();
	this.scene.popMatrix();
	
	//	MARK: Legs
	// First leg
	this.scene.pushMatrix();
	this.scene.materialDefault.apply();
	this.scene.translate(-2.2,3.5/2,-1.2);
	this.scene.scale(0.3,3.5,0.3);
	this.scene.translate(0,0,0);
	this.cube.display();
	this.scene.popMatrix();
	//	Second leg
	this.scene.pushMatrix();
	this.scene.translate(2.2,3.5/2,-1.2);
	this.scene.scale(0.3,3.5,0.3);
	this.cube.display();
	this.scene.popMatrix();
	//	Third leg
	this.scene.pushMatrix();
	this.scene.translate(-2.2,3.5/2,1.2);
	this.scene.scale(0.3,3.5,0.3);
	this.cube.display();
	this.scene.popMatrix();
	//	Fourth leg
	this.scene.pushMatrix();
	this.scene.translate(2.2,3.5/2,1.2);
	this.scene.scale(0.3,3.5,0.3);
	this.cube.display();
	this.scene.popMatrix();
};
