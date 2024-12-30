

let total = 0;
      total = Number(localStorage.getItem("total"));
      
      let count1 = 0;
      count1 = Number(localStorage.getItem("count1"));

      let count2 = 0;
      count2 = Number(localStorage.getItem("count2"));

      let count3 = 0;
      count3 = Number(localStorage.getItem("count3"));

      let count4 = 0;
      count4 = Number(localStorage.getItem("count4"));

      let count5 = 0;
      count5 = Number(localStorage.getItem("count5"));

      let count6 = 0;
      count6 = Number(localStorage.getItem("count6"));

      let count7 = 0;
      count7 = Number(localStorage.getItem("count7"));

      let count8 = 0;
      count8 = Number(localStorage.getItem("count8"));

      const taxes = 0;
      const shipping = 20;
      const fcost = total + taxes + shipping;

  

      document.getElementById("total").innerHTML = `<p>Cost $${total}</p>`;
      document.getElementById("taxes").innerHTML = `<p>+ Taxes $${taxes}</p>`;
      document.getElementById(
        "shipping"
      ).innerHTML = `<p>+ Shipping $${shipping}</p>`;
      document.getElementById("final").innerHTML = `<p>Total $${fcost}</p>`;
      document.querySelector(
        ".checkt"
      ).innerHTML = `<p> Your Total $${fcost} </p> `;

      localStorage.setItem("fcost", fcost);

      let email = {};

      function removeProduct1() {
        let prise = Number(localStorage.getItem("price1"));
        total = total - count1 * prise;
        localStorage.setItem("total", total);
        email = JSON.parse(localStorage.getItem("final"));
        delete email.name1;
        delete email.price1;
        delete email.quanity1;

        localStorage.setItem("final", JSON.stringify(email));

        const taxes = 5;
        const shipping = 20;
        const fcost = total + taxes + shipping;

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
        ).innerHTML = `<p> Your Total $${fcost} </p> `;

        localStorage.removeItem("thing1");
        localStorage.removeItem("count1");
        document.querySelector(".stuff1").innerHTML = "";
        
      }

      function removeProduct2() {
        let prise = Number(localStorage.getItem("price2"));
        total = total - count2 * prise;
        localStorage.setItem("total", total);
        email = JSON.parse(localStorage.getItem("final"));
        delete email.name2;
        delete email.price2;
        delete email.quanity2;

        localStorage.setItem("final", JSON.stringify(email));

        const taxes = 5;
        const shipping = 20;
        const fcost = total + taxes + shipping;

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
        ).innerHTML = `<p> Your Total $${fcost} </p> `;

        localStorage.removeItem("thing2");
        localStorage.removeItem("count2");

        document.querySelector(".stuff2").innerHTML = "";
        
      }

      function removeProduct3() {
        let prise = Number(localStorage.getItem("price3"));
        total = total - count3 * prise;
        console.log(total);
        localStorage.setItem("total", total);
        email = JSON.parse(localStorage.getItem("final"));
        delete email.name3;
        delete email.price3;
        delete email.quanity3;

        localStorage.setItem("final", JSON.stringify(email));

        const taxes = 5;
        const shipping = 20;
        const fcost = total + taxes + shipping;

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
        ).innerHTML = `<p> Your Total $${fcost} </p> `;

        localStorage.removeItem("thing3");
        localStorage.removeItem("count3");
        document.querySelector(".stuff3").innerHTML = "";
        
      }

      function removeProduct4() {
        let prise = Number(localStorage.getItem("price4"));
        total = total - count4 * prise;
        localStorage.setItem("total", total);
        email = JSON.parse(localStorage.getItem("final"));
        delete email.name4;
        delete email.price4;
        delete email.quanity4;

        localStorage.setItem("final", JSON.stringify(email));

        const taxes = 5;
        const shipping = 20;
        const fcost = total + taxes + shipping;

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
        ).innerHTML = `<p> Your Total $${fcost} </p>  `;

        localStorage.removeItem("thing4");
        localStorage.removeItem("count4");
        document.querySelector(".stuff4").innerHTML = "";
        
      }

      function removeProduct5() {
        let prise = Number(localStorage.getItem("price5"));
        total = total - count5 * prise;
        localStorage.setItem("total", total);
        email = JSON.parse(localStorage.getItem("final"));
        delete email.name5;
        delete email.price5;
        delete email.quanity5;

        localStorage.setItem("final", JSON.stringify(email));

        const taxes = 5;
        const shipping = 20;
        const fcost = total + taxes + shipping;

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
        ).innerHTML = `<p> Your Total $${fcost} </p>  `;

        localStorage.removeItem("thing5");
        localStorage.removeItem("count5");
        document.querySelector(".stuff5").innerHTML = "";
        
      }

      function removeProduct6() {
        let prise = Number(localStorage.getItem("price6"));
        total = total - count6 * prise;
        localStorage.setItem("total", total);
        email = JSON.parse(localStorage.getItem("final"));
        delete email.name6;
        delete email.price6;
        delete email.quanity6;

        localStorage.setItem("final", JSON.stringify(email));

        const taxes = 5;
        const shipping = 20;
        const fcost = total + taxes + shipping;

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
        ).innerHTML = `<p> Your Total $${fcost} </p>  `;

        localStorage.removeItem("thing6");
        localStorage.removeItem("count6");
        document.querySelector(".stuff6").innerHTML = "";
        
      }

      function removeProduct7() {
        let prise = Number(localStorage.getItem("price7"));
        total = total - count7 * prise;
        localStorage.setItem("total", total);
        email = JSON.parse(localStorage.getItem("final"));
        delete email.name7;
        delete email.price7;
        delete email.quanity7;

        localStorage.setItem("final", JSON.stringify(email));

        const taxes = 5;
        const shipping = 20;
        const fcost = total + taxes + shipping;

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
        ).innerHTML = `<p> Your Total $${fcost} </p>  `;

        localStorage.removeItem("thing7");
        localStorage.removeItem("count7");
        document.querySelector(".stuff7").innerHTML = "";
        
      }

      function removeProduct8() {
        let prise = Number(localStorage.getItem("price8"));
        total = total - count8 * prise;
        localStorage.setItem("total", total);
        email = JSON.parse(localStorage.getItem("final"));
        delete email.name8;
        delete email.price8;
        delete email.quanity8;

        localStorage.setItem("final", JSON.stringify(email));

        const taxes = 5;
        const shipping = 20;
        const fcost = total + taxes + shipping;

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
        ).innerHTML = `<p> Your Total $${fcost} </p>  `;

        localStorage.removeItem("thing8");
        localStorage.removeItem("count8");
        document.querySelector(".stuff8").innerHTML = "";
       
      }

      
      const emailfinal = JSON.parse(localStorage.getItem("final"));
      
      console.log(usermail);
      
      const ffcost = localStorage.getItem("fcost");
      console.log(ffcost);

      console.log(emailfinal);

      function sendEmail() {

        const popEl = document.getElementById('exampleModal');
        popEl.innerHTML = '';
        
        const emailfinalmess = JSON.stringify(localStorage.getItem("final"));
        

        let params = {
          name: ffcost,
          email: document.getElementById('usermail').value,
          message: emailfinalmess
        };

        const serviceID = "service_vjaphak";
        const templateID = "template_hgk6wpp";

        emailjs.send(serviceID, templateID, params).then((res) => {

            

            try{
                alert(
                    "Your order is getting ready! You will recieve an email for following steps. Thanks"
                  );
            }
             catch (error) {
                if (error) {
                    alert('Error has occured. Maybe try later');
                }
            }

        
        });
      }

      const finalItem1 = String(localStorage.getItem("thing1"));
      const finalItem2 = String(localStorage.getItem("thing2"));
      const finalItem3 = String(localStorage.getItem("thing3"));
      const finalItem4 = String(localStorage.getItem("thing4"));
      const finalItem5 = String(localStorage.getItem("thing5"));
      const finalItem6 = String(localStorage.getItem("thing6"));
      const finalItem7 = String(localStorage.getItem("thing7"));
      const finalItem8 = String(localStorage.getItem("thing8"));
      const finalCount1 = Number(localStorage.getItem("count1"));
      const finalCount2 = Number(localStorage.getItem("count2"));
      const finalCount3 = Number(localStorage.getItem("count3"));
      const finalCount4 = Number(localStorage.getItem("count4"));
      const finalCount5 = Number(localStorage.getItem("count5"));
      const finalCount6 = Number(localStorage.getItem("count6"));
      const finalCount7 = Number(localStorage.getItem("count7"));
      const finalCount8 = Number(localStorage.getItem("count8"));
      const finalTotal = Number(localStorage.getItem("total"));
      const finalCost = Number(localStorage.getItem("fcost"));

      document.querySelector(".items").innerHTML += finalItem1;
      document.querySelector(".items").innerHTML += finalItem2;
      document.querySelector(".items").innerHTML += finalItem3;
      document.querySelector(".items").innerHTML += finalItem4;
      document.querySelector(".items").innerHTML += finalItem5;
      document.querySelector(".items").innerHTML += finalItem6;
      document.querySelector(".items").innerHTML += finalItem7;
      document.querySelector(".items").innerHTML += finalItem8;

      document.querySelector(".count").innerHTML = finalCount1;
      document.querySelector(".count2").innerHTML = finalCount2;
      document.querySelector(".count3").innerHTML = finalCount3;
      document.querySelector(".count4").innerHTML = finalCount4;
      document.querySelector(".count5").innerHTML = finalCount5;
      document.querySelector(".count6").innerHTML = finalCount6;
      document.querySelector(".count7").innerHTML = finalCount7;
      document.querySelector(".count8").innerHTML = finalCount8;

      
      document.getElementById("final").innerHTML += `<p>Total $${fcost}</p>`;
