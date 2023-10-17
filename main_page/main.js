const uptraining = $('#upTraining')

function changeLanguageFlagLocation(){
    let uptraining = document.querySelector('#upTraining').outerHTML;
    let languageDiv = document.getElementById('divLang').outerHTML;

    languageDiv = languageDiv.replace('langchooserimgcollapsed','langchooserimgexpanded')
    languageDiv = languageDiv.replace('divlang', 'divlangTop')
    languageDiv += uptraining;
    changeInner(".top_logout", languageDiv);

    document.querySelector('.langchooser').remove()
}

function changeHeader() {
    $(".main_header_r").remove();
    $(".main_header_m").remove();
    $(".main_header_l").remove();
    $("#panCloseHeader").remove();
}

(function(){
    changeLanguageFlagLocation()
    changeHeader();
})();