let data = {
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
prev.innerHTML = '&#8249;';
theDiv4.appendChild(prev);

// img 
let theImg = document.createElement("img");
theImg.src = "./imgs/img1.png";
theDiv4.appendChild(theImg);

// next btn
let next = document.createElement("span");

next.innerHTML = '&#8250;';
theDiv4.appendChild(next);
console.log(theDiv4);


