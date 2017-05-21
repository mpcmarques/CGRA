/**
 * MySubmarine
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MySubmarine(scene) {
	CGFobject.call(this,scene);
	//Alterar um bocado o circle e a halfsphere por causa da taxa de copianço!!!

	//	Cilindro Principal
	this.body = new MyCilinder(this.scene,20,1);
	//  Ponta Inicial
	this.frontedge = new MyHalfSphere(this.scene,20,20);
	//	Ponta Final
	this.backedge = new MyHalfSphere(this.scene,20,20);

	//	Cilindro de Cima
	this.top = new MyCilinder(this.scene,20,1);
	//	Topo
	this.toptop = new MyCircle(this.scene,20)

	//	Periscópio vertical
	this.periscopio1 = new  MyCilinder(this.scene,20,1);
	//	Periscópio horizontal
	this.periscopio2 = new  MyCilinder(this.scene,20,1);

	//	Helice esquerda (a q se vê)
 	this.helice1 = new  MyCilinder(this.scene,20,1);
 	//	HeliceIN esquerda (a q se vê)
 	this.heliceIN1 = new  MyCilinderIN(this.scene,20,1);
	//	Helice direita
	this.helice2 = new  MyCilinder(this.scene,20,1);
	//	HeliceIN direita
 	this.heliceIN2 = new  MyCilinderIN(this.scene,20,1);

 	//	Ventoinha esquera
 	this.ventoinha1 = new MyUnitCubeQuad(this.scene);
	//	Ventoinha direita
	this.ventoinha2 = new MyUnitCubeQuad(this.scene);
	//	Centro esquerdo
	this.centro1 = new MyHalfSphere(this.scene,20,20);
	//	Centro direito
	this.centro2 = new MyHalfSphere(this.scene,20,20);

	//Asas
	this.asa1 = new MyTrapezoid(scene);
	this.asa2 = new MyTrapezoid(scene);
	this.asa3 = new MyTrapezoid(scene);

};

MySubmarine.prototype = Object.create(CGFobject.prototype);
MySubmarine.prototype.constructor=MySubmarine;

MySubmarine.prototype.display = function () {
	this.scene.pushMatrix();
	this.scene.translate(0,0,-2.5);
	//console.log(this.scene.currentSubmarineAppearance);
	this.scene.submarineAppearances[this.scene.currentSubmarineAppearance].apply();

	//	Cilindro Principal
	this.scene.pushMatrix();
	this.scene.translate(0,0,0.46);
	this.scene.scale(0.73,1,4.08);
	this.body.display();
	this.scene.popMatrix();

	//  Ponta Inicial
	this.scene.pushMatrix();
	this.scene.translate(0,0,4.54);
	this.scene.scale(0.73/2,1/2,0.46);
	this.frontedge.display();
	this.scene.popMatrix();

	//  Ponta Final
	this.scene.pushMatrix();
	this.scene.translate(0,0,0.46);
	this.scene.rotate(-Math.PI,1,0,0);
	this.scene.scale(0.73/2,1/2,0.46);
	this.backedge.display();
	this.scene.popMatrix();

	//	Cilindro de Cima
	this.scene.pushMatrix();
	this.scene.translate(0,0,2.5);
	this.scene.rotate(-(Math.PI/2),1,0,0);
	this.scene.scale(0.73,0.88,1.07); //0.57 no eixo do zz nao era o suficiente para ligar o corpo
	this.top.display();
	this.scene.popMatrix();
	//	Topo
	this.scene.pushMatrix();
	this.scene.translate(0,1.07,2.5);
	this.scene.rotate(-(Math.PI/2),1,0,0);
	this.scene.scale(0.73/2,0.88/2,1);
	this.toptop.display();
	this.scene.popMatrix();

	//	Periscópio vertical
	this.scene.pushMatrix();
	this.scene.translate(0,1.07,2.7);
	this.scene.rotate(-(Math.PI/2),1,0,0);
	this.scene.scale(0.1,0.1,0.7); //0.57 no eixo do zz nao era o suficiente para ligar o corpo
	this.top.display();
	this.scene.popMatrix();
	//	Periscópio horizontal
	this.scene.pushMatrix();
	this.scene.translate(0,1.77,2.65);
	this.scene.scale(0.1,0.1,0.2);
	this.helice2.display();
	this.scene.popMatrix();

	//	Helice esquerda (a q se vê)
	this.scene.pushMatrix();
	this.scene.translate(0.530,-0.25,0.46);
	this.scene.scale(0.4,0.4,0.5);
	this.helice1.display();
	this.scene.popMatrix();
	//	Helice direita
	this.scene.pushMatrix();
	this.scene.translate(-0.530,-0.25,0.46);
	this.scene.scale(0.4,0.4,0.5);
	this.helice2.display();
	this.scene.popMatrix();
	//	HeliceIN esquerda (a q se vê)
	this.scene.pushMatrix();
	this.scene.translate(0.530,-0.25,0.46);
	this.scene.scale(0.39,0.39,0.5);
	this.heliceIN1.display();
	this.scene.popMatrix();
	//	HeliceIN direita
	this.scene.pushMatrix();
	this.scene.translate(-0.530,-0.25,0.46);
	this.scene.scale(0.39,0.39,0.5);
	this.heliceIN2.display();
	this.scene.popMatrix();

	//	Ventoinha esquera
 	this.scene.pushMatrix();
	this.scene.translate(0.530,-0.25,0.86);
	this.scene.scale(0.1,0.34,0.1);
	this.ventoinha1.display();
	this.scene.popMatrix();
	//	Ventoinha direita
	this.scene.pushMatrix();
	this.scene.translate(-0.530,-0.25,0.86);
	this.scene.scale(0.1,0.34,0.1);
	this.ventoinha2.display();
	this.scene.popMatrix();
	//	Centro esquerdo
	this.scene.pushMatrix();
	this.scene.translate(0.530,-0.25,0.91);
	this.scene.scale(0.05,0.05,0.05);
	this.centro1.display();
	this.scene.popMatrix();
	//	Centro direito
	this.scene.pushMatrix();
	this.scene.translate(-0.530,-0.25,0.91);
	this.scene.scale(0.05,0.05,0.05);
	this.centro2.display();
	this.scene.popMatrix();

	//	asa1
	this.scene.pushMatrix();
	this.scene.rotate(-Math.PI/2,0,1,0);
	this.asa1.display();
	this.scene.popMatrix();
	//	asa2
	this.scene.pushMatrix();
	this.scene.rotate(Math.PI/2,0,0,1);
	this.scene.rotate(-Math.PI/2,0,1,0);
	this.asa2.display();
	this.scene.popMatrix();
	//	asa3
	this.scene.pushMatrix();
	this.scene.translate(0,0.7,2.5);
	this.scene.rotate(Math.PI/2,0,1,0);
	this.scene.scale(0.68,1,1);
	this.asa3.display();
	this.scene.popMatrix();

	this.scene.popMatrix();
};
