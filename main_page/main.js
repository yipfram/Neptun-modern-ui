const uptraining = $('#upTraining')

function changeLanguageFlagLocation(){
    let uptraining = $('<div>').append($('#upTraining').clone()).html();
    let languageDiv = $('<div>').append($('#divLang').clone()).html();
    let logoutButton = $('<div>').append($('#lbtnQuit').clone()).html();
    console.log(languageDiv);
    $("#mainPageHeader div").last().remove();

    languageDiv = languageDiv.replace('langchooserimgcollapsed','langchooserimgexpanded')
    languageDiv = languageDiv.replace('divlang', 'divlangTop')
    $("#upTraining").remove();
    $(".top_logout_link").remove();
    fullDiv = uptraining + languageDiv + logoutButton ;
    $('.top_logout').append(fullDiv);


    $('.langchooser').remove()
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