function Menu() {
    const element = document.getElementById("laterale");
    element.classList.toggle("sideclose");
}


function Mainpage() {
    const element = document.getElementById("menuOuvert");
    element.classList.toggle("mainplus");
}


function ChangeMenu() {
    Menu();
    Mainpage();
}