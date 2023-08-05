var settingsmenu = document.querySelector('.settings-menu')
var darkBtn = document.getElementById('dark-btn')

function settingsMenuToggle(){
    settingsmenu.classList.toggle('settings-menu-height')
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle('dark-btn-on')
    document.body.classList.toggle('dark-theme')

    if(localStorage.getItem('theme') == 'light'){
        localStorage.setItem('theme','dark');
    }
    else{
        localStorage.setItem('theme','light');
    }
}

// To read whether there is LocalStorage or not
if(localStorage.getItem('theme') == 'light'){
    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
}
else if(localStorage.getItem('theme') == 'dark'){
    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');
}
else{
    localStorage.setItem('theme','light');
}




// Create a local storage for the wb browser
// localStorage.setItem('theme','light'); 
// to read the value of the created local storage.Its will give the value of 
// local storage named theme, it takes only one argument i.e. name of the localStorage
// localStorage.getItem('theme');