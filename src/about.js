const aboutPage = function() {
    const aboutHeader = document.createElement("div");
    aboutHeader.classList.add("contentHeader");
    aboutHeader.innerHTML = "Contact Us";
    const aboutContent = document.createElement("div");
    aboutContent.classList.add("contentCon");
    aboutContent.innerHTML = "<h1>Fimba</h1><br>Owner<br>000-000-0000<br>Fimba@bar.com"
    const aboutHours = document.createElement("div");
    aboutHours.classList.add("contHours");

    
    const pageElement = document.querySelector("#content");
    const pageContainer = document.createElement("div");
    pageContainer.classList.add("container");
    pageElement.appendChild(pageContainer);
    pageContainer.appendChild(aboutHeader);
    pageContainer.appendChild( aboutContent);

    
}
export {aboutPage}