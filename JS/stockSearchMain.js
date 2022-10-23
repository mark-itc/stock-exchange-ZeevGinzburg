const exmpUrl = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ";

// const basicUrl = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/";

// const searchQuery = "search?query=AA&limit=10&exchange=NASDAQ"
// const serchUrl = basicUrl + searchQuery;

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
    const stockArray = await askingFreeStockServerRespone(url); 
    for (let i = 0; i <= stockArray.length -1; i++) {
        const companyNameandSymbol = await retrieveCompanyNameAndSymbol(stockArray[i]);
        const searchResultList = document.createElement("li");
        const searchResultText = document.createTextNode(companyNameandSymbol);
        searchResultList.appendChild(searchResultText);
        const element = document.getElementById("result-list");
        element.appendChild(searchResultList);
    }

}




document.getElementById("searchButton").addEventListener("click",function(event) {searchButton()});

function searchButton() {
    presentOutput(exmpUrl);

}