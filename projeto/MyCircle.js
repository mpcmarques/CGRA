/**
 * MyCircle
 * @constructor
 */
 function MyCircle(scene,slices) {
 	CGFobject.call(this,scene);
	this.slices=slices
 	this.initBuffers();
 };

 MyCircle.prototype = Object.create(CGFobject.prototype);
 MyCircle.prototype.constructor = MyCircle;

 MyCircle.prototype.initBuffers = function() {
    //Vertices, Indices, Texture Coordenates and Normals
	this.vertices = [];
	this.indices = [];
	this.texCoords=[];
	this.normals =[];
    // Initial angle
	var angle = 0;
    // Angle increment
	var angleIncrement = (2 * Math.PI) / this.slices;
	var vertexNumber = 1;

	this.vertices.push(0, 0, 0);
	this.texCoords.push(0.5, 0.5);
	this.normals.push(0, 0, 1);

	for (var i = 0; i <= this.slices; i++) 
	{
		var x = Math.cos(angle);
		var y = Math.sin(angle);

		this.vertices.push(x, y, 0);
		this.texCoords.push(x*0.5 + 0.5, 0.5 - y*0.5);
		this.normals.push(0, 0, 1);

		angle += angleIncrement;
	}

	for (var i = 0; i < this.slices; i++) 
	{
        //Pushing vertices to indexes.
		this.indices.push(vertexNumber, vertexNumber + 1, 0);

		vertexNumber++;
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 	
 };