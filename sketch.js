let x; //criando variavel x
let y; //criando variavel y

function setup() {
  createCanvas(400, 400);
  x = random(400); //sorteando numero de 0 a 400
  x = int(x); //transformando para numero inteiro
  y = random(400); //mesma coisa que o de cima
  y = int(y);
}

function draw() {
  background("rgb(234,184,234)"); //cor de fundo roxo
 x=x+random(-2,2);
 y=y+random(-2,2)
  x=constrain(x,0,400)
  y=constrain(y,0,400)
   let distanciaX;
    let distanciaY;
    let distancia;
    distanciaX = mouseX - x;
    distanciaY = mouseY - y;
    distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  
  
   circle(mouseX,mouseY,distancia); //circulo com coordenadas aleatorias e diametro 10
  
  if(distancia>50)
    fill("blue")
  if(distancia<50)
     fill("orange")
   if(distancia<35)
     fill("red")
  
                     
    
  
  
    if(distancia<3) { //se posição X do mouse for igual a X
    text("ENCONTREI!",200,200); //entao mostrara o texto "encontrei
    noLoop()
    
    }
}
