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
    prElement.innerHTML = ` <div class="col-md-4 col-6"> <div class="card text-bg-secondary mb-3">
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

test_test.js:2 
function place1(nm, price, img) {
    localStorage.setItem("code1");
    localStorage.setItem("price1");
    localStorage.setItem("img1");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff1">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
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
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing1", shopItem);
}

test_test.js:2 
function place2(nm, price, img) {
    localStorage.setItem("code2");
    localStorage.setItem("price2");
    localStorage.setItem("img2");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff2">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct2PriseAndQuanity();"> + </button>
                                    <li class="count2" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct2PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct2();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing2", shopItem);
}

test_test.js:2 
function place3(nm, price, img) {
    localStorage.setItem("code3");
    localStorage.setItem("price3");
    localStorage.setItem("img3");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff3">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
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
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing3", shopItem);
}

test_test.js:2 
function place4(nm, price, img) {
    localStorage.setItem("code4");
    localStorage.setItem("price4");
    localStorage.setItem("img4");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff4">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
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
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing4", shopItem);
}

test_test.js:2 
function place5(nm, price, img) {
    localStorage.setItem("code5");
    localStorage.setItem("price5");
    localStorage.setItem("img5");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff5">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
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
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing5", shopItem);
}

test_test.js:2 
function place6(nm, price, img) {
    localStorage.setItem("code6");
    localStorage.setItem("price6");
    localStorage.setItem("img6");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff6">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
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
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing6", shopItem);
}

test_test.js:2 
function place7(nm, price, img) {
    localStorage.setItem("code7");
    localStorage.setItem("price7");
    localStorage.setItem("img7");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff7">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
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
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing7", shopItem);
}

test_test.js:2 
function place8(nm, price, img) {
    localStorage.setItem("code8");
    localStorage.setItem("price8");
    localStorage.setItem("img8");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff8">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
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
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing8", shopItem);
}

test_test.js:2 
function place9(nm, price, img) {
    localStorage.setItem("code9");
    localStorage.setItem("price9");
    localStorage.setItem("img9");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff9">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct9PriseAndQuanity();"> + </button>
                                    <li class="count9" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct9PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct9();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing9", shopItem);
}

test_test.js:2 
function place10(nm, price, img) {
    localStorage.setItem("code10");
    localStorage.setItem("price10");
    localStorage.setItem("img10");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff10">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct10PriseAndQuanity();"> + </button>
                                    <li class="count10" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct10PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct10();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing10", shopItem);
}

test_test.js:2 
function place11(nm, price, img) {
    localStorage.setItem("code11");
    localStorage.setItem("price11");
    localStorage.setItem("img11");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff11">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct11PriseAndQuanity();"> + </button>
                                    <li class="count11" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct11PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct11();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing11", shopItem);
}

test_test.js:2 
function place12(nm, price, img) {
    localStorage.setItem("code12");
    localStorage.setItem("price12");
    localStorage.setItem("img12");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff12">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct12PriseAndQuanity();"> + </button>
                                    <li class="count12" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct12PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct12();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing12", shopItem);
}

test_test.js:2 
function place13(nm, price, img) {
    localStorage.setItem("code13");
    localStorage.setItem("price13");
    localStorage.setItem("img13");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff13">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct13PriseAndQuanity();"> + </button>
                                    <li class="count13" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct13PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct13();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing13", shopItem);
}

test_test.js:2 
function place14(nm, price, img) {
    localStorage.setItem("code14");
    localStorage.setItem("price14");
    localStorage.setItem("img14");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff14">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct14PriseAndQuanity();"> + </button>
                                    <li class="count14" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct14PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct14();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing14", shopItem);
}

test_test.js:2 
function place15(nm, price, img) {
    localStorage.setItem("code15");
    localStorage.setItem("price15");
    localStorage.setItem("img15");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff15">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct15PriseAndQuanity();"> + </button>
                                    <li class="count15" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct15PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct15();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing15", shopItem);
}

test_test.js:2 
function place16(nm, price, img) {
    localStorage.setItem("code16");
    localStorage.setItem("price16");
    localStorage.setItem("img16");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff16">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct16PriseAndQuanity();"> + </button>
                                    <li class="count16" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct16PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct16();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing16", shopItem);
}

test_test.js:2 
function place17(nm, price, img) {
    localStorage.setItem("code17");
    localStorage.setItem("price17");
    localStorage.setItem("img17");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff17">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct17PriseAndQuanity();"> + </button>
                                    <li class="count17" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct17PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct17();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing17", shopItem);
}

test_test.js:2 
function place18(nm, price, img) {
    localStorage.setItem("code18");
    localStorage.setItem("price18");
    localStorage.setItem("img18");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff18">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct18PriseAndQuanity();"> + </button>
                                    <li class="count18" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct18PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct18();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing18", shopItem);
}

test_test.js:2 
function place19(nm, price, img) {
    localStorage.setItem("code19");
    localStorage.setItem("price19");
    localStorage.setItem("img19");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff19">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct19PriseAndQuanity();"> + </button>
                                    <li class="count19" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct19PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct19();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing19", shopItem);
}

test_test.js:2 
function place20(nm, price, img) {
    localStorage.setItem("code20");
    localStorage.setItem("price20");
    localStorage.setItem("img20");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff20">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct20PriseAndQuanity();"> + </button>
                                    <li class="count20" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct20PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct20();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing20", shopItem);
}

test_test.js:2 
function place21(nm, price, img) {
    localStorage.setItem("code21");
    localStorage.setItem("price21");
    localStorage.setItem("img21");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff21">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct21PriseAndQuanity();"> + </button>
                                    <li class="count21" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct21PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct21();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing21", shopItem);
}

test_test.js:2 
function place22(nm, price, img) {
    localStorage.setItem("code22");
    localStorage.setItem("price22");
    localStorage.setItem("img22");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff22">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct22PriseAndQuanity();"> + </button>
                                    <li class="count22" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct22PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct22();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing22", shopItem);
}

test_test.js:2 
function place23(nm, price, img) {
    localStorage.setItem("code23");
    localStorage.setItem("price23");
    localStorage.setItem("img23");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff23">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct23PriseAndQuanity();"> + </button>
                                    <li class="count23" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct23PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct23();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing23", shopItem);
}

test_test.js:2 
function place24(nm, price, img) {
    localStorage.setItem("code24");
    localStorage.setItem("price24");
    localStorage.setItem("img24");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff24">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct24PriseAndQuanity();"> + </button>
                                    <li class="count24" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct24PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct24();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing24", shopItem);
}

test_test.js:2 
function place25(nm, price, img) {
    localStorage.setItem("code25");
    localStorage.setItem("price25");
    localStorage.setItem("img25");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff25">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct25PriseAndQuanity();"> + </button>
                                    <li class="count25" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct25PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct25();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing25", shopItem);
}

test_test.js:2 
function place26(nm, price, img) {
    localStorage.setItem("code26");
    localStorage.setItem("price26");
    localStorage.setItem("img26");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff26">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct26PriseAndQuanity();"> + </button>
                                    <li class="count26" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct26PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct26();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing26", shopItem);
}

test_test.js:2 
function place27(nm, price, img) {
    localStorage.setItem("code27");
    localStorage.setItem("price27");
    localStorage.setItem("img27");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff27">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct27PriseAndQuanity();"> + </button>
                                    <li class="count27" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct27PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct27();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing27", shopItem);
}

test_test.js:2 
function place28(nm, price, img) {
    localStorage.setItem("code28");
    localStorage.setItem("price28");
    localStorage.setItem("img28");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff28">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct28PriseAndQuanity();"> + </button>
                                    <li class="count28" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct28PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct28();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing28", shopItem);
}

test_test.js:2 
function place29(nm, price, img) {
    localStorage.setItem("code29");
    localStorage.setItem("price29");
    localStorage.setItem("img29");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff29">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct29PriseAndQuanity();"> + </button>
                                    <li class="count29" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct29PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct29();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing29", shopItem);
}

test_test.js:2 
function place30(nm, price, img) {
    localStorage.setItem("code30");
    localStorage.setItem("price30");
    localStorage.setItem("img30");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff30">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct30PriseAndQuanity();"> + </button>
                                    <li class="count30" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct30PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct30();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing30", shopItem);
}

test_test.js:2 
function place31(nm, price, img) {
    localStorage.setItem("code31");
    localStorage.setItem("price31");
    localStorage.setItem("img31");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff31">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct31PriseAndQuanity();"> + </button>
                                    <li class="count31" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct31PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct31();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing31", shopItem);
}

test_test.js:2 
function place32(nm, price, img) {
    localStorage.setItem("code32");
    localStorage.setItem("price32");
    localStorage.setItem("img32");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff32">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct32PriseAndQuanity();"> + </button>
                                    <li class="count32" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct32PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct32();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing32", shopItem);
}

test_test.js:2 
function place33(nm, price, img) {
    localStorage.setItem("code33");
    localStorage.setItem("price33");
    localStorage.setItem("img33");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff33">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct33PriseAndQuanity();"> + </button>
                                    <li class="count33" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct33PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct33();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing33", shopItem);
}

test_test.js:2 
function place34(nm, price, img) {
    localStorage.setItem("code34");
    localStorage.setItem("price34");
    localStorage.setItem("img34");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff34">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct34PriseAndQuanity();"> + </button>
                                    <li class="count34" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct34PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct34();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing34", shopItem);
}

test_test.js:2 
function place35(nm, price, img) {
    localStorage.setItem("code35");
    localStorage.setItem("price35");
    localStorage.setItem("img35");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff35">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct35PriseAndQuanity();"> + </button>
                                    <li class="count35" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct35PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct35();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing35", shopItem);
}

test_test.js:2 
function place36(nm, price, img) {
    localStorage.setItem("code36");
    localStorage.setItem("price36");
    localStorage.setItem("img36");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff36">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct36PriseAndQuanity();"> + </button>
                                    <li class="count36" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct36PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct36();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing36", shopItem);
}

test_test.js:2 
function place37(nm, price, img) {
    localStorage.setItem("code37");
    localStorage.setItem("price37");
    localStorage.setItem("img37");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff37">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct37PriseAndQuanity();"> + </button>
                                    <li class="count37" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct37PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct37();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing37", shopItem);
}

test_test.js:2 
function place38(nm, price, img) {
    localStorage.setItem("code38");
    localStorage.setItem("price38");
    localStorage.setItem("img38");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff38">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct38PriseAndQuanity();"> + </button>
                                    <li class="count38" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct38PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct38();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing38", shopItem);
}

test_test.js:2 
function place39(nm, price, img) {
    localStorage.setItem("code39");
    localStorage.setItem("price39");
    localStorage.setItem("img39");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff39">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct39PriseAndQuanity();"> + </button>
                                    <li class="count39" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct39PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct39();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing39", shopItem);
}

test_test.js:2 
function place40(nm, price, img) {
    localStorage.setItem("code40");
    localStorage.setItem("price40");
    localStorage.setItem("img40");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff40">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct40PriseAndQuanity();"> + </button>
                                    <li class="count40" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct40PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct40();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing40", shopItem);
}

test_test.js:2 
function place41(nm, price, img) {
    localStorage.setItem("code41");
    localStorage.setItem("price41");
    localStorage.setItem("img41");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff41">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct41PriseAndQuanity();"> + </button>
                                    <li class="count41" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct41PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct41();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing41", shopItem);
}

test_test.js:2 
function place42(nm, price, img) {
    localStorage.setItem("code42");
    localStorage.setItem("price42");
    localStorage.setItem("img42");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff42">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct42PriseAndQuanity();"> + </button>
                                    <li class="count42" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct42PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct42();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing42", shopItem);
}

test_test.js:2 
function place43(nm, price, img) {
    localStorage.setItem("code43");
    localStorage.setItem("price43");
    localStorage.setItem("img43");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff43">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct43PriseAndQuanity();"> + </button>
                                    <li class="count43" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct43PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct43();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing43", shopItem);
}

test_test.js:2 
function place44(nm, price, img) {
    localStorage.setItem("code44");
    localStorage.setItem("price44");
    localStorage.setItem("img44");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff44">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct44PriseAndQuanity();"> + </button>
                                    <li class="count44" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct44PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct44();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing44", shopItem);
}

test_test.js:2 
function place45(nm, price, img) {
    localStorage.setItem("code45");
    localStorage.setItem("price45");
    localStorage.setItem("img45");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff45">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct45PriseAndQuanity();"> + </button>
                                    <li class="count45" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct45PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct45();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing45", shopItem);
}

test_test.js:2 
function place46(nm, price, img) {
    localStorage.setItem("code46");
    localStorage.setItem("price46");
    localStorage.setItem("img46");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff46">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct46PriseAndQuanity();"> + </button>
                                    <li class="count46" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct46PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct46();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing46", shopItem);
}

test_test.js:2 
function place47(nm, price, img) {
    localStorage.setItem("code47");
    localStorage.setItem("price47");
    localStorage.setItem("img47");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff47">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct47PriseAndQuanity();"> + </button>
                                    <li class="count47" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct47PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct47();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing47", shopItem);
}

test_test.js:2 
function place48(nm, price, img) {
    localStorage.setItem("code48");
    localStorage.setItem("price48");
    localStorage.setItem("img48");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff48">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct48PriseAndQuanity();"> + </button>
                                    <li class="count48" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct48PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct48();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing48", shopItem);
}

test_test.js:2 
function place49(nm, price, img) {
    localStorage.setItem("code49");
    localStorage.setItem("price49");
    localStorage.setItem("img49");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff49">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct49PriseAndQuanity();"> + </button>
                                    <li class="count49" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct49PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct49();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing49", shopItem);
}

test_test.js:2 
function place50(nm, price, img) {
    localStorage.setItem("code50");
    localStorage.setItem("price50");
    localStorage.setItem("img50");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff50">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct50PriseAndQuanity();"> + </button>
                                    <li class="count50" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct50PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct50();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing50", shopItem);
}

test_test.js:2 
function place51(nm, price, img) {
    localStorage.setItem("code51");
    localStorage.setItem("price51");
    localStorage.setItem("img51");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff51">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct51PriseAndQuanity();"> + </button>
                                    <li class="count51" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct51PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct51();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing51", shopItem);
}

test_test.js:2 
function place52(nm, price, img) {
    localStorage.setItem("code52");
    localStorage.setItem("price52");
    localStorage.setItem("img52");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff52">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct52PriseAndQuanity();"> + </button>
                                    <li class="count52" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct52PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct52();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing52", shopItem);
}

test_test.js:2 
function place53(nm, price, img) {
    localStorage.setItem("code53");
    localStorage.setItem("price53");
    localStorage.setItem("img53");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff53">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct53PriseAndQuanity();"> + </button>
                                    <li class="count53" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct53PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct53();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing53", shopItem);
}

test_test.js:2 
function place54(nm, price, img) {
    localStorage.setItem("code54");
    localStorage.setItem("price54");
    localStorage.setItem("img54");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff54">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct54PriseAndQuanity();"> + </button>
                                    <li class="count54" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct54PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct54();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing54", shopItem);
}

test_test.js:2 
function place55(nm, price, img) {
    localStorage.setItem("code55");
    localStorage.setItem("price55");
    localStorage.setItem("img55");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff55">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct55PriseAndQuanity();"> + </button>
                                    <li class="count55" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct55PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct55();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing55", shopItem);
}

test_test.js:2 
function place56(nm, price, img) {
    localStorage.setItem("code56");
    localStorage.setItem("price56");
    localStorage.setItem("img56");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff56">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct56PriseAndQuanity();"> + </button>
                                    <li class="count56" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct56PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct56();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing56", shopItem);
}

test_test.js:2 
function place57(nm, price, img) {
    localStorage.setItem("code57");
    localStorage.setItem("price57");
    localStorage.setItem("img57");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff57">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct57PriseAndQuanity();"> + </button>
                                    <li class="count57" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct57PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct57();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing57", shopItem);
}

test_test.js:2 
function place58(nm, price, img) {
    localStorage.setItem("code58");
    localStorage.setItem("price58");
    localStorage.setItem("img58");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff58">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct58PriseAndQuanity();"> + </button>
                                    <li class="count58" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct58PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct58();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing58", shopItem);
}

test_test.js:2 
function place59(nm, price, img) {
    localStorage.setItem("code59");
    localStorage.setItem("price59");
    localStorage.setItem("img59");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff59">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct59PriseAndQuanity();"> + </button>
                                    <li class="count59" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct59PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct59();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing59", shopItem);
}

test_test.js:2 
function place60(nm, price, img) {
    localStorage.setItem("code60");
    localStorage.setItem("price60");
    localStorage.setItem("img60");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff60">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct60PriseAndQuanity();"> + </button>
                                    <li class="count60" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct60PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct60();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing60", shopItem);
}

test_test.js:2 
function place61(nm, price, img) {
    localStorage.setItem("code61");
    localStorage.setItem("price61");
    localStorage.setItem("img61");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff61">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct61PriseAndQuanity();"> + </button>
                                    <li class="count61" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct61PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct61();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing61", shopItem);
}

test_test.js:2 
function place62(nm, price, img) {
    localStorage.setItem("code62");
    localStorage.setItem("price62");
    localStorage.setItem("img62");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff62">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct62PriseAndQuanity();"> + </button>
                                    <li class="count62" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct62PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct62();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing62", shopItem);
}

test_test.js:2 
function place63(nm, price, img) {
    localStorage.setItem("code63");
    localStorage.setItem("price63");
    localStorage.setItem("img63");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff63">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct63PriseAndQuanity();"> + </button>
                                    <li class="count63" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct63PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct63();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing63", shopItem);
}

test_test.js:2 
function place64(nm, price, img) {
    localStorage.setItem("code64");
    localStorage.setItem("price64");
    localStorage.setItem("img64");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff64">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct64PriseAndQuanity();"> + </button>
                                    <li class="count64" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct64PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct64();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing64", shopItem);
}

test_test.js:2 
function place65(nm, price, img) {
    localStorage.setItem("code65");
    localStorage.setItem("price65");
    localStorage.setItem("img65");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff65">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct65PriseAndQuanity();"> + </button>
                                    <li class="count65" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct65PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct65();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing65", shopItem);
}

test_test.js:2 
function place66(nm, price, img) {
    localStorage.setItem("code66");
    localStorage.setItem("price66");
    localStorage.setItem("img66");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff66">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct66PriseAndQuanity();"> + </button>
                                    <li class="count66" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct66PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct66();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing66", shopItem);
}

test_test.js:2 
function place67(nm, price, img) {
    localStorage.setItem("code67");
    localStorage.setItem("price67");
    localStorage.setItem("img67");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff67">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct67PriseAndQuanity();"> + </button>
                                    <li class="count67" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct67PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct67();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing67", shopItem);
}

test_test.js:2 
function place68(nm, price, img) {
    localStorage.setItem("code68");
    localStorage.setItem("price68");
    localStorage.setItem("img68");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff68">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct68PriseAndQuanity();"> + </button>
                                    <li class="count68" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct68PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct68();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing68", shopItem);
}

test_test.js:2 
function place69(nm, price, img) {
    localStorage.setItem("code69");
    localStorage.setItem("price69");
    localStorage.setItem("img69");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff69">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct69PriseAndQuanity();"> + </button>
                                    <li class="count69" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct69PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct69();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing69", shopItem);
}

test_test.js:2 
function place70(nm, price, img) {
    localStorage.setItem("code70");
    localStorage.setItem("price70");
    localStorage.setItem("img70");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff70">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct70PriseAndQuanity();"> + </button>
                                    <li class="count70" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct70PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct70();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing70", shopItem);
}

test_test.js:2 
function place71(nm, price, img) {
    localStorage.setItem("code71");
    localStorage.setItem("price71");
    localStorage.setItem("img71");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff71">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct71PriseAndQuanity();"> + </button>
                                    <li class="count71" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct71PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct71();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing71", shopItem);
}

test_test.js:2 
function place72(nm, price, img) {
    localStorage.setItem("code72");
    localStorage.setItem("price72");
    localStorage.setItem("img72");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff72">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct72PriseAndQuanity();"> + </button>
                                    <li class="count72" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct72PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct72();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing72", shopItem);
}

test_test.js:2 
function place73(nm, price, img) {
    localStorage.setItem("code73");
    localStorage.setItem("price73");
    localStorage.setItem("img73");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff73">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct73PriseAndQuanity();"> + </button>
                                    <li class="count73" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct73PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct73();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing73", shopItem);
}

test_test.js:2 
function place74(nm, price, img) {
    localStorage.setItem("code74");
    localStorage.setItem("price74");
    localStorage.setItem("img74");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff74">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct74PriseAndQuanity();"> + </button>
                                    <li class="count74" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct74PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct74();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing74", shopItem);
}

test_test.js:2 
function place75(nm, price, img) {
    localStorage.setItem("code75");
    localStorage.setItem("price75");
    localStorage.setItem("img75");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff75">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct75PriseAndQuanity();"> + </button>
                                    <li class="count75" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct75PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct75();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing75", shopItem);
}

test_test.js:2 
function place76(nm, price, img) {
    localStorage.setItem("code76");
    localStorage.setItem("price76");
    localStorage.setItem("img76");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff76">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct76PriseAndQuanity();"> + </button>
                                    <li class="count76" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct76PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct76();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing76", shopItem);
}

test_test.js:2 
function place77(nm, price, img) {
    localStorage.setItem("code77");
    localStorage.setItem("price77");
    localStorage.setItem("img77");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff77">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct77PriseAndQuanity();"> + </button>
                                    <li class="count77" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct77PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct77();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing77", shopItem);
}

test_test.js:2 
function place78(nm, price, img) {
    localStorage.setItem("code78");
    localStorage.setItem("price78");
    localStorage.setItem("img78");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff78">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct78PriseAndQuanity();"> + </button>
                                    <li class="count78" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct78PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct78();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing78", shopItem);
}

test_test.js:2 
function place79(nm, price, img) {
    localStorage.setItem("code79");
    localStorage.setItem("price79");
    localStorage.setItem("img79");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff79">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct79PriseAndQuanity();"> + </button>
                                    <li class="count79" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct79PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct79();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing79", shopItem);
}

test_test.js:2 
function place80(nm, price, img) {
    localStorage.setItem("code80");
    localStorage.setItem("price80");
    localStorage.setItem("img80");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff80">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct80PriseAndQuanity();"> + </button>
                                    <li class="count80" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct80PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct80();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing80", shopItem);
}

test_test.js:2 
function place81(nm, price, img) {
    localStorage.setItem("code81");
    localStorage.setItem("price81");
    localStorage.setItem("img81");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff81">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct81PriseAndQuanity();"> + </button>
                                    <li class="count81" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct81PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct81();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing81", shopItem);
}

test_test.js:2 
function place82(nm, price, img) {
    localStorage.setItem("code82");
    localStorage.setItem("price82");
    localStorage.setItem("img82");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff82">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct82PriseAndQuanity();"> + </button>
                                    <li class="count82" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct82PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct82();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing82", shopItem);
}

test_test.js:2 
function place83(nm, price, img) {
    localStorage.setItem("code83");
    localStorage.setItem("price83");
    localStorage.setItem("img83");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff83">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct83PriseAndQuanity();"> + </button>
                                    <li class="count83" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct83PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct83();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing83", shopItem);
}

test_test.js:2 
function place84(nm, price, img) {
    localStorage.setItem("code84");
    localStorage.setItem("price84");
    localStorage.setItem("img84");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff84">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct84PriseAndQuanity();"> + </button>
                                    <li class="count84" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct84PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct84();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing84", shopItem);
}

test_test.js:2 
function place85(nm, price, img) {
    localStorage.setItem("code85");
    localStorage.setItem("price85");
    localStorage.setItem("img85");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff85">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct85PriseAndQuanity();"> + </button>
                                    <li class="count85" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct85PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct85();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing85", shopItem);
}

test_test.js:2 
function place86(nm, price, img) {
    localStorage.setItem("code86");
    localStorage.setItem("price86");
    localStorage.setItem("img86");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff86">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct86PriseAndQuanity();"> + </button>
                                    <li class="count86" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct86PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct86();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing86", shopItem);
}

test_test.js:2 
function place87(nm, price, img) {
    localStorage.setItem("code87");
    localStorage.setItem("price87");
    localStorage.setItem("img87");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff87">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct87PriseAndQuanity();"> + </button>
                                    <li class="count87" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct87PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct87();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing87", shopItem);
}

test_test.js:2 
function place88(nm, price, img) {
    localStorage.setItem("code88");
    localStorage.setItem("price88");
    localStorage.setItem("img88");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff88">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct88PriseAndQuanity();"> + </button>
                                    <li class="count88" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct88PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct88();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing88", shopItem);
}

test_test.js:2 
function place89(nm, price, img) {
    localStorage.setItem("code89");
    localStorage.setItem("price89");
    localStorage.setItem("img89");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff89">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct89PriseAndQuanity();"> + </button>
                                    <li class="count89" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct89PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct89();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing89", shopItem);
}

test_test.js:2 
function place90(nm, price, img) {
    localStorage.setItem("code90");
    localStorage.setItem("price90");
    localStorage.setItem("img90");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff90">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct90PriseAndQuanity();"> + </button>
                                    <li class="count90" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct90PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct90();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing90", shopItem);
}

test_test.js:2 
function place91(nm, price, img) {
    localStorage.setItem("code91");
    localStorage.setItem("price91");
    localStorage.setItem("img91");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff91">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct91PriseAndQuanity();"> + </button>
                                    <li class="count91" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct91PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct91();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing91", shopItem);
}

test_test.js:2 
function place92(nm, price, img) {
    localStorage.setItem("code92");
    localStorage.setItem("price92");
    localStorage.setItem("img92");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff92">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct92PriseAndQuanity();"> + </button>
                                    <li class="count92" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct92PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct92();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing92", shopItem);
}

test_test.js:2 
function place93(nm, price, img) {
    localStorage.setItem("code93");
    localStorage.setItem("price93");
    localStorage.setItem("img93");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff93">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct93PriseAndQuanity();"> + </button>
                                    <li class="count93" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct93PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct93();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing93", shopItem);
}

test_test.js:2 
function place94(nm, price, img) {
    localStorage.setItem("code94");
    localStorage.setItem("price94");
    localStorage.setItem("img94");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff94">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct94PriseAndQuanity();"> + </button>
                                    <li class="count94" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct94PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct94();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing94", shopItem);
}

test_test.js:2 
function place95(nm, price, img) {
    localStorage.setItem("code95");
    localStorage.setItem("price95");
    localStorage.setItem("img95");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff95">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct95PriseAndQuanity();"> + </button>
                                    <li class="count95" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct95PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct95();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing95", shopItem);
}

test_test.js:2 
function place96(nm, price, img) {
    localStorage.setItem("code96");
    localStorage.setItem("price96");
    localStorage.setItem("img96");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff96">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct96PriseAndQuanity();"> + </button>
                                    <li class="count96" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct96PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct96();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing96", shopItem);
}

test_test.js:2 
function place97(nm, price, img) {
    localStorage.setItem("code97");
    localStorage.setItem("price97");
    localStorage.setItem("img97");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff97">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct97PriseAndQuanity();"> + </button>
                                    <li class="count97" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct97PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct97();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing97", shopItem);
}

test_test.js:2 
function place98(nm, price, img) {
    localStorage.setItem("code98");
    localStorage.setItem("price98");
    localStorage.setItem("img98");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff98">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct98PriseAndQuanity();"> + </button>
                                    <li class="count98" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct98PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct98();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing98", shopItem);
}

test_test.js:2 
function place99(nm, price, img) {
    localStorage.setItem("code99");
    localStorage.setItem("price99");
    localStorage.setItem("img99");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff99">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct99PriseAndQuanity();"> + </button>
                                    <li class="count99" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct99PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct99();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing99", shopItem);
}

test_test.js:2 
function place100(nm, price, img) {
    localStorage.setItem("code100");
    localStorage.setItem("price100");
    localStorage.setItem("img100");

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff100">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct100PriseAndQuanity();"> + </button>
                                    <li class="count100" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct100PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct100();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing100", shopItem);
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




