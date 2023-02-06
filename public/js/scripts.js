import l from './i18n.js'

document.title = l.getLabel('appTitle');

$(function() {
    console.log( "jQuery is ready!" );
    //console.log(l.getChosenLang());
});