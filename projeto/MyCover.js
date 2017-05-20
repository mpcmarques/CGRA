/**
 * MyCover
 * @constructor
 */
 function MyCover(scene, slices) {
 	CGFobject.call(this,scene);

    this.slices = slices;

 	this.initBuffers();
 };

MyCover.prototype = Object.create(CGFobject.prototype);
MyCover.prototype.constructor = MyCover;

MyCover.prototype.initBuffers = function() {
 	//	Init with empty arrays
 	this.vertices = [];
 	this.indices = [];
 	this.texCoords = [];

    //	Calculate vertice coordinate
    var ang = 0;
 	var rotation = Math.PI * 2 / this.slices;  
    var indice = 1; // indice 0 is the center of the circle

    //  add middle vertice
 	this.vertices.push(0,0,0);
    this.texCoords.push(0.5,0.5);

    //  loop throught slices
 	for(var i = 1; i <= this.slices; i++){
 	    //    Add vertices and textures
 	    this.vertices.push(0.5*Math.cos(ang), 0.5*Math.sin(ang), 0);
 	    this.texCoords.push(0.5*Math.cos(ang) + 0.5,0.5 - (0.5*Math.sin(ang)));
        ang = rotation * i;

        //  add indices
        this.indices.push(0);
        //  last slice
        if(i == this.slices){
          this.indices.push(indice);
          this.indices.push(1);
        //  other slices
        }else{
          this.indices.push(indice);
          this.indices.push(indice + 1);
          indice = indice + 1;
        }
 	}
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };