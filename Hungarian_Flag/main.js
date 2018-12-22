// Created by SoloLearn

// Represent your country's flag in code!

function toggleFlag() {
    var but = document.getElementById("toggleButton");
    if (but.innerHTML === "Open!") {
        but.innerHTML = "Close";
        openFlag();
    }
    else {
        but.innerHTML = "Open!";
        closeFlag();
    }
}

function closeFlag() {
    var flag = document.getElementById("flag");
    var emblem = document.getElementById("emblem");
    var mT = 0;
    var mR = 0;
    var w = 220;
    var emblW = 50;
    var emblH = 80;

    var interval = setInterval(function () {
        mT += 10;
        flag.style.marginTop = mT + "px";
        if (mT >= 140) {
            clearInterval(interval);
            minimizeFlag();
        }
    }, 100);

    function minimizeFlag() {
        var interval2 = setInterval(function () {
            w -= 20;
            mR += 20;
            flag.style.width = w + "px";
            flag.style.marginRight = mR + "px";
            if (emblW >= 15) {
                emblW -= 15;
                emblH -= 15;
                emblem.style.width = emblW + "px";
                emblem.style.heigth = emblH + "px";
            }
            if (w <= 20) {
                clearInterval(interval2);
            }
        }, 100);
    }
}

function openFlag() {
    var flag = document.getElementById("flag");
    var emblem = document.getElementById("emblem");
    var mT = 140;
    var mR = 200;
    var w = 20;
    var emblW = -15;
    var emblH = -15;

    var interval = setInterval(function () {
        mT -= 10;
        flag.style.marginTop = mT + "px";
        if (mT === 0) {
            clearInterval(interval);
            minimizeFlag();
        }
    }, 100);

    function minimizeFlag() {
        var interval2 = setInterval(function () {
            w += 20;
            mR -= 20;
            flag.style.width = w + "px";
            flag.style.marginRight = mR + "px";
            if (emblW < 50 || emblH<80) {
                if(emblW<50){emblW += 6;}
                if(emblH<80){emblH += 6.5;}
                emblem.style.width = emblW + "px";
                emblem.style.heigth = emblH + "px";
            }
            if (w >= 220) {
                clearInterval(interval2);
            }
        }, 100);
    }
}