/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/

function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let repuesta;
  let pesoTotal=0;
  let flagLiquido=0;
  let marcaLiquidoMasCaro;
  let precioLiquidoMasCaro;
  let flagSolido=0;
  let marcaSolidoMasBarato;
  let precioSolidoMasBarato;
  let mensajeB;
  let mensajeC;

  do{

    marca=prompt("ingrese la marca");

    precio=parseInt(prompt("Ingrese el precio, mayor a 0"));
    while(isNaN(precio)||precio<=0){
      precio=parseInt(prompt("Error. Ingrese el precio, mayor a 0"));
    }

    peso=parseInt(prompt("Ingrese el peso del producto, mayor a 0"));
    while(isNaN(peso)||peso<=0){
      peso=parseInt(prompt("Error. Ingrese el peso correcto, mayor a 0"));}

    tipo=prompt("Ingrese el tipo de producto 'solido' o 'liquido' ");
    while((!isNaN(tipo))||tipo!="solido"&&tipo!="liquido") {
      tipo=prompt("Error. Ingrese el tipo de producto 'solido' o 'liquido' ");
    }


    pesoTotal=pesoTotal+peso;   //punto a

  
    switch(tipo){
      case "liquido":
        if(flagLiquido==0||precio>precioLiquidoMasCaro){

          marcaLiquidoMasCaro=marca;
          precioLiquidoMasCaro=precio;
          flagLiquido=1;

        }
      break;

      default:
        if(flagSolido==0||precio<precioSolidoMasBarato){

          marcaSolidoMasBarato=marca;
          precioSolidoMasBarato=precio;
          flagSolido=1;}
      break;
    }

    respuesta= prompt("Desea seguir ingresando datos 's' o 'n' ");

  } while(respuesta=='s');

  if(flagLiquido==0){
    mensajeB=" No se ingresaron liquidos ";
  }
  else{
    mensajeB="  La marca del liquido mas caro es " + marcaLiquidoMasCaro + " y si precio es: "+ precioLiquidoMasCaro;

  }

  if(flagSolido==0){
    mensajeC=" No se ingresaron solidos";
  }
  else{
    mensajeC="  La marca del solido mas barato es " + marcaSolidoMasBarato +
     " y si precio es: "+ precioSolidoMasBarato;
    
  }

  alert("El precio total de compra es "+ pesoTotal + mensajeB + mensajeC);


}

