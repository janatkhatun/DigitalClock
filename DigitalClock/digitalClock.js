const seconds = document.querySelector("#sec");
const miniute = document.querySelector("#min");
const hrs = document.querySelector("#hrs");
const arm = document.querySelector("#arm");

let sectime = 0;
let mintime = 0;
let hrstime = 12;
let isPM = false;

setInterval(() => {

    // Increase seconds first
    sectime++;

    if (sectime === 60) {
        sectime = 0;
        mintime++;

        if (mintime === 60) {
            mintime = 0;
            hrstime++;

            // Toggle AM/PM ONLY when hour becomes 12
            if (hrstime === 12) {
                isPM = !isPM;
            }

            // Reset after 12
            if (hrstime === 13) {
                hrstime = 1;
            }
        }
    }

    // Format with leading zeros
    let secDisplay = sectime < 10 ? "0" + sectime : sectime;
    let minDisplay = mintime < 10 ? "0" + mintime : mintime;
    let hrDisplay = hrstime < 10 ? "0" + hrstime : hrstime;

    // Update UI
    seconds.textContent = secDisplay;
    miniute.textContent = minDisplay + ":";
    hrs.textContent = hrDisplay+":";

    // AM/PM
    arm.textContent = isPM ? "PM" : "AM";

}, 1000);