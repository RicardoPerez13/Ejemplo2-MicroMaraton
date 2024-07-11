/*Conociendo los resultados de varios juegos de tu equipo de fútbol, 
donde 1 es ganar y 0 es perder, hacer un programa que indique el porcentaje de juegos que ganaste.
Ej.
Resultados de 6 juegos: 1, 1, 0, 1, 0, 1, 1
Salida:
Ganaste el 66.67% de los juegos*/
import Cl_Partido from "./Cl_Partido";
import Cl_Equipo from "./Cl_Equipo";

let partido1= new Cl_Partido(1);
let partido2= new Cl_Partido(1);
let partido3= new Cl_Partido(0);
let partido4= new Cl_Partido(1);
let partido5= new Cl_Partido(0);
let partido6= new Cl_Partido(1);
let partido7= new Cl_Partido(1);

let equipo= new Cl_Equipo();

equipo.procesar(partido1);
equipo.procesar(partido2);
equipo.procesar(partido3);
equipo.procesar(partido4);
equipo.procesar(partido5);
equipo.procesar(partido6);
equipo.procesar(partido7);

let Salida = document.getElementId("Salida");
Salida.INNERHTML = "Resultados del Equipo";
Salida.INNERHTML = equipo.porcentajeVic();

