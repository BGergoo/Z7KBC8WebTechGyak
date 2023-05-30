const main = document.getElementById("main-page");
const c01  = document.getElementById("course-01");
const c02  = document.getElementById("course-02");
const c03  = document.getElementById("course-03");
const c04  = document.getElementById("course-04");

function changePage(index) {
    main.setAttribute("active", "false");
    c01   .setAttribute("active", "false");
    c02   .setAttribute("active", "false");
    c03   .setAttribute("active", "false");
    c04   .setAttribute("active", "false");
    switch(index) {
        case 1:
            c01.setAttribute("active", "true");
            break;
        case 2:
            c02.setAttribute("active", "true");
            break;
        case 3:
            c03.setAttribute("active", "true");
            break;
        case 4:
            c04.setAttribute("active", "true");
            break;
        default:
            main.setAttribute("active", "true");
            break;
    }
}

var videom = document.getElementById('videom');

function indit_leallit() {
    if (videom.paused) {
        videom.play();
    }
    else {
        videom.pause();
    }
}