const currentMap = document.getElementById("currentMap");
const currentSchedule = document.getElementById("currentSchedule");
const currentScheduleDownload = document.getElementById("currentScheduleDownload");

const bursleyBaits = document.getElementById("bursleyBaits");
const commuterNorth = document.getElementById("commuterNorth");
const commuterSouth = document.getElementById("commuterSouth");
const crislerExpress = document.getElementById("crislerExpress");
const diagToDiag = document.getElementById("diagToDiag");
const glazierExpress = document.getElementById("glazierExpress");
const medExpress = document.getElementById("medExpress");
const northEastShuttle = document.getElementById("northEastShuttle");
const northwood = document.getElementById("northwood");
const northwoodExpress = document.getElementById("northwoodExpress");
const oxfordShuttle = document.getElementById("oxfordShuttle");
const wallStreet = document.getElementById("wallStreet");

const locations = [bursleyBaits, commuterNorth, commuterSouth, crislerExpress, diagToDiag, glazierExpress,
                    medExpress, northEastShuttle, northwood, northwoodExpress, oxfordShuttle, wallStreet];
const locationsStrings = ["bursleyBaits", "commuterNorth", "commuterSouth", "crislerExpress", "diagToDiag", "glazierExpress",
    "medExpress", "northEastShuttle", "northwood", "northwoodExpress", "oxfordShuttle", "wallStreet"];

for (let i = 0; i < locations.length; i++) {
    locations[i].addEventListener("click", function() {
        currentMap.src = "./transportation/map/" + locationsStrings[i] + ".png";
        currentSchedule.src = "./transportation/schedule/" + locationsStrings[i] +"Sched.png";
        currentScheduleDownload.href = currentSchedule.src;
    });
}

// bursleyBaits.addEventListener("click", function() {
//     currentMap.src = "./transportation/map/bursleyBaits.png";
//     currentSchedule.src = "./transportation/schedule/bursleyBaitsS.png";
// });
