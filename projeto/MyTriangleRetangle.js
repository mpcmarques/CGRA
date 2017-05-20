/**
 * MyTriangleRetangle
 * @constructor
 */
function MyTriangleRetangle(scene) {
    CGFobject.call(this, scene);
    this.initBuffers();
};

MyTriangleRetangle.prototype = Object.create(CGFobject.prototype);
MyTriangleRetangle.prototype.constructor = MyTriangleRetangle;

MyTriangleRetangle.prototype.initBuffers = function() {
    this.vertices = [
    	0,0,0,
    	1.0,0,0,
    	0,0,1.0
    ];

    this.indices = [
        2,1,0
    ];

    this.normals = [
       0, 1,0,
       0, 1,0,
       0,1 ,0
    ];
    
    this.texCoords = [
    	0,0,
    	1,0,
    	0,1
    
    	
    ];
    
    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
};