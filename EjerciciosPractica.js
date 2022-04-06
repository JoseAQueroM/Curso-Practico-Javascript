edad = prompt("Ingrese su edad por favor");

if(edad >= 18){
    console.log(`Su edad es ${edad}, por lo que puede conducir`);
} else{
    console.log(`Su edad es ${edad}, por lo que no puede conducir`)
}


nota = prompt("Ingrese su nota final");

if(nota <= 3){
    console.log(`Su nota es ${nota}, por lo que es un estudiante muy deficiente`)

} else if(nota <= 5){
    console.log("Su nota es insuficiente");

} else if(nota == 6){
    console.log("Su nota es suficiente");
} else if(nota == 7){
    console.log("Su nota esta bien");

} else if(nota <= 9){
    console.log("Su nota es notable");
    
} else if(nota == 10){
    console.log("Es un estudiante sobresaliente");
}

