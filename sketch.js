const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var chao;
var esquerda;
var direita;
var teto;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  chao = new Ground(200, 390, 400, 20);
  esquerda = new Ground(10,200,20,400);
  direita = new Ground(390, 200, 20,400);
  teto = new Ground(200,10,400,20);
  
}

function draw() 
{
  background('black');

  chao.mostrar();
  esquerda.mostrar();
  direita.mostrar();
  teto.mostrar();

  Engine.update(engine);
}

