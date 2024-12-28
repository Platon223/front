const socket = io('http://localhost:3000');

let productStorageBaits = "";
let productStorageRods = "";
let productStorageReels = "";
let productStorageHooks = "";
let productStorageSpecials = "";
let productTrack = "";
let uptades = "";
const sbutton = document.querySelector('.sbutton');

sbutton.addEventListener('click', () => {
    let productName = document.querySelector(".name").value;
    let productClass = document.querySelector(".classification").value;
    let productPlace = document.querySelector(".place").value;
    let productPrice = document.querySelector(".price").value;
    let productImg = document.querySelector(".imgURL").value;
  
    const product = { price: productPrice, nm: productName, img: productImg, pl: productPlace };

    console.log(product);
  
    socket.emit('add-product', product);
  })

  function uptade() {
    
   socket.emit('clear', 'hello');
    

    const upProcess = `<p>Sorry, the library is uptadting right now. Check back in in a few hours.</p>`;

    localStorage.setItem("uptadation", upProcess);
  }
