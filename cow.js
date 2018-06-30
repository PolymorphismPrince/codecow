
var pageLoading = false;

var project = {
    
    list : [],
    
    add : function (display,name) {
        this.list.push({displayName : display, name: name});
    },
    
    load : function (display) {
        console.log("Drawing page...");
        var nextPage = document.querySelector('.next_page');
        nextPage.innerHTML = display;
        console.log("Page loaded. Scroll down to see it.");
        nextPage.classList.add("page");
        nextPage.classList.remove("next_page");
        pageLoading = false;
        
    },
    
    access : function (name) {
        if (pageLoading == true) {
            return;
        }
        pageLoading = true;
        document.body.innerHTML += "<div style='border: 10px solid silver; width: calc(100vw - 10px); height: 100vh;' class='next_page' </div>";
        ajax.requestData("./projects/" + name + ".html",project.load);
    }
     
}

//Add pages

project.add("Example Page", "example");
project.add("Lorem Ipsum", "example2");


var flipped = false;

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


var go = document.querySelector("#go");
go.innerHTML = "<p class='home_page_GUI_title'>Click on one of the following projects to load it: </p>";

project.list.forEach(function (i) {
    go.innerHTML += "<p class='project_listing' onclick='project.access(\"" + i.name + "\")'>-" + i.displayName + "</p>"
})
        
    
    



var ajax = {};
//Put all the console.logs just for fun
ajax.requestData = function (URL,callBack) {
    this.callBack = callBack;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Page data recieved... Drawing page.");
            ajax.callBack(this.responseText);
       }
        else {
            console.log("Loading page data... " + this.readyState * 25 + "% complete.");
        }
    };
    console.log("Loading page data... 0% complete.");
    xhttp.open("GET", URL, true);
    xhttp.send();
    
}

  
