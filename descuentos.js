//const precioOriginal = 120;
//const descuento = 18;

//const porcentajePrecioDescuento = 100 - descuento;

//const precioConDescuento = (precioOriginal * porcentajePrecioDescuento) /100;




function calcularPrecio(precioOriginal, descuento){

    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioDescuento) /100;
    return (precioConDescuento);

}



function calcularPrecioConDescuento(){


    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value; 

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const coupons = [
        "Cupon1",
        "Cupon2",
        "Cupon3",
    ]


    let descuento;

    switch(couponValue){
        case coupons[0]:
        descuento = 15;
        break;

        case coupons[1]:
        descuento = 30;
        break;

        case coupons[2]:
        descuento = 25;
        break;

    }

    const Precio = calcularPrecio(priceValue, descuento);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio a pagar es: $" + Precio;
}

