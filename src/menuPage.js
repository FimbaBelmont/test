const menuPage = function() {
    const menuHeader = document.createElement("div");
    menuHeader.classList.add("contentHeader");
    menuHeader.textContent = "Fimba's Bar Menu";
    const menuContent = document.createElement("div");
    menuContent.classList.add("contentCon");
    const menuContent01 = document.createElement("div");
    menuContent01.classList.add("contentElement");
    menuContent01.innerHTML = "Menu item 01<br> Price: 5$"
    const menuContent02 = document.createElement("div");
    menuContent02.classList.add("contentElement");
    menuContent02.innerHTML = "Menu item 02<br> Price: 5$"
    const menuContent03 = document.createElement("div");
    menuContent03.classList.add("contentElement");
    menuContent03.innerHTML = "Menu item 03<br> Price: 5$"
    const menuContent04 = document.createElement("div");
    menuContent04.classList.add("contentElement");
    menuContent04.innerHTML = "Menu item 04<br> Price: 5$"
    const menuContent05 = document.createElement("div");
    menuContent05.classList.add("contentElement");
    menuContent05.innerHTML = "Menu item 05<br> Price: 5$"

    const pageElement = document.querySelector("#content");
    const pageContainer = document.createElement("div");
    pageContainer.classList.add("container");
    pageElement.appendChild(pageContainer);
    pageContainer.appendChild(menuHeader);
    let contentArray = [menuContent01,menuContent02,menuContent03,menuContent04,menuContent05]
    for(let i=0;i<contentArray.length;i++){
        contentArray[i].classList.add("contentCon")
        pageContainer.appendChild(contentArray[i])
    }
}
export {menuPage}