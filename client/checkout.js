const cart = JSON.parse(localStorage.getItem('cart-body'));
const summary = document.querySelector('.cart-items');

cart.forEach(pr => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `<div class="cart-item">
          <img src="" alt="Product Image" />
          <div class="cart-item-details">
            <span class="cart-item-title">${pr.nm}</span>
            <span class="cart-item-price">$${pr.price}</span>
            <div class="cart-item-quantity">
              <button onclick="${pr.q} -= 1;">-</button>
              <input type="text" class="quantity-input" value="${pr.q}" />
              <button onclick="${pr.q} += 1;">+</button>
            </div>
          </div>
        </div>`;

    summary.appendChild(el);

    localStorage.setItem('cart-body', JSON.stringify(cart));
});
