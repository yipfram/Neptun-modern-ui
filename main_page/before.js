// this code will be executed after page load
function changeInner(query,html){queryS = document.querySelector(query);queryS.innerHTML = html;console.log('Html changed!')}
function removeEachAttribute(element,attribute){document.querySelectorAll(element.toLowerCase()).forEach((occurence=>occurence.removeAttribute(attribute))),console.log("Attribute removed from "+element)}function classAnElement(element,className){document.querySelector(element).setAttribute("class",className),console.log('"'+className+'" class added successfully')}function classFirstChild(parent,className){document.querySelector(parent).children[0].setAttribute("class",className),console.log('"'+className+'" class added successfully'),console.log('Style of "'+className+'" class cleaned')}function classMultipleParents(child,className){document.querySelectorAll(child).forEach((element=>{element.parentNode.setAttribute("class",className)})),console.log('"'+className+'" class added successfully')}function classParent(child,className){const parentDiv=document.querySelector(child).parentNode;parentDiv.setAttribute("class",className),parentDiv.removeAttribute("style"),console.log('"'+className+'" class added successfully'),console.log('Style of "'+className+'" class cleaned')}function addGoogleFont(){document.head.insertAdjacentHTML("beforeend",'\n            <link rel="preconnect" href="https://fonts.googleapis.com">\n            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,600;1,900&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">\n        ')}function AddClass(element,newClassName){document.querySelector(element).className=newClassName,console.log(newClassName+" added")}

function addMenu() {
        // Add new side bar menu to Neptun ;)
        
        // Intitialisation of the main Menu (variable = function because it's more readable that way)
        const sideMenu = document.createElement("div");
        sideMenu.id = "sideBarMenu";
        sideMenu.className = "menuStyle";
        console.log(sideMenu);
 
        const topInfoWrapper = document.createElement('div');
        topInfoWrapper.className = "topMenuWrapper";

        // Initialise the button to open the Menu
        const menuButton = document.createElement('img');
        menuButton.className = "sideBarButton";
        menuButton.setAttribute("onClick", "console.log(\"Side Menu Openned\");")
        menuButton.setAttribute("src", chrome.runtime.getURL("assets/menu.svg"));

        const neptunSpan = document.createElement('span');
        neptunSpan.className = "menuLogoWrapper";
        
        const neptunImg = document.createElement('img');
        neptunImg.className = "menuLogoImg";
        neptunImg.setAttribute('src', chrome.runtime.getURL("assets/neptun_simple_logo.jpg"))
        neptunSpan.appendChild(neptunImg)
        
        // Append all the elements in the top Menu.
        topInfoWrapper.appendChild(menuButton)
        topInfoWrapper.appendChild(neptunSpan);
        // Append Top info Wrapper to Menu.
        sideMenu.appendChild(topInfoWrapper)

        // Append Menu in DOM
        document.body.appendChild(sideMenu)
}


// removeEachAttribute // ClassAnElement // classFirstChild // classMultipleParents
(function() {

   addMenu();
})();
  