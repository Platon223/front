const socket = io('https://store-7.onrender.com');

let productStorageBaits = "";
let productStorageRods = "";
let productStorageReels = "";
let productStorageHooks = "";
let productStorageSpecials = "";
let productTrack = "";
let uptades = "";
const sbutton = document.querySelector('.sbutton');
const list = document.querySelector('.row');



productTrack = localStorage.getItem("track");
uptades = localStorage.getItem("uptade");
productStorageRods = localStorage.getItem("rods");

socket.on('launch', ({ products }) => {
  uptadeProducts(products);
  console.log(products);
})

socket.on('added-product', (product) => {
  uptadeProducts([product]);
  console.log([product]);
})

socket.on('users', (users) => {
  console.log(users);
})





function uptadeProducts(products) {
  products.forEach((pr) => {
    const prElement = document.createElement('div');
    prElement.innerHTML = ` <div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${pr.img}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${pr.nm}</h5>
                        <p class="card-text">$ ${pr.price}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place${pr.pl}('${pr.nm}', ${pr.price}, '${pr.img}');">Add to cart</button></a>
                      </div>
                    </div> </div> `;
   

    list.appendChild(prElement);
  });
}















    

function submit() {
        let productName = document.querySelector(".name").value;
        let productClass = document.querySelector(".classification").value;
        let productPlace = document.querySelector(".place").value;
        let productPrice = document.querySelector(".price").value;
        let productImg = document.querySelector(".imgURL").value;

        localStorage.setItem("img", productImg);

        if ((productName === "") & (productPrice === "")) {
          document.querySelector(
            ".helper"
          ).innerHTML = `<p> Not much information about the product </p> <button onclick="Ok();">Ok</button>`;
        } else if (productName === "") {
          document.querySelector(
            ".helper"
          ).innerHTML = `<p>You gotta have a name for your product </p> <button onclick="Ok();">Ok</button>`;
        } else if (productPrice === "") {
          document.querySelector(
            ".helper"
          ).innerHTML = `<p>You gotta identify a price for your product </p> <button onclick="Ok();">Ok</button>`;
        } else if (productClass === "") {
          document.querySelector(
            ".helper"
          ).innerHTML = `<p>Class is required </p> <button onclick="Ok();">Ok</button>`;
        }

        if (
          (productName != "") &
          (productPrice != "") &
          (productClass != "") &
          (productPlace != "") &
          (productImg != "")
        ) {
          productTrack += `<h1>${productName}  $${productPrice} --- ${productPlace}</h1>`;
          uptades += `<p>${productName}  $${productPrice} --- ${productPlace} </p>`;
          if ((productClass === "Rods") & (productPlace === "001")) {
            productStorageRods += ` <div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place1();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code1 = productName;
            const price1 = productPrice;
            const img1 = productImg;
            localStorage.setItem("code1", code1);
            localStorage.setItem("price1", price1);
            localStorage.setItem("img1", img1);
            console.log(code1);
          } else if ((productClass === "Rods") & (productPlace === "002")) {
            productStorageRods += ` <div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place2();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code2 = productName;
            const price2 = productPrice;
            const img2 = productImg;
            localStorage.setItem("code2", code2);
            localStorage.setItem("price2", price2);
            localStorage.setItem("img2", img2);
            console.log(code2);
          } else if ((productClass === "Rods") & (productPlace === "003")) {
            productStorageRods += `<div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place3();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code3 = productName;
            const price3 = productPrice;
            const img3 = productImg;
            localStorage.setItem("code3", code3);
            localStorage.setItem("price3", price3);
            localStorage.setItem("img3", img3);
          } else if ((productClass === "Rods") & (productPlace === "004")) {
            productStorageRods += `<div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;" >
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place4();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code4 = productName;
            const price4 = productPrice;
            const img4 = productImg;
            localStorage.setItem("code4", code4);
            localStorage.setItem("price4", price4);
            localStorage.setItem("img4", img4);
          } else if ((productClass === "Rods") & (productPlace === "005")) {
            productStorageRods += `<div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place5();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code5 = productName;
            const price5 = productPrice;
            const img5 = productImg;
            localStorage.setItem("code5", code5);
            localStorage.setItem("price5", price5);
            localStorage.setItem("img5", img5);
          } else if ((productClass === "Rods") & (productPlace === "006")) {
            productStorageRods += `<div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place6();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code6 = productName;
            const price6 = productPrice;
            const img6 = productImg;
            localStorage.setItem("code6", code6);
            localStorage.setItem("price6", price6);
            localStorage.setItem("img6", img6);
          } else if ((productClass === "Rods") & (productPlace === "007")) {
            productStorageRods += `<div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place7();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code7 = productName;
            const price7 = productPrice;
            const img7 = productImg;
            localStorage.setItem("code7", code7);
            localStorage.setItem("price7", price7);
            localStorage.setItem("img7", img7);
          } else if ((productClass === "Rods") & (productPlace === "008")) {
            productStorageRods += `<div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place8();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code8 = productName;
            const price8 = productPrice;
            const img8 = productImg;
            localStorage.setItem("code8", code8);
            localStorage.setItem("price8", price8);
            localStorage.setItem("img8", img8);
          } else if (productClass === "Baits") {
            productStorageBaits += `<h1>${productName}  ${productPrice}</h1>`;
          } else if (productClass === "Reels") {
            productStorageReels += `<h1>${productName}  ${productPrice}</h1>`;
          }
        }

        localStorage.setItem("track", productTrack);
        localStorage.setItem("uptade", uptades);
        localStorage.setItem("rods", productStorageRods);

        document.querySelector(".tracking").innerHTML = productTrack;
        document.querySelector(".uptadation").innerHTML = uptades;
      }

      function place1(nm, price, img) {
       

        localStorage.setItem('price1', price);
        localStorage.setItem('code1', nm);
        localStorage.setItem('img1', img);

        

        const itemsArray = [];

        itemsArray.push(nm);

        let cartHTML = "";

        for (let i = 0; i < itemsArray.length; i++) {
          let html = `<div class="stuff1"> <div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${nm}  $ ${price}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <button class="btn btn-success" onclick="addproduct1PriseAndQuanity();"> + </button>
          <li class="count1" style="font-size: 25px;"></li>
          <button class="btn btn-danger" onclick="decproduct1PriseAndQuanity();"> - </button>
        </ul>
        <div class="card-body">
          <button onclick="removeProduct1();">Delete</button>
        </div>
      </div> </div> </div>`;

          cartHTML += html;
        }

        const shopItem = cartHTML;

        cartCount1 += 1;

        if (cartCount1 === 1) {
          cartCount += 1;
        }

        localStorage.setItem("thing1", shopItem);
      }

      function place2() {
        let place = localStorage.getItem("code2");
        let price = localStorage.getItem("price2");
        let img = localStorage.getItem("img2");

        const itemsArray = [];

        itemsArray.push(place);

        console.log(itemsArray);

        let cartHTML = "";

        for (let i = 0; i < itemsArray.length; i++) {
          let html = `<div class="stuff2"> <div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${place}  $ ${price}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <button class="btn btn-success" onclick="addproduct2PriseAndQuanity();"> + </button>
          <li class="count2"  style="font-size: 25px;"></li>
          <button class="btn btn-danger" onclick="decproduct2PriseAndQuanity();"> - </button>
        </ul>
        <div class="card-body">
          <button onclick="removeProduct2();">Delete</button>
        </div>
      </div> </div> </div>`;

          cartHTML += html;
        }

        const shopItem = cartHTML;

        cartCount1 += 1;

        if (cartCount1 === 1) {
          cartCount += 1;
        }

        localStorage.setItem("thing2", shopItem);
      }

      function place3() {
        let place = localStorage.getItem("code3");
        let price = localStorage.getItem("price3");
        let img = localStorage.getItem("img3");

        const itemsArray = [];

        itemsArray.push(place);

        console.log(itemsArray);

        let cartHTML = "";

        for (let i = 0; i < itemsArray.length; i++) {
          let html = `<div class="stuff3"> <div class="col-lg"> <div class="card text-bg-secondary mb-3 " style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${place}  $ ${price}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
           <button class="btn btn-success" onclick="addproduct3PriseAndQuanity();"> + </button>
          <li class="count3 fs-50" style="font-size: 25px;"></li>
          <button class="btn btn-danger" onclick="decproduct3PriseAndQuanity();"> - </button>
        </ul>
        <div class="card-body">
          <button onclick="removeProduct3();">Delete</button>
        </div>
      </div> </div> </div>`;

          cartHTML += html;
        }

        const shopItem = cartHTML;

        cartCount1 += 1;

        if (cartCount1 === 1) {
          cartCount += 1;
        }

        localStorage.setItem("thing3", shopItem);
      }

      function place4() {
        let place = localStorage.getItem("code4");
        let price = localStorage.getItem("price4");
        let img = localStorage.getItem("img4");

        const itemsArray = [];

        itemsArray.push(place);

        console.log(itemsArray);

        let cartHTML = "";

        for (let i = 0; i < itemsArray.length; i++) {
          let html = `<div class="stuff4"> <div class="col-lg"> <div class="card text-bg-secondary mb-3 " style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${place}  $ ${price}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <button class="btn btn-success" onclick="addproduct4PriseAndQuanity();"> + </button>
          <li class="count4" style="font-size: 25px;"></li>
          <button class="btn btn-danger" onclick="decproduct4PriseAndQuanity();"> - </button>
        </ul>
        <div class="card-body">
          <button onclick="removeProduct4();">Delete</button>
        </div>
      </div> </div> </div>`;

          cartHTML += html;
        }

        const shopItem = cartHTML;

        cartCount1 += 1;

        if (cartCount1 === 1) {
          cartCount += 1;
        }

        localStorage.setItem("thing4", shopItem);
      }

      function place5() {
        let place = localStorage.getItem("code5");
        let price = localStorage.getItem("price5");
        let img = localStorage.getItem("img5");

        const itemsArray = [];

        itemsArray.push(place);

        console.log(itemsArray);

        let cartHTML = "";

        for (let i = 0; i < itemsArray.length; i++) {
          let html = `<div class="stuff5"> <div class="col-lg"> <div class="card text-bg-secondary mb-3 " style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${place}  $ ${price}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <button class="btn btn-success" onclick="addproduct5PriseAndQuanity();"> + </button>
          <li class="count5" style="font-size: 25px;"></li>
          <button class="btn btn-danger" onclick="decproduct5PriseAndQuanity();"> - </button>
        </ul>
        <div class="card-body">
          <button onclick="removeProduct5();">Delete</button>
        </div>
      </div> </div> </div>`;

          cartHTML += html;
        }

        const shopItem = cartHTML;

        cartCount1 += 1;

        if (cartCount1 === 1) {
          cartCount += 1;
        }

        localStorage.setItem("thing5", shopItem);
      }

      function place6() {
        let place = localStorage.getItem("code6");
        let price = localStorage.getItem("price6");
        let img = localStorage.getItem("img6");

        const itemsArray = [];

        itemsArray.push(place);

        console.log(itemsArray);

        let cartHTML = "";

        for (let i = 0; i < itemsArray.length; i++) {
          let html = `<div class="stuff6"> <div class="col-lg"> <div class="card text-bg-secondary mb-3 " style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${place}  $ ${price}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <button class="btn btn-success" onclick="addproduct6PriseAndQuanity();"> + </button>
          <li class="count6" style="font-size: 25px;"></li>
          <button class="btn btn-danger" onclick="decproduct6PriseAndQuanity();"> - </button>
        </ul>
        <div class="card-body">
          <button onclick="removeProduct6();">Delete</button>
        </div>
      </div> </div> </div>`;

          cartHTML += html;
        }

        const shopItem = cartHTML;

        cartCount1 += 1;

        if (cartCount1 === 1) {
          cartCount += 1;
        }

        localStorage.setItem("thing6", shopItem);
      }

      function place7() {
        let place = localStorage.getItem("code7");
        let price = localStorage.getItem("price7");
        let img = localStorage.getItem("img7");

        const itemsArray = [];

        itemsArray.push(place);

        console.log(itemsArray);

        let cartHTML = "";

        for (let i = 0; i < itemsArray.length; i++) {
          let html = `<div class="stuff7"> <div class="col-lg"> <div class="card text-bg-secondary mb-3 " style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${place}  $${price}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <button class="btn btn-success" onclick="addproduct7PriseAndQuanity();"> + </button>
          <li class="count7" style="font-size: 25px;"></li>
          <button class="btn btn-danger" onclick="decproduct7PriseAndQuanity();"> - </button>
        </ul>
        <div class="card-body">
          <button onclick="removeProduct7();">Delete</button>
        </div>
      </div> </div> </div>`;

          cartHTML += html;
        }

        const shopItem = cartHTML;

        cartCount1 += 1;

        if (cartCount1 === 1) {
          cartCount += 1;
        }

        localStorage.setItem("thing7", shopItem);
      }

      function place8() {
        let place = localStorage.getItem("code8");
        let price = localStorage.getItem("price8");
        let img = localStorage.getItem("img8");

        const itemsArray = [];

        itemsArray.push(place);

        console.log(itemsArray);

        let cartHTML = "";

        for (let i = 0; i < itemsArray.length; i++) {
          let html = `<div class="stuff8"> <div class="col-lg"> <div class="card text-bg-secondary mb-3 " style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${place}  $${price}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <button class="btn btn-success" onclick="addproduct8PriseAndQuanity();"> + </button>
          <li class="count8" style="font-size: 25px;"></li>
          <button class="btn btn-danger" onclick="decproduct8PriseAndQuanity();"> - </button>
        </ul>
        <div class="card-body">
          <button onclick="removeProduct8();">Delete</button>
        </div>
      </div> </div> </div>`;

          cartHTML += html;
        }

        const shopItem = cartHTML;

        cartCount1 += 1;

        if (cartCount1 === 1) {
          cartCount += 1;
        }

        localStorage.setItem("thing8", shopItem);
      }

      function Ok() {
        document.querySelector(".helper").innerHTML = "";
      }





// STORE SIDE

const loadingElem = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    loadingElem.style.opacity = '0';

    setTimeout(function(){
        loadingElem.style.display = 'none';
    }, 200)
})

localStorage.getItem('product');

document.querySelector('.row').innerHTML = localStorage.getItem('uptadation');

setTimeout(function () {
    localStorage.removeItem("uptadation");
  
  }, 10000);


function menu() {
    
    const buttonElement = document.querySelector('.btn-primary');


    let menuChoice = '';

    if(buttonElement.innerText === 'Menu') {              
        buttonElement.innerHTML = `Close`;
        let html = `
        
            <div class="menu">  <button class="show-less" onclick=" document.querySelector('.options').innerHTML = ''; document.querySelector('.menu-button').innerHTML = 'Menu'; ">X</button> 
            
            <div class="container-link"> <a class="menu-links" href="">New Products</a> </div>  

            <div class="container-link"> <a class="menu-links" href="test.html">Cart</a> </div> 
            
            <div   class="container-link"> <a class="menu-links" href="">Favorites</a> </div>  
        
            <div  class="container-link"> <a class="menu-links" href="main.html">Home</a> </div>

            <a href="homebackend.html">Staff</a>
            
            </div>
        `;
        menuChoice += html;
    } else {
        buttonElement.innerHTML = 'Menu';
        let html = '';
        menuChoice += html;
    }


    document.querySelector('.options').innerHTML = menuChoice;
}





function searching() {


    const inputElement = document.querySelector('.form-control');
    console.log(inputElement);

    let name = inputElement.value;
    

    let display = '';



    if(name.includes('rod')) {
        
        let html = finalRod;



        display += html;

    } else if(name === 'Rod') {
     

        let html = finalRod;

        display += html;

    } else if(name === 'Rods') {

    

        let html = finalRod;

        display += html;

    } else if(name === 'Baits') {
       
        let html = finalBait;

        display += html;
    }
     else {
        

        let html = `<h1 class="error"> Nothing found for "${name} "</h1>
                    <h1>Try this:</h1>
                    <button onclick="
                              error(); ">Rods</button>
        `;

        display += html;
    }

    document.querySelector('.row').innerHTML = localStorage.getItem('uptadation');
    document.querySelector('.row').innerHTML = display;

  


}

let cartCount = 0;
let cartCount1 = 0;
let cartCount2 = 0;


function addProduct1() {

    document.querySelector('.added').innerHTML = `<i class="fa-solid fa-check"></i> <p>Added</p>`;

    setTimeout( function() {
        document.querySelector('.added').innerHTML = '';
    }, 2000)

    const itemsArray = [];

    itemsArray.push('Product1');

    let cartHTML = '';

    for(let i = 0; i < itemsArray.length; i++) {
        let html = `<div class="product1"> <h1 id="title">Product1</h1>  <button class="plus-button" onclick=" addproduct1PriseAndQuanity(); ">+</button> <div class="count"></div>  <button class="minus-button" onclick="decproduct1PriseAndQuanity();">-</button> <button class="delete" onclick="removeProduct1();">Delete</button> </div>`;

        cartHTML += html;
    }

    const shopItem = cartHTML;

   

    cartCount1 += 1;

    if(cartCount1 === 1) {
        cartCount += 1;
    }


    localStorage.setItem('cartCount', cartCount);

    document.querySelector('.items-cart').innerHTML = cartCount;


    localStorage.setItem('thing1', shopItem);

}


function addProduct2() {

    const itemsArray = [];

    itemsArray.push('Product2');


    let cartHTML = '';

    for(let i = 0; i < itemsArray.length; i++) {

        const html = `<div class="product2"> <h1>Product2</h1> <button onclick=" addproduct2PriseAndQuanity(); ">+</button>  <div class="count2"></div> <button onclick=" decproduct2PriseAndQuanity(); "> - </button> <button onclick="removeProduct2();">Delete</button> </div>`;
       
        cartHTML += html;
    }


    
    console.log(itemsArray);

    const shopItem = cartHTML;

    cartCount2 += 1;

    if(cartCount2 === 1) {
        cartCount += 1;
    }



    localStorage.setItem('cartCount', cartCount);

    document.querySelector('.items-cart').innerHTML = cartCount;

    localStorage.setItem('thing2', shopItem);

}




  function place2() {
    let place = localStorage.getItem("code2");
    let price = localStorage.getItem("price2");
    let img = localStorage.getItem('img2');

    const itemsArray = [];

    itemsArray.push(place);

    console.log(itemsArray);

    let cartHTML = "";

    for (let i = 0; i < itemsArray.length; i++) {
      let html = `<div class="stuff2"> <div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
  <img src="${img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${place}  $ ${price}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <button class="btn btn-success" onclick="addproduct2PriseAndQuanity();"> + </button>
    <li class="count2"></li>
    <button class="btn btn-danger" onclick="decproduct2PriseAndQuanity();"> - </button>
  </ul>
  <div class="card-body">
    <button onclick="removeProduct2();">Delete</button>
  </div>
</div> </div> </div>`;

      cartHTML += html;
    }

    const shopItem = cartHTML;

    cartCount1 += 1;

    if (cartCount1 === 1) {
      cartCount += 1;
    }

    

   

    localStorage.setItem("thing2", shopItem);
  }

  function place3() {
    let place = localStorage.getItem("code3");
    let price = localStorage.getItem("price3");
    let img = localStorage.getItem('img3');

    const itemsArray = [];

    itemsArray.push(place);

    console.log(itemsArray);

    let cartHTML = "";

    for (let i = 0; i < itemsArray.length; i++) {
      let html = `<div class="stuff3"> <div class="col-lg"> <div class="card text-bg-secondary mb-3 " style="width: 18rem;">
  <img src="${img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${place}  $ ${price}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <button class="btn btn-success" onclick="addproduct3PriseAndQuanity();"> + </button>
    <li class="count3" style="font-size: 25px;"></li>
    <button class="btn btn-danger" onclick="decproduct3PriseAndQuanity();"> - </button>
  </ul>
  <div class="card-body">
    <button onclick="removeProduct3();">Delete</button>
  </div>
</div> </div> </div>`;

      cartHTML += html;
    }

    const shopItem = cartHTML;

    cartCount1 += 1;

    if (cartCount1 === 1) {
      cartCount += 1;
    }

    localStorage.setItem("thing3", shopItem);
  }

  function place4() {
    let place = localStorage.getItem("code4");
    let price = localStorage.getItem("price4");
    let img = localStorage.getItem('img4');

    const itemsArray = [];

    itemsArray.push(place);

    console.log(itemsArray);

    let cartHTML = "";

    for (let i = 0; i < itemsArray.length; i++) {
      let html = `<div class="stuff4"> <div class="col-lg"> <div class="card text-bg-secondary mb-3 " style="width: 18rem;">
  <img src="${img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${place}  $ ${price}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <button class="btn btn-success" onclick="addproduct4PriseAndQuanity();"> + </button>
    <li class="count4" style="font-size: 25px;"></li>
    <button class="btn btn-danger" onclick="decproduct4PriseAndQuanity();"> - </button>
  </ul>
  <div class="card-body">
    <button onclick="removeProduct4();">Delete</button>
  </div>
</div> </div> </div>`;

      cartHTML += html;
    }

    const shopItem = cartHTML;

    cartCount1 += 1;

    if (cartCount1 === 1) {
      cartCount += 1;
    }

    localStorage.setItem("thing4", shopItem);
  }

  function place5() {
    let place = localStorage.getItem("code5");
    let price = localStorage.getItem("price5");
    let img = localStorage.getItem("img5");

    const itemsArray = [];

    itemsArray.push(place);

    console.log(itemsArray);

    let cartHTML = "";

    for (let i = 0; i < itemsArray.length; i++) {
      let html = `<div class="stuff5"> <div class="col-lg"> <div class="card text-bg-secondary mb-3 " style="width: 18rem;">
<img src="${img}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${place}  $ ${price}</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<ul class="list-group list-group-flush">
<button class="btn btn-success" onclick="addproduct5PriseAndQuanity();"> + </button>
<li class="count5" style="font-size: 25px;"></li>
<button class="btn btn-danger" onclick="decproduct5PriseAndQuanity();"> - </button>
</ul>
<div class="card-body">
<button onclick="removeProduct5();">Delete</button>
</div>
</div> </div> </div>`;

      cartHTML += html;
    }

    const shopItem = cartHTML;

    cartCount1 += 1;

    if (cartCount1 === 1) {
      cartCount += 1;
    }

    localStorage.setItem("thing5", shopItem);
  }

  function place6() {
    let place = localStorage.getItem("code6");
    let price = localStorage.getItem("price6");
    let img = localStorage.getItem("img6");

    const itemsArray = [];

    itemsArray.push(place);

    console.log(itemsArray);

    let cartHTML = "";

    for (let i = 0; i < itemsArray.length; i++) {
      let html = `<div class="stuff6"> <div class="col-lg"> <div class="card text-bg-secondary mb-3 " style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${place}  $ ${price}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <button class="btn btn-success" onclick="addproduct6PriseAndQuanity();"> + </button>
      <li class="count6" style="font-size: 25px;"></li>
      <button class="btn btn-danger" onclick="decproduct6PriseAndQuanity();"> - </button>
    </ul>
    <div class="card-body">
      <button onclick="removeProduct6();">Delete</button>
    </div>
  </div> </div> </div>`;

      cartHTML += html;
    }

    const shopItem = cartHTML;

    cartCount1 += 1;

    if (cartCount1 === 1) {
      cartCount += 1;
    }

    localStorage.setItem("thing6", shopItem);
  }

  function place7() {
    let place = localStorage.getItem("code7");
    let price = localStorage.getItem("price7");
    let img = localStorage.getItem("img7");

    const itemsArray = [];

    itemsArray.push(place);

    console.log(itemsArray);

    let cartHTML = "";

    for (let i = 0; i < itemsArray.length; i++) {
      let html = `<div class="stuff7"> <div class="col-lg"> <div class="card text-bg-secondary mb-3 " style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${place}  $${price}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <button class="btn btn-success" onclick="addproduct7PriseAndQuanity();"> + </button>
      <li class="count7" style="font-size: 25px;"></li>
      <button class="btn btn-danger" onclick="decproduct7PriseAndQuanity();"> - </button>
    </ul>
    <div class="card-body">
      <button onclick="removeProduct7();">Delete</button>
    </div>
  </div> </div> </div>`;

      cartHTML += html;
    }

    const shopItem = cartHTML;

    cartCount1 += 1;

    if (cartCount1 === 1) {
      cartCount += 1;
    }

    localStorage.setItem("thing7", shopItem);
  }

  function place8() {
    let place = localStorage.getItem("code8");
    let price = localStorage.getItem("price8");
    let img = localStorage.getItem("img8");

    const itemsArray = [];

    itemsArray.push(place);

    console.log(itemsArray);

    let cartHTML = "";

    for (let i = 0; i < itemsArray.length; i++) {
      let html = `<div class="stuff8"> <div class="col-lg"> <div class="card text-bg-secondary mb-3 " style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${place}  $${price}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <button class="btn btn-success" onclick="addproduct8PriseAndQuanity();"> + </button>
      <li class="count8" style="font-size: 25px;"></li>
      <button class="btn btn-danger" onclick="decproduct8PriseAndQuanity();"> - </button>
    </ul>
    <div class="card-body">
      <button onclick="removeProduct8();">Delete</button>
    </div>
  </div> </div> </div>`;

      cartHTML += html;
    }

    const shopItem = cartHTML;

    cartCount1 += 1;

    if (cartCount1 === 1) {
      cartCount += 1;
    }

    localStorage.setItem("thing8", shopItem);
  }


 





let finalBait = localStorage.getItem('baits');
let finalRod = localStorage.getItem('rods');




