/**
 * MyPost
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
 function MyPost(scene) {
 	CGFobject.call(this,scene);

	// Post
	this.poste = new MyCilinder(scene, 10, 1);
	// Clock
	this.clock = new MyClock(scene);
	// Top cover
	this.topCover = new MyCover(scene,10);


	// appearance
	this.woodAppearance = new CGFappearance(scene);
	this.woodAppearance.loadTexture("../resources/images/wood.jpg");
	//this.woodAppearance.setTextureWrap('REPEAT','REPEAT');
	this.woodAppearance.setAmbient(0.3,0.3,0.3,1);
	this.woodAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.woodAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.woodAppearance.setShininess(10);
 };

 MyPost.prototype = Object.create(CGFobject.prototype);
 MyPost.prototype.constructor = MyPost;


 MyPost.prototype.display = function() {

	// poste
	this.scene.pushMatrix();
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.scene.scale(0.7,0.7,6);
		this.woodAppearance.apply();
		this.poste.display();
	this.scene.popMatrix();

	// clock
	this.scene.pushMatrix();
		this.scene.translate(0,5,0.3);
		this.clock.display();
	this.scene.popMatrix();

	// top cover
	this.scene.pushMatrix();
		this.scene.translate(0,6,0);
		this.scene.scale(0.7,1,0.7);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.woodAppearance.apply();
		this.topCover.display();
	this.scene.popMatrix();
 };