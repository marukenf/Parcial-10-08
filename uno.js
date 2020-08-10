/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let cantidadMujeres=0;
	let sumaEdad=0;
	let promedioEdad;
	let flagHombre=0;
	let nombreMasPesado;
	let pesoMaspesado;
	let mensajeA;
	let mensajeB;
	let mensajeC;


	for(i=0;i<5;i++)
	{
		nombre= prompt("Ingrese el nombre");
		while(!isNaN(nombre)){
			nombre= prompt("Ingreso un nombre invalido. Ingrese el nombre");
		}

		peso=parseInt(prompt("Ingrese el peso"));
		while((isNaN(peso) )|| peso<=0){
			peso=parseInt(prompt("Error. Ingrese el peso"));

		}
		sexo=prompt("Ingrese la sexo 'f' o 'm'");
		while((!isNaN(sexo))||sexo!= 'f' && sexo!='m')
		{
		sexo=prompt("error, ingrese el sexo");}

		edad=parseInt(prompt("Ingrese la edad"));
		while(isNaN(edad)||edad<0)
		{
			edad=parseInt(prompt("error, ingrese la edad"));
		}
	
		if(sexo=='f'){
			cantidadMujeres++;			
		}
		else{
			if(flagHombre==0||peso>pesoMaspesado){
				nombreMasPesado= nombre;
				pesoMaspesado=peso
				flagHombre=1;
			}
		}
		sumaEdad=sumaEdad+edad;
	}
		promedioEdad=sumaEdad/5;

		mensajeA="  A-  la cantidad de mujeres es: "+ cantidadMujeres ;
		mensajeB="  B-  la edad promedio total es: " + promedioEdad;
		if(flagHombre==0){
			mensajeC=" C-  No se ingresaron datos de hombres"
		}

		else{
			mensajeC= "  C-  El hombre mas pesado es : "+ nombreMasPesado + " y pesa " + pesoMaspesado;
		}

    console.log( mensajeA+mensajeB+mensajeC);
	

}
