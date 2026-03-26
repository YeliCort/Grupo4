// IMAGEN PRINCIPAL
const mainImage = document.getElementById("mainProductImage"); 
const thumbnails = document.querySelectorAll(".thumbnails img");
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function () {
    mainImage.src = this.src;
  });
}

// SELECCIONAR COLOR

const colorButtons = document.querySelectorAll(".swatch");

for (let i = 0; i < colorButtons.length; i++) {

  colorButtons[i].addEventListener("click", function () {

    if (this.classList.contains("selected")) {
      this.classList.remove("selected");
      selectedColor = "";
      return;
    } else {

      for (let j = 0; j < colorButtons.length; j++) {
        colorButtons[j].classList.remove("selected");
      }

      this.classList.add("selected");
      selectedColor = this.dataset.color;
    }
  });
}

//SELECCIONAR CANTIDAD
function changeQty(amount) {
  const qtyInput = document.getElementById("qty");
  let current = parseInt(qtyInput.value);

  current += amount;

  if (current < 1) current = 1;
  if (current > 99) current = 99;

  qtyInput.value = current;
}


// CONTENIDO DEL CARRITO

let cartText = localStorage.getItem("cart");
let cart = cartText ? cartText.split("|") : [];
let selectedColor = "";
const productName = document.querySelector("h1").textContent;

// AÑADIR AL CARRITO

const addCartBtn = document.getElementById("addCartBtn");
const quantitySelect = document.getElementById("qty");

addCartBtn.addEventListener("click", function () {
  const quantity = quantitySelect.value;
  const precio = document.querySelector(".product-price-top").textContent;

  if (selectedColor === "") {
    alert("Debe de seleccionar un color para añadir al carrito.");
    return;
  } else {
    const itemText = `${quantity},${productName},${selectedColor},${precio}`;
    cart.push(itemText);
    localStorage.setItem("cart", cart.join("|"));
    alert(`Se añadió ${quantity} ${productName} de color ${selectedColor}.`);
  }
});

// MOSTRAR CARRITO

const cartIcon = document.getElementById("cartIcon");

cartIcon.addEventListener("click", function () {

  if (cart.length === 0) {
    alert("No se ha añadido ningún producto");
    return;
  } else {

    mensaje = "Los productos seleccionados:\n\n";
    let mensajetotal = "";
    let sumatotal = 0;

    for (let i = 0; i < cart.length; i++) {

      const partes = cart[i].split(",");
      const cantidad = partes[0];
      const nombre = partes[1];
      const color = partes[2];
      const precio = partes[3];
      const convCant = parseInt(cantidad);
      const convprecio = parseFloat(precio);
      const segunCantidad = convCant * convprecio;
      sumatotal += segunCantidad;
      mensaje += `- ${cantidad} ${nombre} de color ${color}: ${precio}/unidad: \n Precio según unidad:${segunCantidad}€ \n\n`;
      mensajetotal = `\n Total ${sumatotal}€`;
    }
    alert(mensaje + mensajetotal);
  }
});

// BORRAR DATOS DE PRODUCTOS SI SE REFRESCA LA WEB
if (!sessionStorage.getItem("paginaAbierta")) {
  sessionStorage.setItem("paginaAbierta", "si");
} else {
  localStorage.removeItem("cart");
}