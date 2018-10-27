
var myDataProductos;

function getDataProductos() {

    var my_producto = $("#id_productos").val();

    myDataProductos.forEach(function (tweet) {
        //alert(tweet.nombre);
        if (tweet.id == my_producto) {

            $('#Precio').val(tweet.price);
            $('#Descuento').val(tweet.discount);
            $('#Imagen').attr("src", tweet.image);
        }

    });
}


function getProducts() {

    var listProducts = []

    var myProduct1 = new ShoppingCarProduct();
    myProduct1.id = "001";
    myProduct1.name = "Collar";
    myProduct1.price = "150";
    myProduct1.image = "https://www.collares-perros.es/912-home_default/collar-antiparasitario-para-perro-piel-vaquetilla-rosa-palo.jpg";
    myProduct1.discount = 15;

    var myProduct2 = new ShoppingCarProduct();
    myProduct2.id = "002";
    myProduct2.name = "Pelota";
    myProduct2.price = "80";
    myProduct2.image = "data:image/jpeg;base64,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";
    myProduct2.discount = 10;

    var myProduct3 = new ShoppingCarProduct();
    myProduct3.id = "003";
    myProduct3.name = "Disfraz 1";
    myProduct3.price = "250";
    myProduct3.image = "https://media3.fordogever.com/599-large_default/disfraz-para-perro-star-wars-ewok.jpg";
    myProduct3.discount = 10;

    var myProduct4 = new ShoppingCarProduct();
    myProduct3.id = "004";
    myProduct3.name = "Disfraz 2";
    myProduct3.price = "150";
    myProduct3.image = "https://static1.funidelia.com/40758-f4_list/disfraz-de-papa-para-perro.jpg";
    myProduct3.discount = 15;

    var myProduct5 = new ShoppingCarProduct();
    myProduct3.id = "005";
    myProduct3.name = "Disfraz 3";
    myProduct3.price = "250";
    myProduct3.image = "http://www.partyfiesta.com/on/demandware.static/-/Sites-partyfiesta-catalog/default/dwd2ca6927/images/large/215437.jpg";
    myProduct3.discount = 20;

    var myProduct6 = new ShoppingCarProduct();
    myProduct3.id = "006";
    myProduct3.name = "Disfraz 4";
    myProduct3.price = "300";
    myProduct3.image = "http://azu.facilisimo.com/ima/i/2/a/c3/am_79226_6050053_285347.jpg";
    myProduct3.discount = 10;

    listProducts.push(myProduct1);
    listProducts.push(myProduct2);
    listProducts.push(myProduct3);
    listProducts.push(myProduct4);
    listProducts.push(myProduct5);
    listProducts.push(myProduct6);

    try {
        tweets = JSON.stringify(listProducts);
        tweets = JSON.parse(tweets);
        myDataProductos = tweets;

        tweets.forEach(function (tweet) {
            $('#id_productos').append($("<option></option>").attr("value", tweet.id).text(tweet.name));
        });
    }
    catch (e) {
        alert("error : " + e);
    }
}


// <!-- Shopping Car -->

var currentUserShoppingCart;
var i;


Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function (key) {
    return this.getItem(key) && JSON.parse(this.getItem(key));
}


function HeaderShoppingCar() {
    this.idMov = 0;
    this.idUser = 0;
    this.idCliente = 0;
    this.nombreCliente = '';
    this.tipoMov = 0;

    this.strSerie = '';
    this.strFolio = '';

    this.strConcepto = '';
    this.strFormaPago = '';
    this.decSubTotal = 0;

    this.decDescuento = 0;
    this.decIva = 0;
    this.decTotal = 0;

}

function ShoppingCarItem() {
    this.Par = i;
    this.ProductID = 0;

    this.ProductName = '';
    this.Precio = 0;
    this.Cantidad = 0;

    this.Importe = 0;
    this.Descuento = 0;
    this.Imagen = '';

    this.PorcDesc1 = 0;
    this.PorcDesc2 = 0;
    this.PorcDesc3 = 0;
    this.Desc1 = 0;
    this.Desc2 = 0;
    this.Desc3 = 0;
    this.ImporteNeto = 0;

}


function ShoppingCarProduct() {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.discount = 0;
    this.image = "";
}


function initialize() {
    currentUserShoppingCart = new Array();
    i = 0;
    getProducts();
}


function addCar() {

    try {

        var cantidad = document.getElementById("Cantidad").value;

        if (cantidad == "") throw "Teclea cantidad";
        if (isNaN(cantidad)) throw "Numeros solamente";
        if (cantidad < 1) throw "Mayor a 0";

        var item = new ShoppingCarItem();
        item.Par = i + 1;
        item.ProductID = $("#id_productos").val();

        item.ProductName = $("#id_productos :selected").text().toUpperCase();

        item.Precio = parseFloat(document.getElementById("Precio").value);
        item.Descuento = parseFloat(document.getElementById("Descuento").value);
        item.Imagen = document.getElementById("Imagen").src;
        item.Cantidad = cantidad;
        var importe = 0;

        importe = item.Precio * item.Cantidad * ((100 - item.Descuento) / 100);

        item.Importe = Math.round(importe * 100) / 100;

        var exist = 0;
        for (var c = currentUserShoppingCart.length; c--;) {
            var it = currentUserShoppingCart[c];

            if (it.ProductID == item.ProductID) {
                var Cantidad = 0;
                Cantidad = parseFloat(currentUserShoppingCart[c].Cantidad);
                Cantidad += parseFloat(item.Cantidad);
                currentUserShoppingCart[c].Cantidad = Cantidad;

                var importe = 0;

                importe = item.Precio * Cantidad * ((100 - item.Descuento) / 100);

                currentUserShoppingCart[c].Importe = Math.round(importe * 100) / 100;

                exist = 1;
            }


        }

        if (exist == 0) {
            currentUserShoppingCart[i] = item;
            i++;
        }

        sessionStorage.setObject('UserShoppingCart', currentUserShoppingCart);
        //alert("show");
        showScar();
        document.getElementById("Precio").innerHTML = '0';
        document.getElementById('id_productos').focus();
    }
    catch (err) {
        var msgError = "Ocurrio un error en la página.\n\n";
        msgError += "Descripción: " + err + "\n\n";
        msgError += "Click OK para continuar.\n\n";

        document.getElementById('Cantidad').value = '';
        document.getElementById('Cantidad').focus();
        alert(msgError);

    }
}



function showScar() {
    var tableCirs = document.getElementById('tableProducts');

    for (var c = tableCirs.rows.length - 1; c > 0; c--) {
        tableCirs.deleteRow(c);
    }

    var userShoppingCart = sessionStorage.getObject('UserShoppingCart');

    if (!userShoppingCart) {
        $('car').innerHTML = '<br />UserShoppingCart does NOT exist in sessionStorage.';
        return;
    }


    var totalUni = 0;
    var totImporte = 0;

    userShoppingCart.forEach(function (tweet) {

        //alert("" + tweet.cir);

        var rowCir = tableCirs.insertRow(-1);

        var rowCount = tableCirs.rows.length - 1;

        var cellCantidad = rowCir.insertCell(0);
        var cellProducto = rowCir.insertCell(1);
        var cellPrecio = rowCir.insertCell(2);

        var cellImporte = rowCir.insertCell(3);
        var cellImagen = rowCir.insertCell(4);
        var cellDescuento = rowCir.insertCell(5);
        var cellAgregar = rowCir.insertCell(6);
        var cellBorrar = rowCir.insertCell(7);
        var url = "<a class=\"btn btn-danger\" type=\"button\" href=\"javascript: void();\" onclick=\"deleteItem(" + tweet.ProductID + ")\">Borrar</a>";
        var urlAgregar = "<a class=\"btn btn-success\" type=\"button\" href=\"javascript: void();\" onclick=\"addOneMoreItem(" + tweet.ProductID + ")\">Agregar</a>";

        cellCantidad.innerHTML = tweet.Cantidad;
        cellProducto.innerHTML = tweet.ProductName;
        cellPrecio.innerHTML = tweet.Precio;
        cellImagen.innerHTML = '<img src="' + tweet.Imagen + '" class="image-thumbnail" height="100" width="150">';
        cellDescuento.innerHTML = tweet.Descuento;

        cellImporte.innerHTML = tweet.Importe;
        cellAgregar.innerHTML = urlAgregar;
        cellBorrar.innerHTML = url;

        totalUni += parseFloat(tweet.Cantidad);

        totImporte += tweet.Importe;

    });

    document.getElementById('totalUnidades').innerHTML = '<b>' + parseFloat(totalUni) + '</b>';

    document.getElementById('totalImporte').innerHTML = '<b id="tImporte">' + totImporte + '</b>';

}

function deleteItem(item) {
    for (var c = currentUserShoppingCart.length; c--;) {
        var it = currentUserShoppingCart[c];
        if (it.ProductID == item) {
            var cantidad = 0;
            cantidad = parseFloat(currentUserShoppingCart[c].Cantidad);
            cantidad--;
            if (cantidad == 0) {
                currentUserShoppingCart.splice(c, 1);
                i--;
            } else {
                currentUserShoppingCart[c].Cantidad = cantidad;
                var importe = 0;
                importe = it.Precio * cantidad * ((100 - it.Descuento) / 100);
                currentUserShoppingCart[c].Importe = Math.round(importe * 100) / 100;
            }
        }
    }
    sessionStorage.setObject('UserShoppingCart', currentUserShoppingCart);
    showScar();

}

function addOneMoreItem(itemId) {
    for (var c = currentUserShoppingCart.length; c--;) {
        var it = currentUserShoppingCart[c];

        if (it.ProductID == itemId) {
            var Cantidad = 0;
            Cantidad = parseFloat(currentUserShoppingCart[c].Cantidad) + 1;
            currentUserShoppingCart[c].Cantidad = Cantidad;
            var importe = 0;
            importe = it.Precio * Cantidad * ((100 - it.Descuento) / 100);
            currentUserShoppingCart[c].Importe = Math.round(importe * 100) / 100;
        }
    }
    sessionStorage.setObject('UserShoppingCart', currentUserShoppingCart);
    showScar();
}

function clearSessionStorage() {
    sessionStorage.clear();
}

// <!-- Shopping Car -->
