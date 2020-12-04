// 메뉴
var prolEl = document.getElementById("prol");
var illuEl = document.getElementById("illu");
var newmEl = document.getElementById("newm");
var videEl = document.getElementById("vide");
var epilEl = document.getElementById("epil");
// 왼쪽
var leftSectionlEl = document.getElementById("leftSection");
// 선
var verticalLine1El = document.getElementById("verticalLine1");
var verticalLine2El = document.getElementById("verticalLine2");



/*---*/
// Black
function OnMenuWhite(e) {
    leftSectionlEl.style.backgroundColor = "#ffffff";
    leftSectionlEl.style.color = "#000000";
    verticalLine1El.style.borderLeftColor = "#000000";
}
function OnMenuBlack(e) {
    leftSectionlEl.style.backgroundColor = "#000000";
    leftSectionlEl.style.color = "#ffffff";
    verticalLine1El.style.borderLeftColor = "#ffffff";
}
prolEl.addEventListener("mouseover", OnMenuBlack);
prolEl.addEventListener("mouseout", OnMenuWhite);
epilEl.addEventListener("mouseover", OnMenuBlack);
epilEl.addEventListener("mouseout", OnMenuWhite);

// Cyan
function OnMenuCyan(e) {
    leftSectionlEl.style.backgroundColor = "#00bdff";
    leftSectionlEl.style.color = "#000000";
}
illuEl.addEventListener("mouseover", OnMenuCyan);
illuEl.addEventListener("mouseout", OnMenuWhite);

// Magenta
function OnMenuMagenta(e) {
    leftSectionlEl.style.backgroundColor = "#ff0098";
    leftSectionlEl.style.color = "#000000";
}
newmEl.addEventListener("mouseover", OnMenuMagenta);
newmEl.addEventListener("mouseout", OnMenuWhite);

// Yellow
function OnMenuYellow(e) {
    leftSectionlEl.style.backgroundColor = "#ffc200";
    leftSectionlEl.style.color = "#000000";
}
videEl.addEventListener("mouseover", OnMenuYellow);
videEl.addEventListener("mouseout", OnMenuWhite);
