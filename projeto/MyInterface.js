/**
 * MyInterface
 * @constructor
 */
function MyInterface () {
	//call CGFinterface constructor
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);

	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui

	this.gui = new dat.GUI();

	// add a group of controls (and open/expand by defult)

	var group=this.gui.addFolder("Luzes");
	group.open();

	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;

	group.add(this.scene, 'globalLight');
	group.add(this.scene, 'blueLight');
	group.add(this.scene, 'clockLight');

	this.gui.add(this.scene, 'pauseClock');

	// submarine textures
	this.gui.add(this.scene, 'currentSubmarineAppearance', this.scene.submarineAppearanceList);

	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters

	this.gui.add(this.scene, 'speed', -5, 5);

	return true;
};

/**
 * processKeyboard
 * @param event {Event}
 */
MyInterface.prototype.processKeyboard = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);

	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars

	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{
		case (65):	// only works for capital 'A', as it is
			this.scene.rotateSubmarine(Math.PI/40);
			if (this.scene.trapezoidAngle > -1.15)
				this.scene.rotateTrapezoid(-Math.PI/40);
		break;
		case (68): // capital 'D';
			this.scene.rotateSubmarine(-Math.PI/40);
			if (this.scene.trapezoidAngle < 1.15)
				this.scene.rotateTrapezoid(Math.PI/40);
		break;
		case (87):	// capital 'W';
			this.scene.speed += 1;
		break;
		case (83):	// capital 'S';
			this.scene.speed -= 1;
		break;
		case (70): // capital 'F';
			this.scene.launchTorpedo();
		break;
		case (81): // capital 'Q';
		if(this.scene.submarineY > 0){
			this.scene.submarineY -= 0.1;
		}
		break;
		case (69): // capital 'E';
			this.scene.submarineY += 0.1;
		break;
		case (80): // capital 'P';
			if(this.scene.posPeri < -0.1)
				this.scene.movePeri(0.1);
		break;
		case (76): // capital 'L';
			if(this.scene.posPeri > -0.6)
				this.scene.movePeri(-0.1);
		break;
	};
};
