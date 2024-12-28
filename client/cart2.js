function addproduct1PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price1"));
    let name = localStorage.getItem("code1");

    total += prise;
    count1 += 1;

    if (count1 < 0) {
      count1 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count1", count1);
    const finalCount1 = Number(localStorage.getItem("count1"));
    document.querySelector(".count1").innerHTML = count1;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name1 = name;
    email.price1 = prise;
    email.quanity1 = count1;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;

    localStorage.setItem("fcost", fcost);
    const finalCost = Number(localStorage.getItem("fcost"));
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;
    document.querySelector(
      ".checkt"
    ).innerHTML = `<p> Your Total $${fcost} </p>`;
  }

  function decproduct1PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price1"));
    let name = localStorage.getItem("code1");
    total -= prise;

    count1 -= 1;

    if (count1 < 0) {
      count1 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count1", count1);
    const finalCount1 = Number(localStorage.getItem("count1"));
    document.querySelector(".count1").innerHTML = count1;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name1 = name;
    email.price1 = prise;
    email.quanity1 = count1;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;
    document.querySelector(
      ".checkt"
    ).innerHTML = `<p> Your Total $${fcost} </p>`;

    localStorage.setItem("fcost", fcost);
  }

  function addproduct2PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price2"));
    let name = localStorage.getItem("code2");

    total += prise;
    count2 += 1;

    if (count2 < 0) {
      count2 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count2", count2);
    const finalCount2 = Number(localStorage.getItem("count2"));
    document.querySelector(".count2").innerHTML = finalCount2;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name2 = name;
    email.price2 = prise;
    email.quanity2 = count2;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;
    document.querySelector(
      ".checkt"
    ).innerHTML = `<p> Your Total $${fcost} </p>`;

    localStorage.setItem("fcost", fcost);
  }

  function decproduct2PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price2"));
    let name = localStorage.getItem("code2");

    total -= prise;
    count2 -= 1;

    if (count2 < 0) {
      count2 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count2", count2);
    const finalCount1 = Number(localStorage.getItem("count2"));
    document.querySelector(".count2").innerHTML = count2;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name2 = name;
    email.price2 = prise;
    email.quanity2 = count2;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;

    localStorage.setItem("fcost", fcost);
  }

  function addproduct3PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price3"));
    let name = localStorage.getItem("code3");

    total += prise;
    count3 += 1;

    if (count3 < 0) {
      count3 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count3", count3);
    const finalCount3 = Number(localStorage.getItem("count3"));
    document.querySelector(".count3").innerHTML = finalCount3;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name3 = name;
    email.price3 = prise;
    email.quanity3 = count3;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;

    localStorage.setItem("fcost", fcost);
  }

  function decproduct3PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price3"));
    let name = localStorage.getItem("code3");

    total -= prise;
    count3 -= 1;

    if (count3 < 0) {
      count3 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count3", count3);
    const finalCount3 = Number(localStorage.getItem("count3"));
    document.querySelector(".count3").innerHTML = count3;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name3 = name;
    email.price3 = prise;
    email.quanity3 = count3;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;

    localStorage.setItem("fcost", fcost);
  }

  function addproduct4PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price4"));
    let name = localStorage.getItem("code4");

    total += prise;
    count4 += 1;

    if (count4 < 0) {
      count4 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count4", count4);
    const finalCount4 = Number(localStorage.getItem("count4"));
    document.querySelector(".count4").innerHTML = count4;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name4 = name;
    email.price4 = prise;
    email.quanity4 = count4;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;

    localStorage.setItem("fcost", fcost);
  }

  function decproduct4PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price4"));
    let name = localStorage.getItem("code4");

    total -= prise;
    count4 -= 1;

    if (count4 < 0) {
      count4 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count4", count4);
    const finalCount1 = Number(localStorage.getItem("count4"));
    document.querySelector(".count4").innerHTML = count4;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name4 = name;
    email.price4 = prise;
    email.quanity4 = count4;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;

    localStorage.setItem("fcost", fcost);
  }

  function addproduct5PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price5"));
    let name = localStorage.getItem("code5");

    total += prise;
    count5 += 1;

    if (count5 < 0) {
      count5 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count5", count5);
    const finalCount5 = Number(localStorage.getItem("count5"));
    document.querySelector(".count5").innerHTML = count5;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name5 = name;
    email.price5 = prise;
    email.quanity5 = count5;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;

    localStorage.setItem("fcost", fcost);
  }

  function decproduct5PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price5"));
    let name = localStorage.getItem("code5");

    total -= prise;
    count5 -= 1;

    if (count5 < 0) {
      count5 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count5", count5);
    const finalCount5 = Number(localStorage.getItem("count5"));
    document.querySelector(".count5").innerHTML = count5;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name5 = name;
    email.price5 = prise;
    email.quanity5 = count5;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;

    localStorage.setItem("fcost", fcost);
  }

  function addproduct6PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price6"));
    let name = localStorage.getItem("code6");

    total += prise;
    count6 += 1;

    if (count6 < 0) {
      count6 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count6", count6);
    const finalCount6 = Number(localStorage.getItem("count6"));
    document.querySelector(".count6").innerHTML = count6;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name6 = name;
    email.price6 = prise;
    email.quanity6 = count6;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;

    localStorage.setItem("fcost", fcost);
  }

  function decproduct6PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price6"));
    let name = localStorage.getItem("code6");

    total -= prise;
    count6 -= 1;

    if (count6 < 0) {
      count6 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count6", count6);
    const finalCount6 = Number(localStorage.getItem("count6"));
    document.querySelector(".count6").innerHTML = count6;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name6 = name;
    email.price6 = prise;
    email.quanity6 = count6;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;

    localStorage.setItem("fcost", fcost);
  }

  function addproduct7PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price7"));
    let name = localStorage.getItem("code7");

    total += prise;
    count7 += 1;

    if (count7 < 0) {
      count7 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count7", count7);
    const finalCount7 = Number(localStorage.getItem("count7"));
    document.querySelector(".count7").innerHTML = count7;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name7 = name;
    email.price7 = prise;
    email.quanity7 = count7;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;

    localStorage.setItem("fcost", fcost);
  }

  function decproduct7PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price7"));
    let name = localStorage.getItem("code7");

    total -= prise;
    count7 -= 1;

    if (count7 < 0) {
      count7 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count7", count7);
    const finalCount7 = Number(localStorage.getItem("count7"));
    document.querySelector(".count7").innerHTML = count7;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name7 = name;
    email.price7 = prise;
    email.quanity7 = count7;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;

    localStorage.setItem("fcost", fcost);
  }

  function addproduct8PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price8"));
    let name = localStorage.getItem("code8");

    total += prise;
    count8 += 1;

    if (count8 < 0) {
      count8 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count8", count8);
    const finalCount8 = Number(localStorage.getItem("count8"));
    document.querySelector(".count8").innerHTML = count8;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name8 = name;
    email.price8 = prise;
    email.quanity8 = count8;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;

    localStorage.setItem("fcost", fcost);
  }

  function decproduct8PriseAndQuanity() {
    let prise = Number(localStorage.getItem("price8"));
    let name = localStorage.getItem("code8");

    total -= prise;
    count8 -= 1;

    if (count8 < 0) {
      count8 = 0;
    }

    if (total < 0) {
      total = 0;
    }

    const taxes = 5;
    const shipping = 20;
    const fcost = total + taxes + shipping;

    localStorage.setItem("count8", count8);
    const finalCount8 = Number(localStorage.getItem("count8"));
    document.querySelector(".count8").innerHTML = count8;

    localStorage.setItem("total", total);
    const finalTotal = Number(localStorage.getItem("total"));
    

    email.name8 = name;
    email.price8 = prise;
    email.quanity8 = count8;
    localStorage.setItem("final", JSON.stringify(email));

    document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
    document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
    document.getElementById(
      "shipping"
    ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
    document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;

    localStorage.setItem("fcost", fcost);
  }
