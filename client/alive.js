setInterval(() => {
    fetch("https://store-7.onrender.com/api/products")
        .catch(() => {}); 
}, 60000);
