/**
 * MySubmarine
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MySubmarine(scene, minS, maxS, minT, maxT) {
	CGFobject.call(this,scene);

	//	Add texture
	this.addTextureCoords(minS, maxS, minT, maxT);
	//	Init buffers
	this.initBuffers();

	//Elements
	//	Cilindro Principal
	this.body = new MyPrism(this.scene, 50, 1);
	//
};
MySubmarine.prototype = Object.create(CGFobject.prototype);
MySubmarine.prototype.constructor=MySubmarine;

MySubmarine.prototype.initBuffers = function () {
	
	this.vertices = [
            -0.5, -0.5, 0,
            0.5, -0.5, 0,
            -0.5, 0.5, 0,
			];

	this.indices = [
            0, 1, 2, 
        ];
		
	this.normals = [
		0,0,1,
		0,0,1,
		0,0,1,
	];

	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};

MySubmarine.prototype.addTextureCoords = function(minS, maxS, minT, maxT){

	this.texCoords = [minS,minT,
	maxS,minT,
	minS,maxT,
	maxS,maxT];
	
};

MyTable.prototype.display = function () {
	//	Cilindro Principal
	this.scene.pushMatrix();
	this.scene.scale(0,0,4.8);
	this.scene.translate(0,0,0.46);
	this.scene.tableAppearance.apply();
	this.body.display();
	this.scene.popMatrix();
};