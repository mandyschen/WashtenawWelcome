const currentMap = document.getElementById("currentMap");
const currentSchedule = document.getElementById("currentSchedule");
const bursleyBaits = document.getElementById("bursleyBaits");
const commuterNorth = document.getElementById("commuterNorth");
const commuterSouth = document.getElementById("commuterSouth");

bursleyBaits.addEventListener("click", function() {
    currentMap.src = "./transportation/map/bursleyBaits.png";
    currentSchedule.src = "./transportation/schedule/bursleyBaitsS.png";
});
commuterNorth.addEventListener("click", function() {
    currentMap.src = "./transportation/map/commuterNorth.png";
    currentSchedule.src = "./transportation/schedule/commuterNorthS.png";
});
commuterSouth.addEventListener("click", function() {
    currentMap.src = "./transportation/map/commuterSouth.png";
    currentSchedule.src = "./transportation/schedule/commuterSouthS.png";
});