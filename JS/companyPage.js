const searchAPIString = window.location.search;
const companySymbol = window.location.search.slice(window.location.search.indexOf("=")+1);
const companyImageElement = document.getElementById("company-image-div");
const companyNameElement =  document.getElementById("company-name-div");
const companyDescriptionElement = document.getElementById("company-description-div");
const companylinkElement =  document.getElementById("company-link-div");



const basicUrlForCompanyInformation = "https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/";
const currentCompanyInformationUrl = basicUrlForCompanyInformation + companySymbol;

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


async function showCompanyInformation(url) {
    const currentCompanyInformation = await askingFreeStockServerRespone(url); 

    const companyImageContent = currentCompanyInformation.profile.image;
    const companyNameContent = currentCompanyInformation.profile.companyName;
    const companyDescriptionContent = currentCompanyInformation.profile.description;
    const companylinkContent = currentCompanyInformation.profile.website;


companyImageElement.innerHTML += `<img class="company-image" src="${companyImageContent}"/>`;
companyNameElement.innerHTML += `<h1 class="company-name">${companyNameContent}</h1> `;
companyDescriptionElement.innerHTML += `<p class="company-description">${companyDescriptionContent}</p>`;
companylinkElement.innerHTML += `<p class="company-link"> <a href="${companylinkContent}">${companylinkContent}</a></p> `;
}

showCompanyInformation(currentCompanyInformationUrl);