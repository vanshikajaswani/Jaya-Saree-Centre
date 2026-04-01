// LIKE SYSTEM
let liked = [];
for(let i=0;i<20;i++){
    liked[i]=false;
}

function toggleLike(num, prefix="like") {
    let index = num-1;

    let id = prefix + num;

    if (!liked[index]) {
        document.getElementById(id).innerHTML = "❤️";
        liked[index] = true;
    } else {
        document.getElementById(id).innerHTML = "🤍";
        liked[index] = false;
    }
}


// CART SYSTEM
let cart = [];
let items = 0;
let target = 3;

function addToCart(item, btn) {

    cart.push({name: item, price: 500});
    updateCart();

    items++;
    drawCart();

    btn.style.backgroundColor = "grey";
    btn.innerHTML = "Added";
    btn.disabled = true;
}


function updateCart() {

    let list = document.getElementById("cartList");
    if (!list) return;

    list.innerHTML = "";

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        list.innerHTML += "<li>" + cart[i].name + " - ₹" + cart[i].price + "</li>";
        total += cart[i].price;
    }

    document.getElementById("totalItems").innerHTML =
        "Total Items: " + cart.length + " | Total Price: ₹" + total;
}


// CANVAS
function drawCart() {

    let canvas = document.getElementById("cartCanvas");
    if (!canvas) return;

    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "18px Arial";
    ctx.fillText("Free Delivery Progress", 70, 20);

    ctx.fillStyle = "#ddd";
    ctx.fillRect(50, 40, 250, 20);

    let progress = (items / target) * 250;

    ctx.fillStyle = "brown";
    ctx.fillRect(50, 40, progress, 20);

    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(items + " / " + target + " items", 90, 85);

    if (items >= target) {
        ctx.fillStyle = "green";
        ctx.fillText("Free Delivery!", 100, 105);
    }
}


// HOVER EFFECT
let images = document.getElementsByClassName("product-img");

for (let i = 0; i < images.length; i++) {

    images[i].addEventListener("mouseover", function() {
        this.style.opacity = "0.7";
    });

    images[i].addEventListener("mouseout", function() {
        this.style.opacity = "1";
    });

}