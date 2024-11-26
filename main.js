let data = {
  img1: "./imgs/img1.png",
  img2: "./imgs/img2.png",
  img3: "./imgs/img3.png",
  img4: "./imgs/img4.png",
};

//ul def
let theUlid = document.getElementById("ull");

// full ul with li
let theUlCreated = document.createElement("ul");
theUlid.appendChild(theUlCreated);
for (let i = 1; i <= 4; i++) {
  let theLiCreated = document.createElement("li");
  theLiCreated.value = i;
  theLiCreated.setAttribute("class", `li${i}`);
  theLiCreated.textContent = i;
  theUlCreated.appendChild(theLiCreated);
}

//div id="div4" def
let theDiv4 = document.getElementById("div4");

// prev btn
let prev = document.createElement("span");
prev.innerHTML = "&#8249;";
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
theDiv4.appendChild(next);
console.log(theDiv4);

let theImg = document.querySelector("#div4 img");
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
}

prev.addEventListener("click", prevClick);
next.addEventListener("click", nextClick);
