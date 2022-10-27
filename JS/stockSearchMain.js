const basicUrl = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/";

const loader = document.getElementsByClassName("loader-container")[0];
function turnOffLoader(){
loader.style.display = "none";
};
function turnOnLoader(){
    loader.style.display = "flex";
    };

async function askingFreeStockServerRespone(url) {
    try {
        const freeStockData = await fetch(url);
        const jsonFreeStockData = await freeStockData.json();
    
    return jsonFreeStockData;
    }
    catch(error) {
       return "Server error"
    }
};

async function retrieveCompanyNameAndSymbol(object) {
    const symbolOfFirstObject = object.symbol;
    const companyNameOfFirstObject = object.name;
    const companyNameandSymbol = `${companyNameOfFirstObject} (${symbolOfFirstObject})`;
    return companyNameandSymbol;

}

async function presentOutput(url) {
    const resultListElement = document.getElementById("result-list");
    resultListElement.innerHTML = "";
    const stockArray = await askingFreeStockServerRespone(url); 

    for (let i = 0; i <= stockArray.length -1; i++) {
        const companyNameandSymbol = await  retrieveCompanyNameAndSymbol(stockArray[i]);
        turnOffLoader();             
        resultListElement.innerHTML += `<li> ${companyNameandSymbol} </li>`;
    }

}
document.onload = turnOffLoader();
document.getElementById("searchButton").addEventListener("click",function(event) {searchButton()});


function searchButton() {
    turnOnLoader();
    const userInput = document.getElementById('stock-search').value;
    const searchQuery = `search?query=${userInput}&limit=10&exchange=NASDAQ`;
    const serchUrl = basicUrl + searchQuery;
    presentOutput(serchUrl);

}