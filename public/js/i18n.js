let availableLangs = ['pl', 'en'];
let defaultLang = 'pl';
let translation = {
    'pl':{
        'appTitle':'Kontakty',
        'appVersion':'wersja aplikacji',
    },
    'en':{
        'appTitle':'Contacts',
        'appVersion':'app version',
    }
};
let lang = {
    getAvailable:function(){
        return availableLangs;
    },
    getDefault:function(){
        return defaultLang;
    },
    getTranslations:function(){
        return translation;
    },
    getChosenLang:function(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return (urlParams.has('l') && this.getAvailable().includes(urlParams.get('l'))) ? urlParams.get('l'): this.getDefault();
    },
    getLabel:function(label){
        let l = this.getChosenLang();
        return (l in translation && label in translation[l]) ? translation[l][label] : `__${label}__`;
    }
};

export default lang;