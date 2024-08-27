// start text move
let counter = 1;
    let text = document.getElementById("text");
    let name = "Best Jewellery Collection";

    function showtext() {
      text.innerHTML=name.slice(0, counter);
      counter++;
      if (counter > name.length+1) {
        counter = 1; 
    }
    }

    setInterval(showtext, 300); 
    let counter2 = 1;
    let text2 = document.getElementById("text2");
    let name2 = "Latest Products";

    function showtext2() {
      text2.innerHTML=name2.slice(0, counter2);
      counter2++;
      if (counter2 > name2.length+1) {
        counter2 = 1; 
    }
    }

    setInterval(showtext2, 300); 

    let counter3 = 1;
    let text3 = document.getElementById("text3");
    let name3 = "Offers";

    function showtext3() {
      text3.innerHTML=name3.slice(0, counter3);
      counter3++;
      if (counter3 > name3.length+1) {
        counter3 = 1; 
    }
    }

    setInterval(showtext3, 400); 

    let counter4 = 1;
    let text4 = document.getElementById("text4");
    let name4 = "Latest From Blog";

    function showtext4() {
      text4.innerHTML=name4.slice(0, counter4);
      counter4++;
      if (counter4 > name4.length+1) {
        counter4 = 1; 
    }
    }

    setInterval(showtext4, 300); 
    // end text move

    // move to signup and login page
    function navigateTo(page) {
      window.location.href = page;
  }
    // end to signup and login page

    // change mode 

    let change = document.getElementById("change");
    let body = document.body;
    let aboutParagraph = document.querySelector("#About p");

    change.addEventListener("click", (e) => {
        body.classList.toggle("change");
        aboutParagraph.classList.toggle("change");
    });
