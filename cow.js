var homePageGUIHTML = null;
var flipped = false;
var homePageGUI = false;
var object = document.querySelector("#text_div");
var hiddenObject = document.querySelector("#hidden_div");
function clicked () {
    if (flipped == true) {
        return;
    }
    
    flipped = true;
    
    object.style.transitionDuration = "2s";
    object.classList.add("flip");
}


function enter () {
    if (homePageGUI == true) {
        return;
    }
    homePageGUI = true;
    var position = document.documentElement.scrollTop;
    document.body.innerHTML += "<div class='home_page_GUI' style='top:" + position + "px'> </div>";
    homePageGUIHTML = document.body.querySelector(".home_page_GUI");
    homePageGUIHTML.classList.add("full_opacity");
    document.body.innerHTML += "<div class='next_page' </div>";
    
}

var project = {
    
    add : function (display,name) {
        
    },
    
    load : function (display,name) {
        
    },
    
    access : function (name) {
        
    },
    
    choose : function (name) {
        
    }
    
}