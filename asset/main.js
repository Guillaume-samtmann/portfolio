var lienUn = document.querySelector(".Un");
var lienDeux = document.querySelector(".deux");
var lienTrois = document.querySelector(".trois");
var lienQuatre = document.querySelector(".quatre");
//les icons
var iconUn = document.querySelector(".Iun");
var iconDeux = document.querySelector(".Ideux");
var iconTrois = document.querySelector(".Itrois");
var iconQuatre = document.querySelector(".Iquatre");
//Les pages
var pagePortfolio = document.querySelector(".contenuPortfolio");
var NavDroite = document.querySelector("aside");
var pageAccueil = document.querySelector(".contenuAccueil");
var pageApropos = document.querySelector(".contenuApropos");
var pageContact = document.querySelector(".contenuContact");
//Les button 
var buttonAccueil = document.querySelector(".buttonAcc");


lienUn.addEventListener("click", () =>{
    lienUn.style.opacity = "0.1";
    lienDeux.style.opacity = "0.1";
    lienTrois.style.opacity = "0.1";
    lienQuatre.style.opacity = "0.1";

    iconUn.style.opacity = "0.9";
    iconDeux.style.opacity = "0.1";
    iconTrois.style.opacity = "0.1";
    iconQuatre.style.opacity = "0.1";

    pagePortfolio.style.display = "none";
    NavDroite.style.width = "0%";
    pageAccueil.style.display = "flex";
    pageApropos.style.display = "none";
    pageContact.style.display = "none";
})
lienDeux.addEventListener("click", () =>{
    lienUn.style.opacity = "0.1";
    lienDeux.style.opacity = "0.9";
    lienTrois.style.opacity = "0.1";
    lienQuatre.style.opacity = "0.1";

    iconUn.style.opacity = "0.1";
    iconDeux.style.opacity = "0.9";
    iconTrois.style.opacity = "0.1";
    iconQuatre.style.opacity = "0.1"; 

    pagePortfolio.style.display = "none";
    NavDroite.style.width = "20%";
    pageAccueil.style.display = "none";
    pageApropos.style.display = "block";
    pageContact.style.display = "none";
})
lienTrois.addEventListener("click", () => {
    lienUn.style.opacity="0.1";
    lienDeux.style.opacity="0.1";
    lienTrois.style.opacity="0.9";
    lienQuatre.style.opacity="0.1";

    iconUn.style.opacity="0.1";
    iconDeux.style.opacity="0.1";
    iconTrois.style.opacity="0.9";
    iconQuatre.style.opacity="0.1";

    pagePortfolio.style.display = "block";
    NavDroite.style.width = "20%";
    pageAccueil.style.display = "none";
    pageApropos.style.display = "none";
    pageContact.style.display = "none";
})
lienQuatre.addEventListener("click", ()=>{
    lienUn.style.opacity="0.1";
    lienDeux.style.opacity="0.1";
    lienTrois.style.opacity="0.1";
    lienQuatre.style.opacity="0.9";

    iconUn.style.opacity="0.1";
    iconDeux.style.opacity="0.1";
    iconTrois.style.opacity="0.1";
    iconQuatre.style.opacity="0.9";

    pagePortfolio.style.display = "none";
    NavDroite.style.width = "20%";
    pageAccueil.style.display = "none";
    pageApropos.style.display = "none";
    pageContact.style.display = "block";
})


iconUn.addEventListener("click", () =>{
    lienUn.style.opacity = "0.1";
    lienDeux.style.opacity = "0.1";
    lienTrois.style.opacity = "0.1";
    lienQuatre.style.opacity = "0.1";

    iconUn.style.opacity = "0.9";
    iconDeux.style.opacity = "0.1";
    iconTrois.style.opacity = "0.1";
    iconQuatre.style.opacity = "0.1";

    pagePortfolio.style.display = "none";
    NavDroite.style.width = "0%";
    pageAccueil.style.display = "flex";
    pageApropos.style.display = "none";
    pageContact.style.display = "none";
})
iconDeux.addEventListener("click", () =>{
    lienUn.style.opacity = "0.1";
    lienDeux.style.opacity = "0.9";
    lienTrois.style.opacity = "0.1";
    lienQuatre.style.opacity = "0.1";

    iconUn.style.opacity = "0.1";
    iconDeux.style.opacity = "0.9";
    iconTrois.style.opacity = "0.1";
    iconQuatre.style.opacity = "0.1"; 

    pagePortfolio.style.display = "none";
    NavDroite.style.width = "20%";
    pageAccueil.style.display = "none";
    pageApropos.style.display = "block";
    pageContact.style.display = "none";
})
iconTrois.addEventListener("click", () => {
    lienUn.style.opacity="0.1";
    lienDeux.style.opacity="0.1";
    lienTrois.style.opacity="0.9";
    lienQuatre.style.opacity="0.1";

    iconUn.style.opacity="0.1";
    iconDeux.style.opacity="0.1";
    iconTrois.style.opacity="0.9";
    iconQuatre.style.opacity="0.1";

    pagePortfolio.style.display = "block";
    NavDroite.style.width = "20%";
    pageAccueil.style.display = "none";
    pageApropos.style.display = "none";
    pageContact.style.display = "none";
})
iconQuatre.addEventListener("click", ()=>{
    lienUn.style.opacity="0.1";
    lienDeux.style.opacity="0.1";
    lienTrois.style.opacity="0.1";
    lienQuatre.style.opacity="0.9";

    iconUn.style.opacity="0.1";
    iconDeux.style.opacity="0.1";
    iconTrois.style.opacity="0.1";
    iconQuatre.style.opacity="0.9";

    pagePortfolio.style.display = "none";
    NavDroite.style.width = "20%";
    pageAccueil.style.display = "none";
    pageApropos.style.display = "none";
    pageContact.style.display = "block";
})

buttonAccueil.addEventListener("click", () =>{
    lienUn.style.opacity = "0.1";
    lienDeux.style.opacity = "0.9";
    lienTrois.style.opacity = "0.1";
    lienQuatre.style.opacity = "0.1";

    iconUn.style.opacity = "0.1";
    iconDeux.style.opacity = "0.9";
    iconTrois.style.opacity = "0.1";
    iconQuatre.style.opacity = "0.1"; 

    pagePortfolio.style.display = "none";
    NavDroite.style.width = "20%";
    pageAccueil.style.display = "none";
    pageApropos.style.display = "block";
})