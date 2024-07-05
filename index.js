// ------------DETAILS -------------------------------------------------

const namee = "Instagram";
const company = "Instagram";
const extra = "Contains ads • In-app purchase";
const logo =
  "https://clipartcraft.com/images/instagram-logo-transparent-background-2.png";

const rating = "4.3 ★";
const review = "14Cr reviews ⓘ";

const size = "66 MB";
const rated = "12+";

const downloads = "500Cr+";

const images = ["11.jpg", "22.jpg", "33.jpg", "44.jpg", "55.jpg"];

const about = "Creates & share photos, stories, & reels with friends you love";

const tags = ["#1 top free in social", "Networking", "Social networking"];

const reviews = "review.jpg";
const similar_apps = "sapps.jpg";

// -----------TO DOWNLOAD THE FILE -------------------------------------

document.getElementById("downloadBtn").addEventListener("click", function () {
  const a = document.createElement("a");
  a.href = "44.jpg";
  a.download = "44.jpg"; 
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});


// --------- Javascript Logic-------------------------------------------


const app = document.querySelector(".app");
app.innerHTML = `<img class="logo" src="${logo}" alt="">
                <div class="text">
                    <p class="t1">${namee}</p>
                    <p class="t2">${company}</p>
                    <p class="t3">${extra}</p>
                </div>`;

const details = document.querySelector(".details");
details.innerHTML = `<div class="d1">
                    <p class="t4">${rating}</p>
                    <p class="t5">${review}</p>
                </div>
                <div class="d1">
                    <img width="17px" src="icons8-download-64(1).png" alt="">
                    <p class="t5">${size}</p>
                </div>
                <div class="d1">
                    <p class="rated" class="t4">${rated}</p>
                    <p class="t5">Rated for ${rated} ⓘ </p>
                </div>
                <div class="d1 d2">
                    <p class="t4">${downloads}</p>
                    <p class="t5">Downloads</p>
                </div>`;

let img = "";
for(let i=0;i<images.length;i++){
    img+=`<img class="sc-img" src="${images[i]}" alt="">`
}
console.log(img);
const preview = document.querySelector(".im");
preview.innerHTML = img;

let tag = "";
for (let i = 0; i < tags.length; i++) {
   tag += `<p class="p2">${tags[i]}</p>`;
}
const about_app = document.querySelector(".about");
about_app.innerHTML = `<div class="head">
                    <p class="p1">About this app</p>
                    <P class="arrow">➜</P>
                </div>
                <p class="ab">
                    ${about}
                </p>
                <div class="tags">
                    ${tag}
                </div>`;
const rev = document.querySelector(".image2");
rev.setAttribute("src",    `${reviews}`); 

const sapps = document.querySelector(".image4");
sapps.setAttribute("src", `${similar_apps}`); 

let a = false;
const dot = document.getElementById("dots");
const box = document.getElementById("show");
dot.addEventListener("click", function () {
    a=!a;
    a === true ? box.classList.remove("hide") : box.classList.add("hide");
});