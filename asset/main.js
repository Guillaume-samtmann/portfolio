const lienUn = document.querySelector(".Un");
const lienDeux = document.querySelector(".deux");
const lienTrois = document.querySelector(".trois");

//les icons
const iconUn = document.querySelector(".Iun");
const iconDeux = document.querySelector(".Ideux");
const iconTrois = document.querySelector(".Itrois");

//Les pages
const pagePortfolio = document.querySelector(".contenuPortfolio");
const portfolio = document.querySelector(".portfolio");
const NavDroite = document.querySelector("aside");
const pageAccueil = document.querySelector(".contenuAccueil");
const pageApropos = document.querySelector(".contenuApropos");
const body = document.querySelector("body");
//Les button 
const buttonAccueil = document.querySelector(".buttonAcc");


lienUn.addEventListener("click", () =>{
    lienUn.style.opacity = "0.1";
    lienDeux.style.opacity = "0.1";
    lienTrois.style.opacity = "0.1";

    iconUn.style.opacity = "0.9";
    iconDeux.style.opacity = "0.1";
    iconTrois.style.opacity = "0.1";

    pagePortfolio.style.display = "none";
    NavDroite.style.width = "0%";
    NavDroite.style.opacity= "0.0";
    body.style.overflow = "hidden"
    pageAccueil.style.display = "flex";
    pageApropos.style.display = "none";
    portfolio.style.width = "0%";
})
lienDeux.addEventListener("click", () =>{
    lienUn.style.opacity = "0.1";
    lienDeux.style.opacity = "0.9";
    lienTrois.style.opacity = "0.1";

    iconUn.style.opacity = "0.1";
    iconDeux.style.opacity = "0.9";
    iconTrois.style.opacity = "0.1";


    pagePortfolio.style.display = "none";
    NavDroite.style.width = "20%";
    body.style.overflow = "auto"
    pageAccueil.style.display = "none";
    pageApropos.style.display = "block";
    portfolio.style.width = "0%";
})
lienTrois.addEventListener("click", () => {
    lienUn.style.opacity="0.1";
    lienDeux.style.opacity="0.1";
    lienTrois.style.opacity="0.9";

    iconUn.style.opacity="0.1";
    iconDeux.style.opacity="0.1";
    iconTrois.style.opacity="0.9";


    pagePortfolio.style.display = "block";
    NavDroite.style.width = "20%";
    NavDroite.style.opacity= "100";
    body.style.overflow = "auto"
    pageAccueil.style.display = "none";
    pageApropos.style.display = "none";
    portfolio.style.width = "75%";
})



iconUn.addEventListener("click", () =>{
    lienUn.style.opacity = "0.1";
    lienDeux.style.opacity = "0.1";
    lienTrois.style.opacity = "0.1";


    iconUn.style.opacity = "0.9";
    iconDeux.style.opacity = "0.1";
    iconTrois.style.opacity = "0.1";


    pagePortfolio.style.display = "none";
    NavDroite.style.width = "0%";
    NavDroite.style.opacity= "0.0";
    body.style.overflow = "hidden"
    pageAccueil.style.display = "flex";
    pageApropos.style.display = "none";
    portfolio.style.width = "0%";

})
iconDeux.addEventListener("click", () =>{
    lienUn.style.opacity = "0.1";
    lienDeux.style.opacity = "0.9";
    lienTrois.style.opacity = "0.1";


    iconUn.style.opacity = "0.1";
    iconDeux.style.opacity = "0.9";
    iconTrois.style.opacity = "0.1";


    pagePortfolio.style.display = "none";
    NavDroite.style.width = "20%";
    NavDroite.style.opacity= "10.00";
    body.style.overflow = "auto"
    pageAccueil.style.display = "none";
    pageApropos.style.display = "block";
    portfolio.style.width = "0%";

})
iconTrois.addEventListener("click", () => {
    lienUn.style.opacity="0.1";
    lienDeux.style.opacity="0.1";
    lienTrois.style.opacity="0.9";

    iconUn.style.opacity="0.1";
    iconDeux.style.opacity="0.1";
    iconTrois.style.opacity="0.9";

    pagePortfolio.style.display = "block";
    NavDroite.style.width = "20%";
    NavDroite.style.opacity= "10.00";
    body.style.overflow = "auto"
    pageAccueil.style.display = "none";
    pageApropos.style.display = "none";
    portfolio.style.width = "75%";
})


buttonAccueil.addEventListener("click", () =>{
    lienUn.style.opacity = "0.1";
    lienDeux.style.opacity = "0.9";
    lienTrois.style.opacity = "0.1";

    iconUn.style.opacity = "0.1";
    iconDeux.style.opacity = "0.9";
    iconTrois.style.opacity = "0.1";

    pagePortfolio.style.display = "none";
    NavDroite.style.width = "20%";
    NavDroite.style.opacity= "10.00";
    body.style.overflow = "auto"
    pageAccueil.style.display = "none";
    pageApropos.style.display = "block";
    portfolio.style.width = "0%";
})

const btnContact = document.querySelector(".contactLink")
const pageContact1 = document.querySelector(".pageContact")

btnContact.addEventListener("click", () =>{
  pageContact1.style.display = "flex"
})

const Xcontact = document.querySelector(".Xcontact")
Xcontact.addEventListener("click", () =>{
    pageContact1.style.display = "none"
})

const  infoSite = document.querySelector(".infoSite")
const lesInfosParoisse = document.querySelector("#lesInfosParoisse")

infoSite.addEventListener("click", () =>{
    lesInfosParoisse.style.display = "flex"
})

const XdetailSites = document.querySelectorAll(".XdetailSite");

const  infoSiteCiwos = document.querySelector(".infoSiteCiwos")
const lesInfosCiwos = document.querySelector("#lesInfosCiwos")

infoSiteCiwos.addEventListener("click", () =>{
    lesInfosCiwos.style.display = "flex"
})

const  infoSiteTetris = document.querySelector(".infoSiteTetris")
const lesInfosTetris = document.querySelector("#lesInfosTetris")

infoSiteTetris.addEventListener("click", () =>{
    lesInfosTetris.style.display = "flex"
})

const  infoSiteSnake = document.querySelector(".infoSiteSnake")
const lesInfosSnake = document.querySelector("#lesInfosSnake")

infoSiteSnake.addEventListener("click", () =>{
    lesInfosSnake.style.display = "flex"
})

const  infoSiteZombie = document.querySelector(".infoSiteZombie")
const lesInfosZombie = document.querySelector("#lesInfosZombie")

infoSiteZombie.addEventListener("click", () =>{
    lesInfosZombie.style.display = "flex"
})

const  infoSiteSae301 = document.querySelector(".infoSiteSae301")
const lesInfosSae301 = document.querySelector("#lesInfosSae301")

infoSiteSae301.addEventListener("click", () =>{
    lesInfosSae301.style.display = "flex"
})

const  infoSiteBootstrap = document.querySelector(".infoSiteBootstrap")
const lesInfosBootstrap = document.querySelector("#lesInfosBootstrap")

infoSiteBootstrap.addEventListener("click", () =>{
    lesInfosBootstrap.style.display = "flex"
})

const  infoSiteVuejs = document.querySelector(".infoSiteVuejs")
const lesInfosVuejs = document.querySelector("#lesInfosVuejs")

infoSiteVuejs.addEventListener("click", () =>{
    lesInfosVuejs.style.display = "flex"
})

const  infoSiteSae203 = document.querySelector(".infoSiteSae203")
const lesInfosSae203 = document.querySelector("#lesInfosSae203")

infoSiteSae203.addEventListener("click", () =>{
    lesInfosSae203.style.display = "flex"
})



XdetailSites.forEach(XdetailSite => {
    XdetailSite.addEventListener("click", () => {
        // En supposant que "lesInfosParoisse" est une variable définie ailleurs dans votre code
        lesInfosParoisse.style.display = "none";
        lesInfosCiwos.style.display = "none"
        lesInfosTetris.style.display = "none"
        lesInfosSnake.style.display = "none"
        lesInfosZombie.style.display = "none"
        lesInfosSae301.style.display = "none"
        lesInfosBootstrap.style.display = "none"
        lesInfosVuejs.style.display = "none"
        lesInfosSae203.style.display = "none"
    });
});

// pour le mobile
const lienAutreSite = document.querySelector(".btnDeuxiemePartie");
const btnActive = document.querySelector(".btn-active");
const partieUneSite = document.querySelector(".lesSites");
const partieDeuxSite = document.querySelector(".lesSite2");
lienAutreSite.addEventListener("click", () => {
    partieUneSite.style.display = "none";
    partieDeuxSite.style.display="block"
})

btnActive.addEventListener("click", () => {
    partieUneSite.style.display = "block";
    partieDeuxSite.style.display="none"
})

const lienAccMobile = document.querySelector("#accueilMobile")
const lienAproposMobile = document.querySelector("#aProposMobile")

const lienportfolioMobile = document.querySelector("#portfolio")

lienAccMobile.addEventListener("click", () =>{
    pagePortfolio.style.display = "none";
    body.style.overflow = "auto"
    pageAccueil.style.display = "flex";
    pageApropos.style.display = "none";
})
lienAproposMobile.addEventListener("click", () =>{
    pagePortfolio.style.display = "none";
    body.style.overflow = "auto"
    pageAccueil.style.display = "none";
    pageApropos.style.display = "block";
})
lienportfolioMobile.addEventListener("click", () =>{
    pagePortfolio.style.display = "block";
    body.style.overflow = "auto"
    pageAccueil.style.display = "none";
    pageApropos.style.display = "none";
    portfolio.style.width = "100%";
})


