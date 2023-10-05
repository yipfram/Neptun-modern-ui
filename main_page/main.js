// // this code will be executed after page load
// function changeInner(query,html){
//     queryS = document.querySelector(query);
//     queryS.innerHTML = html;
//     console.log('Html changed!')
// }
// function changeLanguageFlagLocation(){
//     const logoutTop = document.querySelector('.top_logout').outerHTML;
//     let languageDiv = document.getElementById('divLang').outerHTML;
//     languageDiv = languageDiv.replace('langchooserimgcollapsed','langchooserimgexpanded')
//     languageDiv = languageDiv.replace('divlang', 'divlangTop')
//     languageDiv += logoutTop
//     changeInner(".top_logout", languageDiv);

//     document.querySelector('.langchooser').remove()
// }

// (function() {
//     changeLanguageFlagLocation();
//     })();

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
    const mainHeaderR = document.getElementsByClassName('main_header_r')[0];
    const mainHeaderM = document.getElementsByClassName('main_header_m')[0];
    const mainHeaderL = document.getElementsByClassName('main_header_l')[0];

    const panCloserDiv = document.getElementById('panCloseHeader');
    const pageChooser = document.getElementById('upChooser');

    mainHeaderM.remove();
    mainHeaderR.remove();
    panCloserDiv.remove();

    const pageChooserHtml = pageChooser.outerHTML;
    mainHeaderL.remove();
    console.log(pageChooserHtml);
    console.log("header modified")

}

(function(){
    changeLanguageFlagLocation()
    changeHeader();
})();