/*================================= Typed animation ======================*/
var typed = new Typed('#typed', {
    strings: ["Web Designer", "Web Developer", "Digital Marketer", "Digital Creator"],
    typeSpeed: 100,
    BackSeed: 60,
    loop: true,

});



/*================================= Aside ======================*/
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length;

allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
const a = navList[i].querySelector("a");
a.addEventListener("click", function () {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
    for (let j = 0; j < totalNavList; j++) {
        if (navList[j].querySelector("a").classList.contains("active")) {
            allSection[j].classList.add("back-section");
        }
        navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active")
    showSection(this);
})
}
function showSection(element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];

    if(target.length > 0){
        document.querySelector("#" + target).classList.add("active")
    }

  
}