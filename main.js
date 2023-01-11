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
  


const isItDarkOrLightButton = document.getElementById('isItDarkMode')

    let darkMode = window.matchMedia("(prefers-color-scheme: ligth)").matches;
    console.log(darkMode?"Darkmode":"Lightmode");

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    alert(newColorScheme)
    console.log(newColorScheme)
    });

    isItDarkOrLightButton.addEventListener('click',event =>{
    console.log(darkMode?"Darkmode":"Lightmode");
    const newColorScheme = event.matches ? "dark" : "light";

    const rootElement = document.querySelector(':root')
    // rootElement.style.color = "hotpink"
    console.log(newColorScheme)
})

