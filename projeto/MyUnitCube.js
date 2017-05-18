/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	this.vertices = [
            0.5,-0.5,-0.5,
            0.5,0.5,-0.5,
            0.5,-0.5,0.5,
            0.5,0.5,0.5,
            -0.5,-0.5,0.5,
            -0.5,0.5,0.5,
           	-0.5,-0.5,-0.5,
           	-0.5,0.5,-0.5
			];

	this.indices = [
            0,1,2,
            3,2,1,
            2,3,4,
            5,4,3,
            4,5,6,
            7,6,5,
            6,7,0,
            1,0,7,
            3,1,5,
            7,5,1,
            0,6,2,
            4,2,6
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
