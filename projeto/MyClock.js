/**
 * MyClock
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
 function MyClock(scene) {
 	CGFobject.call(this,scene);
	//clock
	this.prism = new MyCilinder(this.scene, 12, 1);
	this.front = new MyCover(this.scene, 12);

	//pointers
	this.hourPointer = new MyClockHand(this.scene, 0.02, 0.23);
	this.minutePointer = new MyClockHand(this.scene, 0.015, 0.3);
	this.secondPointer = new MyClockHand(this.scene, 0.01, 0.4);
	
	//clock aparrence
	this.clockAppearance = new CGFappearance(scene);
	this.clockAppearance.loadTexture("../resources/images/clock.png");
	this.clockAppearance.setAmbient(0.3,0.3,0.3,1);
	this.clockAppearance.setDiffuse(0.9,0.9,0.9,1);
	this.clockAppearance.setSpecular(0.1,0.1,0.1,1);	
	this.clockAppearance.setShininess(5);

	// seconds pointer appearance
	this.secondPointerAppearance = new CGFappearance(scene);
	this.secondPointerAppearance.setAmbient(0,0,0,1);
	this.secondPointerAppearance.setDiffuse(0.4,0.4,0.4,1);
	this.secondPointerAppearance.setSpecular(0.2,0.2,0.2,1);
	this.secondPointerAppearance.setShininess(10);

	// minutes pointer appearance
	this.minutePointerAppearance = new CGFappearance(scene);
	this.minutePointerAppearance.setAmbient(0,0,255/204,1);
	this.minutePointerAppearance.setDiffuse(0.4,0.4,0.4,1);
	this.minutePointerAppearance.setSpecular(0.2,0.2,0.2,1);
	this.minutePointerAppearance.setShininess(10);

	// hour pointer appearance
	this.hourPointerAppearance = new CGFappearance(scene);
	this.hourPointerAppearance.setAmbient(255/128,255/128,255/128,1);
	this.hourPointerAppearance.setDiffuse(0.4,0.4,0.4,1);
	this.hourPointerAppearance.setSpecular(0.2,0.2,0.2,1);
	this.hourPointerAppearance.setShininess(10);
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;


 MyClock.prototype.display = function() {
     //	MARK: Prism
	this.scene.pushMatrix();
	this.scene.scale(1,1,0.2);
	this.prism.display();
	this.scene.popMatrix();

	// MARK: Clock front
	this.scene.pushMatrix();
		this.scene.translate(0,0,0.2);
		this.clockAppearance.apply();
		this.front.display();
	this.scene.popMatrix();

	//	MARK: Clock hour pointer
	this.scene.pushMatrix();
		this.hourPointerAppearance.apply();
		this.scene.translate(0,0,0.21);
		this.hourPointer.display();
	this.scene.popMatrix();

	//	MARK: Clock minutes pointer
	this.scene.pushMatrix();
		this.minutePointerAppearance.apply();
		this.scene.translate(0,0,0.21);
		this.minutePointer.display();
	this.scene.popMatrix();

	//	MARK: Clock seconds pointer
	this.scene.pushMatrix();
		this.secondPointerAppearance.apply();
		this.scene.translate(0,0,0.21);
		this.secondPointer.display();
	this.scene.popMatrix();
 };

//	update function
 MyClock.prototype.update = function(currTime){
	
	//	seconds and minutes move from one to one (needs int numbers)
	var deltaSeconds = (Math.floor((currTime/1000)%60)*360)/60;
 	var deltaMinutes = (Math.floor((currTime/(1000*60))%60)*360)/60;
 	//	times move normally
 	var deltaHours = ((currTime/(1000*60*60)%12+1)*360)/12;

 	//	update pointers
 	this.secondPointer.setAngle(this.secondPointer.angle + deltaSeconds);
  	this.minutePointer.setAngle(this.minutePointer.angle + deltaMinutes);
 	this.hourPointer.setAngle(this.hourPointer.angle + deltaHours);
 }