const quantity = document.querySelector('#qty');
const buyButton = document.querySelector('#buyButton');
let count = 1;

function updateOrder() {
  quantity.textContent = count;
  const itemLabel = count === 1 ? '1 bolso' : `${count} bolsos`;
  buyButton.href = `https://wa.me/573175097469?text=${encodeURIComponent(`Hola Bosco, quiero pedir ${itemLabel} Crossbody Blanco por $185.000 COP c/u.`)}`;
}

document.querySelector('#minus').addEventListener('click', () => { if (count > 1) { count--; updateOrder(); } });
document.querySelector('#plus').addEventListener('click', () => { count++; updateOrder(); });
updateOrder();
