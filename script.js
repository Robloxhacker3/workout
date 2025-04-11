let currentLevel = 'beginner';
let stage = 0;

const schedule = document.getElementById("schedule");
const submitButton = document.getElementById("submit-workout");
const beginnerLock = document.getElementById("beginner-lock");
const hardLock = document.getElementById("hard-lock");
const hardcoreLock = document.getElementById("hardcore-lock");

// Show main screen after code entered
document.getElementById("submit-code").addEventListener("click", function () {
    let code = document.getElementById("code-input").value;
    if (code === "ahmad") {
        document.getElementById("popup").style.display = "none";
        document.querySelector(".blurred-bg").style.display = "none";
        document.querySelector(".container").style.display = "flex";

        // Unlock beginner
        beginnerLock.style.display = "none";
        showBeginnerSchedule();
    } else {
        alert("Wrong code!");
    }
});

// Submit workout button logic
submitButton.addEventListener("click", function () {
    stage++;

    if (currentLevel === 'beginner') {
        if (stage < 3) {
            showBeginnerSchedule();
        } else {
            currentLevel = 'hard';
            stage = 0;
            hardLock.style.display = "none";
            showHardSchedule();
        }
    } else if (currentLevel === 'hard') {
        if (stage < 3) {
            showHardSchedule();
        } else {
            currentLevel = 'hardcore';
            stage = 0;
            hardcoreLock.style.display = "none";
            showHardcoreSchedule();
        }
    } else if (currentLevel === 'hardcore') {
        if (stage < 3) {
            showHardcoreSchedule();
        } else {
            schedule.innerText = "Thank you! Come back Tomorrow!";
            submitButton.style.display = "none";
        }
    }
});

// Beginner sets
function showBeginnerSchedule() {
    const levels = [
        `Beginner Set 1:
- Push-ups: 3 sets of 10
- Squats: 3 sets of 15
- Plank: 30 seconds`,
        `Beginner Set 2:
- Push-ups: 3 sets of 15
- Squats: 3 sets of 20
- Plank: 45 seconds`,
        `Beginner Set 3:
- Push-ups: 4 sets of 20
- Squats: 4 sets of 25
- Plank: 1 min`
    ];
    schedule.innerText = levels[stage];
    submitButton.style.display = "inline-block";
}

// Hard sets
function showHardSchedule() {
    const levels = [
        `Hard Set 1:
- Diamond Push-ups: 3x12
- Jump Squats: 3x15
- Plank to Push-up: 3x10`,
        `Hard Set 2:
- Diamond Push-ups: 4x15
- Jump Squats: 4x20
- Plank to Push-up: 4x12`,
        `Hard Set 3:
- Diamond Push-ups: 5x20
- Jump Squats: 5x25
- Plank to Push-up: 5x15`
    ];
    schedule.innerText = levels[stage];
    submitButton.style.display = "inline-block";
}

// Hardcore sets
function showHardcoreSchedule() {
    const levels = [
        `Hardcore Set 1:
- Burpees: 4x15
- Elbow Lever Hold: 30 sec x 3
- Mountain Climbers: 3x25`,
        `Hardcore Set 2:
- Burpees: 5x20
- Elbow Lever Hold: 45 sec x 3
- Mountain Climbers: 4x30`,
        `Hardcore Set 3:
- Burpees: 6x25
- Elbow Lever Hold: 1 min x 3
- Mountain Climbers: 5x35`
    ];
    schedule.innerText = levels[stage];
    submitButton.style.display = "inline-block";
}
