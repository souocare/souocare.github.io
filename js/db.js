var data = {
    "pt":{
        "aboutme_text":"Sobre Mim:", 
    },
    "en":{
        "aboutme_text":"About Me:"
    },
    "es":{
        "aboutme_text":"Sobre mi:"
    }
};


function mudarleng(leng){
    var langpage = document.getElementById('languagepage').innerHTML
    if (leng == 'pt'){
        document.getElementById('languagepage').innerHTML = 'Português';
        document.getElementById('flagselected').src = "https://www.countryflags.io/pt/flat/32.png";
        document.getElementById('pt_selection').style.display = 'none'
        document.getElementById('en_selection').style.display = 'block'
        document.getElementById('es_selection').style.display = 'block'
    } else if (leng == 'en'){
        document.getElementById('languagepage').innerHTML = 'English';
        document.getElementById('flagselected').src = "https://www.countryflags.io/gb/flat/32.png";
        document.getElementById('pt_selection').style.display = 'block'
        document.getElementById('en_selection').style.display = 'none'
        document.getElementById('es_selection').style.display = 'block'
    } else if (leng == 'es'){
        document.getElementById('languagepage').innerHTML = 'Español';
        document.getElementById('flagselected').src = "https://www.countryflags.io/es/flat/32.png";
        document.getElementById('pt_selection').style.display = 'block'
        document.getElementById('en_selection').style.display = 'block'
        document.getElementById('es_selection').style.display = 'none'
    } else {
        //pass
    };
    document.getElementById('aboutme_text').innerHTML = data[leng].aboutme_text;
    window.open("indexen.html","_self");

};