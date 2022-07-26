function renderCartItem(item) {
    const product = item;

    let itemCountText = "";

    itemCountText = item.count + ` × ` + item.price + ` ₽ = `;

    let sum = item.count * item.price;

    itemCountText = itemCountText + sum + ` ₽`;

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
