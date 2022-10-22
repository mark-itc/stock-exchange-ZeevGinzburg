const basicUrl = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/profile/AAPL";

async function askingFreeStockServerRespone(url) {
    // console.log("im working")
    try {const freeStockData = await fetch(url);
    const jsonFreeStockData = await freeStockData.json();
    return jsonFreeStockData.result;}
    catch(error) {
       return "Server error"
    }
};

async function presentOutput(url) {
    const searchResultList = document.createElement("li");
    const stockData = await askingFreeStockServerRespone(url);
    const searchResultText = document.createTextNode(stockData);
    searchResultList.appendChild(searchResultText);
    const element = document.getElementById("result-list");
    element.appendChild(searchResultList);
    console.log("presentout working")
}




document.getElementById("searchButton").addEventListener("click",function(event) {searchButton()});

function searchButton() {
    presentOutput(basicUrl);
}