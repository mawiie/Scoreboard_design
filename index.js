let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeCount = 0
let guestCount = 0

// console.log(homeScore, guestScore)

function addhome1() {
    homeCount += 1
    homeScore.innerText = homeCount  
}

function addhome2() {
    homeCount += 2
    homeScore.innerText = homeCount  
}

function addhome3() {
    homeCount += 3
    homeScore.innerText = homeCount  
}

function addguest1() {
    guestCount += 1
    guestScore.innerText = guestCount  
}

function addguest2() {
    guestCount += 2
    guestScore.innerText = guestCount 
}

function addguest3() {
    guestCount += 3
    guestScore.innerText = guestCount 
}

function wipe() {
    if (homeCount > guestCount) {
        console.log("Home team wins")
    }
    
    else if (homeCount == guestCount) {
        console.log("This game was a draw")
    }
    
    else {
        console.log("Guest team wins")
    }
    
    homeCount = 0
    guestCount = 0
    guestScore.innerText = guestCount
    homeScore.innerText = homeCount 
}