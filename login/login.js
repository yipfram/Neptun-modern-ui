function addGoogleFont(){document.head.insertAdjacentHTML("beforeend",'\n            <link rel="preconnect" href="https://fonts.googleapis.com">\n            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,600;1,900&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">\n        ')}
(function() {
    addGoogleFont();
    $('#lblInstitute').parent().addClass("University_Title_Wrapper").removeAttr("style")
    $("#tdIstitute").parent().addClass("University_Logo_Wrapper").removeAttr("style")

    // Put a class on the login container Tbody
    $(".tr_Logo").parent().addClass("loginFlexWrapper").removeAttr("style")
    $(".info_table_center_container_td").parent().addClass("NewsWrapper")

    // Classing every input parent to "inputWrapper"
    $(".login_label").parent().addClass("inputWrapper")


    // START --- Changing the cheap "University of pécs" label to a brand new shinny image ;)
    const oldItem = $('#lblInstitute')
    const newItem = $("<img id=\"lblInstitute\"></img>").attr("src", chrome.runtime.getURL("assets/pte-logo-large.svg"));
    oldItem.replaceWith(newItem);
    // END ---

    // add a class to the primary login wrapper
    $(".table_center:first-child").children().first().addClass("loginPrimaryWrapper")

    // START --- Removing right text align from the login input labels
    $(".login_label").removeAttr("align");
    // END ---
})();