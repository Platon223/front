setInterval(() => {
    fetch("https://store-7.onrender.com/api/products")
        .then(() => console.log("awake"))
        .catch((err) => console.log("error", err)); 
}, 60000);
