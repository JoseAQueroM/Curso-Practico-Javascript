// Codigo Cuadrado

console.group("Cuadrados");

//Lados Cuadrado

//const ladoCuadrado = 5;

//console.log("El tamaño de los lados es: " + ladoCuadrado + "cm");

// Perimetro Cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
} 

//console.log("El perimetro es: " + perimetroCuadrado + "cm");

// Area Cuadrado

function areaCuadrado(lado1){
    return lado1 * lado1;
}

//console.log("El area es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Codigo Triangulo

console.group("Triangulos");

//const ladoTriangulo1 = 6; //cm
//const ladoTriangulo2 = 6; //cm
//const baseTriangulo = 4; //cm
//const alturaTriangulo = 5.5; //cm

// Medidas Triangulo

//console.log("Los triangulos miden:  " + ladoTriangulo1 + "cm y " + ladoTriangulo2 + "cm " 
//+ ", la base mide: " + baseTriangulo +"cm");

//console.log("La altura del triangulo mide: " + alturaTriangulo +"cm");

// Perimetor Triangulo

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
}

//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

// Area Triangulo


function areaTriangulo(baseTriangulo, alturaTringulo){
        return (baseTriangulo * alturaTringulo) / 2;
}

//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();


// Circulo 

console.group("Circulo");

const PI = Math.PI;


// Diametro Circulo

//const diametroCirculo = radioCirculo * 2;

function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
}

//console.log("El diametro del circulo es: " + diametroCirculo + "cm")

// Circunferencia Circulo

//const perimetroCirculo = diametroCirculo * PI;

function perimetroCirculo(diametroCirculo){
    return diametroCirculo * PI;

}

//console.log("El perimetro del circulo es: " + perimetroCirculo +"cm")

// Area de un circulo

//const areaCirculo = (radioCirculo * radioCirculo) * PI;

function areaCirculo(radioCirculo){
    return (radioCirculo * radioCirculo) * PI;    
}



//console.log("El area del circulo es: " + areaCirculo +"cm")


console.groupEnd();

// Utilizando Formularios con HTML y Javacript (Calcular perimetro y area del cuadrado)

function calcularPerimetroCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("input1"); // Llamando al valor
    const value1 = Number(input1.value); //Guardando el valor
 

    const input2 = document.getElementById("input2"); // Llamando al valor
    const value2 = Number(input2.value); // Guardando el Valor
 
    const input3 = document.getElementById("input3"); // Llamando al valor
    const value3 = Number(input3.value); // Guardando el valor

    const perimetro = perimetroTriangulo(value1, value2, value3); // Llamando a la funcion y enviandole valores
    alert("El perimetro del triangulo es: " + perimetro); // Llamando al resultado
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("input1");
    const value1 = input1.value;

    const input2 = document.getElementById("input2");
    const value2 = input2.value;

    const area = areaTriangulo(value1, value2);
    alert("El area del triangulo es: " + area);
}

function calcularDiametroCirculo(){
    const input = document.getElementById("input");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert("El diametro del Circulo es: " + diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("input");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perimetro del Circulo es: " + perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("input");
    const value = input.value;
    const Area = areaCirculo(value);
    alert("El Area del Circulo es: " + Area);
}

function alturaIsosceles(a, b, c){

    function altura(lado1, lado2, base){
        if(lado1 === lado2 && lado1 != base){
            alert('isoceles')
            const altura = Math.sqrt(lado1**2 - base**2/ 4)
            console.log(altura)
        }
        else{
            alert('no lo se')
        }
    }
    altura(6, 6, 4)
}

function calcularAlturaIsosceles(){
    const lado1 = document.getElementById("ladoA").value;
    const valueA = Number(lado1.value);
    console.log(lado1)

    const lado2 = document.getElementById("ladoB").value2;
    const valueB = Number(lado2.value);
    console.log(lado2)

    const baseC = document.getElementById("baseC").value3;
    const valueC = Number(baseC.value);
    console.log(valueC)

    altura = alturaIsosceles(valueA, valueB, valueC);

    console.log("La altura es " + altura);
  
}


