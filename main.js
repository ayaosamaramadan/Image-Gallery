const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes pulse {
  0% {
    opacity: 0.7;
    transform: scale(0.6);
    background-color: #685e5e;
  }
  50% {
    opacity: 1;
    transform: scale(0.7);
    background-color: #685e5e;
  }
  100% {
    opacity: 0.7;
    transform: scale(0.6);
    background-color: #685e5e;
  }
}

`;
document.head.appendChild(styleSheet);

// Data for the images and titles

let data = {
  img1: "./imgs/img1.png",
  img2: "./imgs/img2.png",
  img3: "./imgs/img3.png",
  img4: "./imgs/img4.png",
};

let title = {
  title1: "untold",
  title2: "story of",
  title3: "KLCC",
  title4: "Malaysia",
};

//  body
body = document.querySelector("body");
body.style.cssText =
  "background-image:url(./imgs/bg.png);background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position:center;overflow:hidden;height:100vh;";

let contener = document.createElement("div");
contener.setAttribute("id", "d");
contener.style.cssText = "display: flex;";
body.appendChild(contener);
let div11 = document.createElement("div");
let div1 = document.createElement("div");
div1.setAttribute("id", "div1");
div1.style.cssText = "color:white;letter-spacing:2px;";
for (let i = 1; i <= 4; i++) {
  let p = document.createElement("p");
  p.setAttribute("id", `p${i}`);
  p.textContent = title[`title${i}`];
  div1.appendChild(p);
}
div11.appendChild(div1);

// contener.appendChild(div11);
let div12 = document.createElement("div");
div12.setAttribute("id", "div2");
div12.style.cssText = "color: white;font-size:100%;letter-spacing:1px;";

let div22 = document.createElement("div");
div22.setAttribute("id", "div22");
div22.style.cssText = "margin-bottom:8%;";

let divpp = document.createElement("p");
divpp.setAttribute("id", "pp");
divpp.textContent =
  "We so opinion friends me message as delight. Whole front do ofplate heard oh ought. His defective nor convinced residence own.";
div22.appendChild(divpp);
div12.appendChild(div22);

let div3 = document.createElement("div");
div3.setAttribute("id", "div3");
div3.style.cssText =
  "background-color:#c1c29f;color:rgb(0,0,0);font-size:100%;letter-spacing:1px;display:flex;border-radius:10px;opacity:0.7;";
let divp = document.createElement("p");
divp.setAttribute("id", "p");
divp.textContent = "Read more";
div3.appendChild(divp);
let imgReadmore = document.createElement("img");
imgReadmore.setAttribute("src", "./imgs/Vector 1.png");
imgReadmore.style.cssText =
  "width:10%;height:10%;margin-top:5%;margin-left:5%;";
div3.appendChild(imgReadmore);
div12.appendChild(div3);
div11.appendChild(div12);
contener.appendChild(div11);
let theDiv4 = document.createElement("div");
theDiv4.setAttribute("id", "div4");
theDiv4.style.cssText = "display:flex;";

contener.appendChild(theDiv4);

//ul def
let theUlid = document.createElement("div");
theUlid.setAttribute("id", "ull");
body.appendChild(theUlid);
// full ul with li
let theUlCreated = document.createElement("ul");
theUlid.appendChild(theUlCreated);
for (let i = 1; i <= 4; i++) {
  let theLiCreated = document.createElement("li");
  theLiCreated.value = i;
  theLiCreated.setAttribute("id", `li${i}`);
  theLiCreated.style.cssText =
    " background-color:#d9d9d9;color:#d9d9d9;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";

  theLiCreated.textContent = i;
  theUlCreated.appendChild(theLiCreated);
}

let theLiElements = document.querySelectorAll("#ull li");

function setActiveLibyimg() {

  if (imgSrc === data["img1"]) {
    theLiElements[0].style.cssText =
    " background-color:#746d6d;color:#746d6d;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    theLiElements[1].style.cssText =
    " background-color:#d9d9d9;color:#d9d9d9;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    theLiElements[2].style.cssText =
    " background-color:#d9d9d9;color:#d9d9d9;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    theLiElements[3].style.cssText =
    " background-color:#d9d9d9;color:#d9d9d9;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    

  } else if (imgSrc === data["img2"]) {
    theLiElements[1].style.cssText =
    " background-color:#746d6d;color:#746d6d;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    theLiElements[0].style.cssText =
    "background-color:#d9d9d9;color:#d9d9d9;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    theLiElements[2].style.cssText =
    "background-color:#d9d9d9;color:#d9d9d9;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    theLiElements[3].style.cssText =
    "background-color:#d9d9d9;color:#d9d9d9;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    

  } else if (imgSrc === data["img3"]) {
    theLiElements[2].style.cssText =
    " background-color:#746d6d;color:#746d6d;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    theLiElements[0].style.cssText =
    "background-color:#d9d9d9;color:#d9d9d9;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    theLiElements[1].style.cssText =
    "background-color:#d9d9d9;color:#d9d9d9;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    theLiElements[3].style.cssText =
    "background-color:#d9d9d9;color:#d9d9d9;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    

  } else if (imgSrc === data["img4"]) {
    theLiElements[3].style.cssText =
    " background-color:#746d6d;color:#746d6d;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    theLiElements[0].style.cssText =
    "background-color:#d9d9d9;color:#d9d9d9;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    theLiElements[1].style.cssText =
    "background-color:#d9d9d9;color:#d9d9d9;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    theLiElements[2].style.cssText =
    "background-color:#d9d9d9;color:#d9d9d9;margin-right:10px;list-style-type:circle;border-radius:100px;list-style:none;cursor:pointer;";
    

  }
  console.log(imgSrc);
}



// prev btn
let prev = document.createElement("span");
prev.innerHTML = "&#8249;";
prev.style.cssText =
  "color:#f7f7f7;font-weight:600;width:45px;cursor:pointer;font-size:40px;text-align:center;border-radius:100px;padding:0% 3% 3% 5%;";
theDiv4.appendChild(prev);

// img
let firstImg = document.createElement("img");
firstImg.setAttribute("src", data["img1"]);
let imgSrc = firstImg.getAttribute("src");
theDiv4.appendChild(firstImg);
console.log(imgSrc);

// next btn
let next = document.createElement("span");
next.innerHTML = "&#8250;";
next.style.cssText =
  "color:#f7f7f7;font-weight:600;width:45px;cursor:pointer;font-size:40px;text-align:center;border-radius:100px;padding:0% 3% 3% 5%;";
theDiv4.appendChild(next);

//prev&next click events
let theImg = document.querySelector("#div4 img");
theImg.style.cssText =
  "margin-right:5%;margin-left:5%;margin-top:0.5%;transition:opacity 0.5s ease-in-out;opacity: 1;";

let ulll = document.getElementById("ull");
function prevClick() {
  if (imgSrc === data["img1"]) {
    theImg.setAttribute("src", data["img4"]);
  } else if (imgSrc === data["img2"]) {
    theImg.setAttribute("src", data["img1"]);
  } else if (imgSrc === data["img3"]) {
    theImg.setAttribute("src", data["img2"]);
  } else if (imgSrc === data["img4"]) {
    theImg.setAttribute("src", data["img3"]);
  }
  imgSrc = theImg.getAttribute("src");
  setActiveLibyimg();
}

function nextClick() {
  if (imgSrc === data["img1"]) {
    theImg.setAttribute("src", data["img2"]);
  } else if (imgSrc === data["img2"]) {
    theImg.setAttribute("src", data["img3"]);
  } else if (imgSrc === data["img3"]) {
    theImg.setAttribute("src", data["img4"]);
  } else if (imgSrc === data["img4"]) {
    theImg.setAttribute("src", data["img1"]);
  }
  imgSrc = theImg.getAttribute("src");
  setActiveLibyimg();
}

prev.addEventListener("click", prevClick);
next.addEventListener("click", nextClick);

// auto slide
let intervalId = setInterval(() => {
  nextClick();
}, 3000);

// remove auto slide on hover
theImg.addEventListener("mouseover", () => {
  clearInterval(intervalId);
});

// add auto slide on mouseout
theImg.addEventListener("mouseout", () => {
  intervalId = setInterval(nextClick, 5000);
});

function liClick(e) {
  theImg.setAttribute("src", data[`img${e.target.value}`]);
  imgSrc = theImg.getAttribute("src");
  setActiveLibyimg();
}

theLiElements.forEach((li) => {
  li.addEventListener("click", liClick);
});
