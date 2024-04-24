const mainPage = function() {
    const mainHeader = document.createElement("div");
    mainHeader.classList.add("contentHeader");
    mainHeader.innerHTML = "Welcome to<br> Fimba's Bar";
    const mainContent = document.createElement("div");
    mainContent.classList.add("contentCon");
    mainContent.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lorem id magna egestas euismod. Suspendisse vulputate congue purus, at mollis augue volutpat vel. Vestibulum gravida interdum dolor, sit amet tincidunt nisl bibendum a."
    const mainHours = document.createElement("div");
    mainHours.classList.add("contHours");

    const mainHoursHeader = document.createElement("h3");
    mainHoursHeader.textContent = "OPEN HOURS";
    const mainHoursInfo = document.createElement("p");
    mainHoursInfo.innerHTML = `Monday 9-9<br>Tuesday 9-9<br>Wednesday 9-9<br>Thursday 9-9<br>Friday 9-9<br>Saturday 9-9<br>Sunday 9-9`;
    const pageElement = document.querySelector("#content");
    const pageContainer = document.createElement("div");
    pageContainer.classList.add("container");
    pageElement.appendChild(pageContainer);
    pageContainer.appendChild(mainHeader);
    pageContainer.appendChild( mainContent);
    pageContainer.appendChild(mainHours)
    mainHours.appendChild(mainHoursHeader);
    mainHours.appendChild( mainHoursInfo);
    
}
export {mainPage}