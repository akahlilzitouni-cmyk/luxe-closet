let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount(){
  let c = document.getElementById("cartCount");
  if(c) c.innerText = cart.length;
}
updateCartCount();

function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("تمت الإضافة للسلة");
}

if(document.getElementById("orderDetails")){
  let text = "", total = 0;
  cart.forEach(i=>{
    text += `- ${i.name} : ${i.price} دج\n`;
    total += i.price;
  });
  document.getElementById("orderDetails").value =
  text + "\nالمجموع: " + total + " دج";
}

document.getElementById("orderForm")?.addEventListener("submit", e=>{
  e.preventDefault();
  if(!confirm("تأكيد الطلب؟")) return;

  let n = e.target[0].value;
  let p = e.target[1].value;
  let a = e.target[2].value;
  let o = document.getElementById("orderDetails").value;

  let msg = `🛍️ طلب جديد
الاسم: ${n}
الهاتف: ${p}
العنوان: ${a}

${o}`;

  window.open(
    "https://wa.me/213668086810?text=" + encodeURIComponent(msg),
    "_blank"
  );
});