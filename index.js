let btnTranslate = document.querySelector('.btn-translate');

let inputText = document.querySelector('#input-txt');

let outputText = document.querySelector('.output');

// testing API or server
// let serverURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';

let serverURL = 'https://api.funtranslations.com/translate/minion.json';

function getTranslationURL(text) {
    return `${serverURL}?text=${text}`; 
}


// error handeling is imp. for an API
function errorHandler(error) {
    console.log("error occured", error);
    alert("Error Occured...");
}



function clickHandler() {
    // console.log("Clicked!");
    // console.log(`Input Text: ${inputText.value}`);
    // outputText.textContent = inputText.value;
    


    fetch(getTranslationURL(inputText.value))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;// output
    })
    .catch(errorHandler)
    // or both are same
    // error handling is important for API;

    // fetch(getTranslationURL(inputText.value)).then(response => response.json()).then(json => console.log(json.contents.translated)).catch(errorHandler);

    // try {
    //     fetch(getTranslationURL(inputText.value)).then(response => response.json()).then(json => console.log(json.contents.translated));
    // }
    // catch (error){
    //     console.log("error occured ", error);
    // }
}

// btnTranslate.addEventListener('click', function () { //anonymous function
//     console.log("Button clicked!");
// });

btnTranslate.addEventListener('click', clickHandler);