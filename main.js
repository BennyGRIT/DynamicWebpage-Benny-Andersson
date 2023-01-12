


let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(darkMode?"Darkmode":"Lightmode");


window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
const newColorScheme = event.matches ? "nowDarkMode" : "nowLightMode";
// alert(newColorScheme)
console.log(newColorScheme)

    // if (newColorScheme === "nowDarkMode"){
    //     console.log('if darkmode')
    //     theBody.setAttribute('class', 'darkModeClass');
    //     window.localStorage.setItem(lightOrDarkMode, 'darkModeClass')
    // }
    // else {
    //     console.log('else lightmode');
    //     theBody.setAttribute('class', 'lightModeClass');
    //     window.localStorage.setItem(lightOrDarkMode, 'lightModeClass')

    // }

    if (darkMode){
        console.log('if darkmode')
        let lightOrDarkMode  ="darkModeClass"
        theBody.setAttribute('class', lightOrDarkMode);
        window.localStorage.setItem("lightOrDarkMode", lightOrDarkMode)
    }
    if (darkMode = window.matchMedia("(prefers-color-scheme: light)").matches) {
        let lightOrDarkMode  ="lightModeClass"
        
        console.log('else lightmode');
        theBody.setAttribute('class', lightOrDarkMode);
        window.localStorage.setItem("lightOrDarkMode", lightOrDarkMode)

    }





    let lightOrDarkMode = theBody.setAttribute
});



function myBuy(){
    alert(`Du har nu köpt denna fina pjäs!! 
    Var vänlig lägg tie TUSEN i omärkta sedlar i min brevlåda!
    (Så fixar jag växel till dig senare)`)
};

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  const buyButtonProduct10Button = document.getElementById('buyButtonProduct10');

  const product10Id = document.getElementById('product10');

  buyButtonProduct10Button.addEventListener('click', ()=>{
    product10Id.style.transform='rotate(-0deg'
  })
  



//     let darkMode = window.matchMedia("(prefers-color-scheme: ligth)").matches;
//     console.log(darkMode?"Darkmode":"Lightmode");

//     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
//     const newColorScheme = event.matches ? "dark" : "light";
//     alert(newColorScheme)
//     console.log(newColorScheme)
//     });




// const isItDarkOrLightButton = document.getElementById('isItDarkMode')


//     isItDarkOrLightButton.addEventListener('click',event =>{
//     console.log(darkMode?"Darkmode":"Lightmode");
//     const newColorScheme = event.matches ? "dark" : "light";

//     const rootElement = document.querySelector(':root')
//     // rootElement.style.color = "hotpink"
//     console.log(newColorScheme)
//     alert(newColorScheme)

// })
let myGetItem = window.localStorage.getItem("lightOrDarkMode")
const theBody = document.querySelector('body')

theBody.setAttribute('class', myGetItem);