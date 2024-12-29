const socket = io('https://store-7.onrender.com');

let productStorageBaits = "";
let productStorageRods = "";
let productStorageReels = "";
let productStorageHooks = "";
let productStorageSpecials = "";
let productTrack = "";
let uptades = "";
const sbutton = document.querySelector('.sbutton');

docuemnt.querySelector('num-users').innerHTML = localStorage.getItem('see-users');

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

  function uptade() {
    
   socket.emit('clear', 'hello');
    

    const upProcess = `<p>Sorry, the library is uptadting right now. Check back in in a few hours.</p>`;

    localStorage.setItem("uptadation", upProcess);
  }
