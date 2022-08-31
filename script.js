"use strict"
const main = document.querySelector('main')
const liens = document.querySelectorAll('section a')


// ============== SPA PART ================
for(let i = 0; i<liens.length; i++){
        liens[i].addEventListener("click", router);
    }
const routes = {
    "/":"CV/pages/aboutMe.html",
    "/index.html":"CV/pages/Aboutme.html",
    "/Exp":"CV/pages/Exp.html",
    "/Portfolio":"CV/pages/Portfolio.html",
    "/Contact":"CV/pages/Contact.html",
    404: "CV/pages/404.html"
}

function router(e) {
    e.preventDefault()
    console.log(e.target);
    window.history.pushState({},"",e.target.closest("a").href)
    loadPage()
}
function loadPage(){
    const path = window.location.pathname;
    console.log(path);
    const route = routes[path] || routes[404]
    console.log(route)
    fetch(route).then(resp =>{
        if(resp.ok){
            resp.text().then(data=>{
                main.innerHTML = data
console.log(path);
                if(path === "/Skills"){
                    skills()
                }else if(path === "/index.html"|| path ==="/"){
                    revealHobbies()
                    Home()
                }else if(path === "/Portfolio"){
                    // carousel()
                }else if(path === "/Contact"){
                    showEmail()
                }
            })
        }
    }) 
}
// window.history.pushState({},"","")
console.log(window.history);
loadPage()

// =================== Roue CMPT ==================
// function skills(){
//     const its = document.querySelector('#compt div')
//     const icons = document.querySelectorAll('.iconPL')
//     const html  = document.querySelector('#html')
//     const css = document.querySelector('#css')
//     const js= document.querySelector('#js')
//     const php= document.querySelector('#php')
//     const mysql= document.querySelector('#mysql')
//     const git= document.querySelector('#git')
//     const angular= document.querySelector('#angular')
//     const sf= document.querySelector('#sf')

//     icons.forEach(a=>a.addEventListener("click", revealSkill))

//     function revealSkill(e){
//     switch (this.id) {
//         case "html":
//             its.textContent = "HTML"
//             break
//         case "css":
//             its.textContent = "CSS"
//             its.style.width = "fit-content"
//             its.style.height = "fit-content"
//             // its.style.padding = "5vh"
//             break
//         case "js":
//             its.textContent = "JavaScript"
//             its.style.width = "fit-content"
//             its.style.height = "fit-content"
//             // its.style.padding = "5vh"
//             break
//         case "php":
//             its.textContent = "PHP"
//             its.style.width = "fit-content"
//             its.style.height = "fit-content"
//             // its.style.padding = "5vh"
//             break
//         case "mysql":
//             its.textContent = "MySQL"
//             its.style.width = "fit-content"
//             its.style.height = "fit-content"
//             // its.style.padding = "5vh"
//             break
//         case "sf":
//             its.textContent = "Symphony"
//             its.style.width = "fit-content"
//             its.style.height = "fit-content"
//             // its.style.padding = "5vh"
//             break
//         case "git":
//             its.textContent = "GIT"
//             its.style.width = "fit-content"
//             its.style.height = "fit-content"
//             // its.style.padding = "5vh"
//             break
//         case "angular":
//             its.textContent = "Angular"
//             its.style.width = "fit-content"
//             its.style.height = "fit-content"
//             // its.style.padding = "5vh"
//             break
//     }
// }
// console.log(its)
// }
// ===================== About me IMG ==========
// function Home(){
// const img = document.querySelector(".img")
// const images = [
//     '<img src="./pages/img/avataaars (1).svg">',
//     '<img src="./pages/img/avataaars (2).svg">',
//     '<img src="./pages/img/avataaars (3).svg">',
//     '<img src="./pages/img/avataaars (4).svg">',
//     '<img src="./pages/img/avataaars (5).svg">'
// ]
// console.log(img)
// img.addEventListener("mouseenter",DontHoverMe)
// img.addEventListener("mouseleave",Stopit)
// function DontHoverMe(){
//     if(img.innerHTML == ""){
//         let i = Math.floor(Math.random() * images.length)
//         let image = images[i]
//         img.innerHTML = image
//     }
//     // images.style.backgroundSize = "50%"
// }
// function Stopit(){
//     img.innerHTML = ""
// }

// }

// ===================== Details of Hobbies =============

// function revealHobbies(){
//     const div = document.querySelectorAll(".band")
//     const p = document.querySelector(".details")

//     const computer = document.querySelector("#computer")
//     const book = document.querySelector("#book")
//     const game = document.querySelector("#game")
//     const cine = document.querySelector("#cine")
//     const music = document.querySelector("#music")
//     const fitness = document.querySelector("#fitness")

//     div.forEach(a=>a.addEventListener("mouseover", showHobbies))
    

//     function showHobbies(){
//         if(this === computer){
//             p.textContent = "J'aime la technologie !"
//         }
//         else if(this === book){
//             p.textContent = "J'aime lire !"
//         }
//         else if(this === game){
//             p.textContent = "J'aime jouer !"
//         }
//         else if(this === cine){
//             p.textContent = "J'aime regarder des series/films/animes !"
//         }
//         else if(this === music){
//             p.textContent = "J'adore écouter de la musique !"
//         }
//         else if(this === fitness){
//             p.textContent = "Je garde la forme en faisant du sport !"
//         }
//     }
// }

// --------------------Carousel---------------------

// const images = ["./img/img1.jpg","./img/img2.jpg","./img/img3.jpg"];
// const carousel = create(images);
// document.body.append(carousel);
// init();

// function init(){
//     showItems(0);
//     const carousel = select();
//     carousel.dots.forEach(dot=>dot.addEventListener("pointerdown", currentItem));
//     carousel.btns.forEach(btn=>btn.addEventListener("pointerdown", changeItem));
// }

// function carousel(){
//     const container = document.createElement("div")
//     container.classList.add("div")
//     const dots = document.createElement("div")
//     dots.classList.add(".dots")

//     divs.forEach((card, i)=>{
//         const div = document.createElement("div")
//         div.classList.add
//     })
// }

//================================ Contact Mail ==========================
// function showEmail(){

// const mailPlace = document.querySelector("#mail #middle")
// const mailBox = document.querySelector("#mail")
// const begin = document.querySelector("#begin")
// const end = document.querySelector("#end")
// const arobase = document.querySelector("#arobase")
// const span = document.querySelector("#arobase #middle")

// mailBox.addEventListener("mouseover", emailReveal)
// mailBox.addEventListener("mouseleave", emailHide)

// function emailReveal(){
//     // span.style.position="fixed"
//     end.style.marginTop="6vh"
//     begin.style.marginBottom="6vh"
//     arobase.style.display="flexbox"
//     arobase.style.flexDirection="column"
//     // begin.style.fontSize="5vh"
//     // end.style.fontSize="5vh"
//     // begin.style.height="6vh"
//     begin.textContent = "jacquet.kendra"
//     // begin.style.WritingMode="vertical-rl"
//     // begin.style.textOrientation="upright"
//     // end.style.height="6vh"
//     end.textContent ="hotmail.com"
//     // end.style.WritingMode="vertical-rl"
//     // end.style.textOrientation="upright"
// }
// function emailHide(){
//     begin.textContent = ""
//     end.textContent =""
// }

// }


