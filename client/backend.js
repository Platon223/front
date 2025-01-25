const socket = io('https://store-7.onrender.com');

let productStorageBaits = "";
let productStorageRods = "";
let productStorageReels = "";
let productStorageHooks = "";
let productStorageSpecials = "";
let productTrack = "";
let uptades = "";
const sbutton = document.querySelector('.sbutton');
const remove = document.querySelector('.del-button');

socket.on('users', (users) => {
  document.querySelector('.num-users').innerHTML = `<p> ${users} people are on your site </p>`;
  console.log(users);
})

sbutton.addEventListener('click', () => {
    const productName = document.getElementById("name").value;
    const productName2 = document.getElementById("name2").value;
    const productClass = document.getElementById("class").value;
    const productPlace = document.getElementById("place").value;
    const productPrice = document.getElementById("price").value;
    const productImg = document.getElementById("image").value;
  
    const product = { price: productName2, nm: productName, nm2: productName2, img: productImg, pl: productPlace };

    console.log(product);
  
    socket.emit('add-product', product);
  })


remove.addEventListener('click', () => {
  const namePr = document.querySelector('.delete-product').value;

  socket.on('show-products', products => {
    
    products.forEach(pr => {
      if(namePr === pr.nm) {
        socket.emit('remove-product', namePr);
      }
    })
    

    
  })
  

  socket.emit('request-products');
})

  function uptade() {
    
   socket.emit('clear', 'hello');
    

    const upProcess = `<p>Sorry, the library is uptadting right now. Check back in in a few hours.</p>`;

    localStorage.setItem("uptadation", upProcess);
  }
