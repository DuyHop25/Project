// scroll menu
window.onscroll = function(){
    scrollBar();
}

function scrollBar(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        document.getElementById("bar").style.top = "0";
        document.getElementById("bar").style.backgroundColor = "var(--color-white)";
        document.getElementById("bar").style.transition = "1s";
        document.getElementById("research").style.border = "2px solid #eee";
        document.getElementById("moon_i").style.color = "#060606";
        document.getElementById("bar").style.padding = "0.6rem 2rem"; 
        // hoverPageMenu
        hoverPageMenu();
    }
    else{
        document.getElementById("bar").style.backgroundColor = "transparent";
        document.getElementById("moon_i").style.color = "#ffffff";
        document.getElementById("bar").style.padding = "1.2rem 2rem";
        // unhoverPageMenu
        UnhoverPageMenu();
    }
}  


function hoverPageMenu(){
    var path = window.location.pathname;
    var pageName = path.split('/').pop();
    if(pageName == "interface.html"){
        document.getElementById("home").style.color = "var(--color-orange)";
    }
    else if(pageName == "about.html"){
        document.getElementById("about").style.color = "var(--color-orange)";
    }
    else if(pageName == "services.html"){
        document.getElementById("service").style.color = "var(--color-orange)";
    }
    else if(pageName == "blog__posts.html"){
    var element = document.getElementById('a');
    element.addEventListener('scroll', function() {
    var scrollPosition = element.scrollTop;
    if (scrollPosition >= 50) {
        element.classList.add('scroll-hover');
        element.addEventListener('mouseover', function() {
        element.classList.add('hover');
        element.style.setProperty('--after-color', 'yellow');
          });    } 
    else {
        element.classList.remove('scroll-hover');
        element.addEventListener('mouseout', function() {
        element.classList.remove('hover');
        element.style.setProperty('--after-color', 'blue');
        });         
}
    });
    }
    else if(pageName == "contact.html"){
        document.getElementById("contact").style.color = "var(--color-orange)";
    }

    const myElements = document.getElementsByClassName("page");
    for (let i = 0; i < myElements.length; i++) {
        myElements[i].addEventListener("mouseenter", function() {
            this.style.color = "var(--color-orange)";
        });
        myElements[i].addEventListener("mouseleave", function() {
            this.style.color = ""; // Đặt lại màu chữ ban đầu
        });
}

}

function UnhoverPageMenu() {
    var path = window.location.pathname;
    var pageName = path.split('/').pop();
    if(pageName == "interface.html"){
        document.getElementById("home").style.color = "unset";
    }
    else if(pageName == "about.html"){
        document.getElementById("about").style.color = "unset";
    }
    else if(pageName == "services.html"){
        document.getElementById("service").style.color = "unset";
    }
    else if(pageName == "blog__posts.html"){
        document.getElementById("a").style.color = "unset";
    }
    else if(pageName == "contact.html"){
        document.getElementById("contact").style.color = "unset";
    }
   
    const myElements = document.getElementsByClassName("page");
        for (let i = 0; i < myElements.length; i++) {
            myElements[i].addEventListener("mouseenter", function() {
                this.style.color = "unset"; // Đặt lại màu chữ ban đầu
            });
    }
}




// Open video 
var node = document.getElementById("icon");
node.addEventListener("click", function() {
    var body = document.body;
    var video = document.getElementById('small-dialog');
    var closeBtn = document.getElementById('closeButton');
    var overlay = document.createElement('div');
    video.style.display = "block";
    overlay.className = 'overlay';
    body.appendChild(overlay);

    overlay.addEventListener("click", function() {
        body.removeChild(overlay);
        video.style.display = "none";
        body.style.position = "relative";
        video.style.position = "absolute";
    });

    closeBtn.addEventListener("click", function() {
        video.style.display = "none";
        overlay.style.backgroundColor = "unset";
    });
});



// menuPage
var isDataVisible = false;
function toggleData() {
    var dataElement = document.getElementById("menuPage");

    if (isDataVisible) {
        dataElement.style.display = "none";
        isDataVisible = false;
    } else {
        dataElement.style.display = "block";
        isDataVisible = true;
    }
}



// // pagination
    function pagination(){
    const page1  = document.getElementById('main__page1');
    const page2 = document.getElementById('main__page2');
    var prevButton = document.getElementById('prev');
    var nextButton = document.getElementById('next');
    var button1 = document.getElementById('button__1');
    var button2 = document.getElementById('button__2');
    var buttons = document.querySelectorAll('#pagination button');
    var totalPages = buttons.length - 2; // Loại bỏ nút prev và next
    var currentPage = 1;
    
    prevButton.addEventListener('click', function() {
        if (currentPage > 1) {
        currentPage--;
        updatePagination();
        }
        location.reload();
    });
    
    nextButton.addEventListener('click', function() {
        if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
        }
        location.reload();
    });
    
    button1.addEventListener('click', function() {
        if (currentPage !== 1) {
        currentPage = 1;
        updatePagination();
        }
        location.reload();
    });
    
    button2.addEventListener('click', function() {
        if (currentPage !== totalPages) {
        currentPage = totalPages;
        updatePagination();
        }
        location.reload();
    });
    
    function updatePagination() {
        buttons.forEach(function(button) {
        button.classList.remove('active');
        });
    
        buttons[currentPage].classList.add('active');
    
        if (currentPage === 1) {
        prevButton.style.display = 'none';
        nextButton.style.display = 'inline-block';
        page1.style.display ="inline-block";
        page2.style.display ="none";
        } else if (currentPage === totalPages) {
        prevButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
        page1.style.display ="none";
        page2.style.display ='inline-block';
        } else {
        prevButton.style.display = 'inline-block';
        nextButton.style.display = 'inline-block';
        }
    }
}
pagination();
