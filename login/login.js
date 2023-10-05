function removeEachAttribute(element,attribute){document.querySelectorAll(element.toLowerCase()).forEach((occurence=>occurence.removeAttribute(attribute))),console.log("Attribute removed from "+element)}function classAnElement(element,className){document.querySelector(element).setAttribute("class",className),console.log('"'+className+'" class added successfully')}function classFirstChild(parent,className){document.querySelector(parent).children[0].setAttribute("class",className),console.log('"'+className+'" class added successfully'),console.log('Style of "'+className+'" class cleaned')}function classMultipleParents(child,className){document.querySelectorAll(child).forEach((element=>{element.parentNode.setAttribute("class",className)})),console.log('"'+className+'" class added successfully')}function classParent(child,className){const parentDiv=document.querySelector(child).parentNode;parentDiv.setAttribute("class",className),parentDiv.removeAttribute("style"),console.log('"'+className+'" class added successfully'),console.log('Style of "'+className+'" class cleaned')}function addGoogleFont(){document.head.insertAdjacentHTML("beforeend",'\n            <link rel="preconnect" href="https://fonts.googleapis.com">\n            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,600;1,900&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">\n        ')}function AddClass(element,newClassName){document.querySelector(element).className=newClassName,console.log(newClassName+" added")}
(function() {
    "use strict"
    addGoogleFont();
    classParent('#lblInstitute',"University_Title_Wrapper");
    classParent('#tdIstitute','University_Logo_Wrapper')
    
    // Put a class on the login container Tbody
    classParent('.tr_Logo', 'loginFlexWrapper');
    classParent('.info_table_center_container_td', 'NewsWrapper');

    classMultipleParents('.login_label', 'inputWrapper');
    // START --- Changing the cheap "University of pécs" label to a brand new shinny image ;)
    const oldItem = document.querySelector('#lblInstitute')
    const newItem = document.createElement('img');
    newItem.setAttribute("id", "lblInstitute");
    newItem.setAttribute("src", chrome.runtime.getURL("assets/pte-logo-large.svg"));
    oldItem.parentNode.replaceChild(newItem, oldItem);
    // END ---

    // add a class to the primary login wrapper
    classFirstChild('.table_center', 'loginPrimaryWrapper');    
    // START --- Removing right text align from the login input labels
    removeEachAttribute('.login_label', "align");
    // END ---
})();