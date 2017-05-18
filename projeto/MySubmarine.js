/**
 * MyQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyQuad(scene, minS, maxS, minT, maxT) {
	CGFobject.call(this,scene);

	//	Add texture
	this.addTextureCoords(minS, maxS, minT, maxT);
	//	Init buffers
	this.initBuffers();
};
MyQuad.prototype = Object.create(CGFobject.prototype);
MyQuad.prototype.constructor=MyQuad;

MyQuad.prototype.initBuffers = function () {
	
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

MyQuad.prototype.addTextureCoords = function(minS, maxS, minT, maxT){

	this.texCoords = [minS,minT,
	maxS,minT,
	minS,maxT,
	maxS,maxT];
	
};