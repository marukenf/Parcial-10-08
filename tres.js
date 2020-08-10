/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let destino;
	let temporada;
	let cantidadPersonas;
	let respuesta;

	let contadorBariloche=0;
	let contadorCataratas=0;
	let contadorSalta=0;
	let sexoTitularMasPasajeros;
	let cantidadTitularMasPasajeros;
	let sumaPersonasInvierno=0;
	let contadorInvierno=0;
	let promedioInvierno;


	let flag=0;

	let mensajeA;
	let mensajeC;

	do{
		sexo=prompt("Ingrese la sexo 'f' o 'm' del titular");
		while((!isNaN(sexo))||sexo!= 'f' && sexo!='m')
		{
		sexo=prompt("error, ingrese el sexo del titular");}

		destino=prompt("Ingrese el destino 'bariloche´, 'cataratas' o  'salta' ");
    	while((!isNaN(destino))||destino!="bariloche"&&destino!="cataratas"&&destino!="salta") {
		destino=prompt("Error. Ingrese el destino 'bariloche´, 'cataratas' o  'salta' ");}

		temporada=prompt("ingrese la tempora en la que viaja otoño,invierno, verano o primavera ");
		while((!isNaN(temporada))|| temporada!= "otoño"&& temporada!="invierno"&&temporada!="primavera"&&temporada!="verano"){
			temporada=prompt("Error. ingrese la tempora en la que viaja otoño,invierno, verano o primavera ");	
		}

		cantidadPersonas=parseInt(prompt("ingrese la cantidas de personas que viajan"));
		while(isNaN(cantidadPersonas)||cantidadPersonas<0){
			cantidadPersonas=prompt("Cantidad erronea. Ingrese la cantida de personas que viajan");
		}

		switch(destino){
			case "bariloche":
				contadorBariloche=contadorBariloche+1;
			break;
			case "salta":
				contadorSalta=contadorSalta+1;
			break;
			default:
				
				contadorCataratas=contadorCataratas+1;
			break;
		}
		
		if(flag==0||cantidadPersonas>cantidadTitularMasPasajeros){
			sexoTitularMasPasajeros=sexo;
			cantidadTitularMasPasajeros=cantidadPersonas;
			flag=1;
		}

		if(temporada=="invierno"){
			sumaPersonasInvierno=sumaPersonasInvierno+cantidadPersonas;
			contadorInvierno=contadorInvierno+1;
		}
    

		respuesta=prompt("Desea seguir ingresando datos 's' o 'n' ");

	}while(respuesta=='s');

	if(contadorSalta>contadorCataratas&&contadorSalta>contadorBariloche){
		mensajeA= "A- El destino mas elegido es salta";
	}

	if(contadorCataratas>contadorSalta&&contadorCataratas>contadorBariloche){
		mensajeA= "A -El destino mas elegido es cataratas";
	}

	if(contadorBariloche>contadorCataratas&&contadorBariloche>contadorSalta){
		mensajeA= "A -El destino mas elegido es bariloche";
	}

	if(contadorInvierno==0){
		mensajeC="  C- no viajan personas en invierno"
	}
	else{
		promedioInvierno=sumaPersonasInvierno/contadorInvierno;
		mensajeC= " C- El promedio de personas que viajan en invierno es "+ promedioInvierno;
	}



	alert(mensajeA+ "   B- el sexo del titular que viaja con mas personas es: "+ sexoTitularMasPasajeros +mensajeC);
	
}
