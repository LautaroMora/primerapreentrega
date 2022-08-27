class Auto {
    constructor(marca, modelo, pasajeros, precio, id) {
        this.marca = marca;
        this.modelo = modelo;
        this.pasajeros = parseInt(pasajeros);
        this.precio = parseInt(precio);
        this.id = id.toUpperCase();
    }

}

//autos cargados

const autos = [
    new Auto("Toyota", "Etios", 5, 5500, "HTF865"),
    new Auto("Chevrolet", " Trailblazer", 7, 7500, "FSK596"),
    new Auto("Fiat", "Cronos", 5, 6000, "ABU224"),
    new Auto("Chevrolet", "Cobalt", 5, 5000, "MNE557"),
    new Auto("Toyota", "Corolla", 5, 5500, "TVI981"),
    new Auto("Chevrolet", "Spin AT", 7, 7000, "QTO523")
];

console.log(autos)

//Pedir autos

let continuar = true;

while (continuar) {
    let ingreso = prompt("Vamos a cargar al sistema los autos de tu empresa para ponerlos en alquiler. Tienen que ser el siguiente orden: Marca, Modelo, Cantidad de pasajeros que puede llevar, Precio por día, id o patente. Todos separados por una barra diagonal (/). Ingresá X para finalizar")

    if (ingreso.toUpperCase() == "X") {
        continuar = false;
        break;
    }

    let datos = ingreso.split("/");
    const auto = new Auto(datos[0], datos[1], datos[2], datos[3], datos[4]);

    autos.push(auto);

    console.log(autos);
}

let criterio = prompt("Elegí como ver los autos: \n1 - Del más barato al más caro\n2 - Del más caro al mas barato\n3 - De mayor capacidad a menos capacidad \n4 - De menor capacidad a mayor capacidad");

function ordenar(criterio, autos) {
    let autosOrdenados = autos.slice(0);
    switch (criterio) {
        case "1":
            return autosOrdenados.sort((a, b) => a.precio - b.precio);
        case "2":
            return autosOrdenados.sort((a, b) => b.precio - a.precio);
        case "3":
            return autosOrdenados.sort((a, b) => a.pasajeros - b.pasajeros);
        case "4":
            return autosOrdenados.sort((a, b) => b.pasajeros - a.pasajeros);
        default:
            alert("No es un criterio válido")
            break;
    }
}

function mostrarString (array){
    let info = " ";

    array.forEach(elemento => {
        info +="Marca: "+elemento.marca + "\nModelo: "+ elemento.modelo + "\nCapacidad de pasajeros: " + elemento.pasajeros + "\nPrecio por día: " + elemento.precio + "\nPatente: "+ elemento.id + "\n\n"     
    });


    return info
}

//mostrar string ordenado

alert((mostrarString(ordenar(criterio,autos)))); 