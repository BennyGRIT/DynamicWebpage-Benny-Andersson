let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

console.log(darkMode ? "Darkmode" : "Lightmode");
const theBody = document.querySelector("body");

if (darkMode) {
  console.log("if darkmode");
  let lightOrDarkMode = "darkModeClass";
  theBody.setAttribute("class", lightOrDarkMode);
  window.localStorage.setItem("lightOrDarkMode", lightOrDarkMode);
}
if ((darkMode = window.matchMedia("(prefers-color-scheme: light)").matches)) {
  let lightOrDarkMode = "lightModeClass";

  console.log("else lightmode");
  theBody.setAttribute("class", lightOrDarkMode);
  window.localStorage.setItem("lightOrDarkMode", lightOrDarkMode);
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "nowDarkMode" : "nowLightMode";
    console.log(newColorScheme);

    if (darkMode) {
      console.log("if darkmode");
      let lightOrDarkMode = "darkModeClass";
      theBody.setAttribute("class", lightOrDarkMode);
      window.localStorage.setItem("lightOrDarkMode", lightOrDarkMode);
    }
    if (
      (darkMode = window.matchMedia("(prefers-color-scheme: light)").matches)
    ) {
      let lightOrDarkMode = "lightModeClass";

      console.log("else lightmode");
      theBody.setAttribute("class", lightOrDarkMode);
      window.localStorage.setItem("lightOrDarkMode", lightOrDarkMode);
    }

    let lightOrDarkMode = theBody.setAttribute;
  });

function myBuy() {
  alert(`Du har nu köpt denna fina pjäs!! 
    Var vänlig lägg tie TUSEN i omärkta sedlar i min brevlåda!
    (Så fixar jag växel till dig senare)`);
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const buyButtonProduct10Button = document.getElementById("buyButtonProduct10");
const product10Id = document.getElementById("product10");

buyButtonProduct10Button.addEventListener("click", () => {
  product10Id.style.transform = "rotate(-0deg";
});

let lang = navigator.language || navigator.userLanguage;
console.log(lang);

const textInEnglish = [
  "The ultimate LEGO® Star Wars Millennium Falcon has landed! With 7,500 parts, Han Solos super-fast Corellian ship is packed with the coolest details and fun features.",
  "Build and display the Galactic Empires iconic ship – the Devastator.",
  "Inspire children and adults with this 75257 LEGO® Star Wars™ Millennium Falcon model.",
  "Team up with Luke Skywalker on the battlefield of Hoth and challenge General Veers in the mighty AT-AT.",
  "The droid has movable legs and comes with a clear, brick-built pole so it can float over the buildable snow scene.",
  "This cool building model includes a buildable display stand with an information sign.",
  "Kids aged 9 and up can recreate epic stories from Star Wars: The Bad Batch with this amazing LEGO® brick model of bounty hunter Cad Banes spaceship, The Justifier (75323).",
  "Recreate the Battle of Utapau with this awesome LEGO® Star Wars™ AT-TE Walker (75337)",
  "Imagine life as a galactic bounty hunter as you build and display a LEGO Star Wars™ Ultimate Collector Series version of The Razor Crest starship (75331).",
  "Fans of The Empire Strikes Back can stage Imperial missions to defeat the Rebel Alliance with this TIE Bomber (75347) LEGO brick starfighter.",
];

const textInSwedish = [
  "Den ultimata LEGO® Star Wars Millennium Falcon har landat! Med 7 500 delar är Han Solos supersnabba corellianska skepp fullpackat med de coolaste detaljerna och de roligaste funktionerna.",
  "Bygg och visa upp det galaktiska imperiets ikoniska skepp – Devastator.",
  "Inspirera barn och vuxna med denna 75257 LEGO® Star Wars™ Millennium Falcon modell.",
  "Samarbeta med Luke Skywalker på slagfältet på Hoth och utmana general Veers i den mäktiga AT-AT.",
  "Droiden har rörliga ben och levereras med en genomskinlig, klossbyggd stolpe så att den kan ”sväva” över den byggbara snöscenen.",
  "Denna coola byggmodell innehåller ett byggbart visningsställ med en informationsskylt.",
  "Barn från 9 år kan återskapa episka berättelser från Star Wars: The Bad Batch med denna fantastiska modell i LEGO® klossar av prisjägaren Cad Banes rymdskepp, The Justifier (75323).",
  "Återskapa slaget om Utapau med denna fantastiska LEGO® Star Wars™ AT-TE Walker (75337).",
  "Föreställ dig livet som en galaktisk prisjägare medan du bygger och visar upp en LEGO Star Wars™ Ultimate Collector Series version av rymdskeppet The Razor Crest (75331).",
  "Fans av Rymdimperiet slår tillbaka kan iscensätta imperieuppdrag för att besegra Rebellalliansen med denna TIE Bomber (75347) starfighter i LEGO klossar.",
];

const product1 = document.getElementById("product1text");
const product2 = document.getElementById("product2text");
const product3 = document.getElementById("product3text");
const product4 = document.getElementById("product4text");
const product5 = document.getElementById("product5text");
const product6 = document.getElementById("product6text");
const product7 = document.getElementById("product7text");
const product8 = document.getElementById("product8text");
const product9 = document.getElementById("product9text");
const product10 = document.getElementById("product10text");

const allProducts = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
];

const menuEngText = [
  "Start",
  "Products",
  "To English",
  "To Swedish",
  "Do not click Here!!",
  "Start",
  "Products",
  "Do not click Here!!",
  "Contact: 0704-294669",
  "Map",
  "Follow us on Facebook",
  "Follow me on Linkedin",
];

const menus = [
  document.getElementById("menu0"),
  document.getElementById("menu1"),
  document.getElementById("menu2"),
  document.getElementById("menu3"),
  document.getElementById("menu4"),
  document.getElementById("menu5"),
  document.getElementById("menu6"),
  document.getElementById("menu7"),
  document.getElementById("menu8"),
  document.getElementById("menu9"),
  document.getElementById("menu10"),
  document.getElementById("menu11")
]

const menuSwedishText = [
  'Startsidan',
  'Produkterna',
  'Ändra språk till Engelska',
  'Ändra språk till Svenska',
  'Klicka inte här',
  'Startsidan',
  'Produkterna',
  'Klicka inte här',
  'Kontaktuppgifter: 0706-666666, Benny',
  'Karta',
  'Följ oss på Facebook',
  'Följ mig på Linkedin'
]

console.log(menus[0])
console.log(allProducts[1])


function englishFunction() {
  console.log("Ändra till Engelska");
    allProducts[0].innerHTML =textInEnglish[0];
  allProducts[1].innerHTML = textInEnglish[1];
  allProducts[2].innerHTML = textInEnglish[2];
  allProducts[3].innerHTML = textInEnglish[3];
  allProducts[4].innerHTML = textInEnglish[4];
  allProducts[5].innerHTML = textInEnglish[5];
  allProducts[6].innerHTML = textInEnglish[6];
  allProducts[7].innerHTML = textInEnglish[7];
  allProducts[8].innerHTML = textInEnglish[8];
  allProducts[9].innerHTML = textInEnglish[9];

  menus[0].innerHTML = menuEngText[0];
  menus[1].innerHTML = menuEngText[1]
  menus[2].innerHTML = menuEngText[2]
  menus[3].innerHTML = menuEngText[3]
  menus[4].innerHTML = menuEngText[4]
  menus[5].innerHTML = menuEngText[5]
  menus[6].innerHTML = menuEngText[6]
  menus[7].innerHTML = menuEngText[7]
  menus[8].innerHTML = menuEngText[8]
  menus[9].innerHTML = menuEngText[9]
  menus[10].innerHTML = menuEngText[10]
  menus[11].innerHTML = menuEngText[11]

  const buyButton = document.querySelectorAll('.buyButton');
  for (i=0; i<buyButton.length; i++){
    buyButton[i].innerHTML= 'Buy it now'
  }
  }

function swedishFunction() {
  allProducts[0].innerHTML = textInSwedish[0];
  allProducts[1].innerHTML = textInSwedish[1];
  allProducts[2].innerHTML = textInSwedish[2];
  allProducts[3].innerHTML = textInSwedish[3];
  allProducts[4].innerHTML = textInSwedish[4];
  allProducts[5].innerHTML = textInSwedish[5];
  allProducts[6].innerHTML = textInSwedish[6];
  allProducts[7].innerHTML = textInSwedish[7];
  allProducts[8].innerHTML = textInSwedish[8];
  allProducts[9].innerHTML = textInSwedish[9];

  menus[0].innerHTML = menuSwedishText[0];
  menus[1].innerHTML = menuSwedishText[1]
  menus[2].innerHTML = menuSwedishText[2]
  menus[3].innerHTML = menuSwedishText[3]
  menus[4].innerHTML = menuSwedishText[4]
  menus[5].innerHTML = menuSwedishText[5]
  menus[6].innerHTML = menuSwedishText[6]
  menus[7].innerHTML = menuSwedishText[7]
  menus[8].innerHTML = menuSwedishText[8]
  menus[9].innerHTML = menuSwedishText[9]
  menus[10].innerHTML = menuSwedishText[10]
  menus[11].innerHTML = menuSwedishText[11]

  const buyButton = document.querySelectorAll('.buyButton');
  for (i=0; i<buyButton.length; i++){
    buyButton[i].innerHTML= 'Köp nu'
  }

}

if (lang === "sv-SE") {
  console.log("Tjenare mannen IF på svenska");
} else if (lang === "en-US") {
  console.log("Hello motherTRUCKER!!! if else på engelska");

  // Benny fattar inte varför nedanstående loop inte fungerar. Han får snart ett damp-anfall, så han kör utan en FÅRloop
  
  //   for (let i = 0; i<allProducts.length; i++) {
  //     allProducts[i].innerHMTL=textInEnglish[i]
  // }
  allProducts[0].innerHTML = textInEnglish[0];
  allProducts[1].innerHTML = textInEnglish[1];
  allProducts[2].innerHTML = textInEnglish[2];
  allProducts[3].innerHTML = textInEnglish[3];
  allProducts[4].innerHTML = textInEnglish[4];
  allProducts[5].innerHTML = textInEnglish[5];
  allProducts[6].innerHTML = textInEnglish[6];
  allProducts[7].innerHTML = textInEnglish[7];
  allProducts[8].innerHTML = textInEnglish[8];
  allProducts[9].innerHTML = textInEnglish[9];

  menus[0].innerHTML = menuEngText[0];
menus[1].innerHTML = menuEngText[1]
menus[2].innerHTML = menuEngText[2]
menus[3].innerHTML = menuEngText[3]
menus[4].innerHTML = menuEngText[4]
menus[5].innerHTML = menuEngText[5]
menus[6].innerHTML = menuEngText[6]
menus[7].innerHTML = menuEngText[7]
menus[8].innerHTML = menuEngText[8]
menus[9].innerHTML = menuEngText[9]
menus[10].innerHTML = menuEngText[10]
menus[11].innerHTML = menuEngText[11]
const buyButton = document.querySelectorAll('.buyButton');
for (i=0; i<buyButton.length; i++){
  buyButton[i].innerHTML= 'Buy it now'
}

}

function fuckIt() {
  const rootBeer = document.querySelector("body");
  rootBeer.setAttribute("class", "fuckItClass");
  alert(`Din mammas Smoothie!!!!
Klicka OK... ok?`);
}
