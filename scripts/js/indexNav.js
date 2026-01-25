function main(){
    const profileBtn = document.getElementById("profileBtn")
    profileBtn.addEventListener("click", goToProfile);

    const midTermBtn = document.getElementById("midTermBtn")
    midTermBtn.addEventListener("click", goToMidterm);

    const finalTermBtn = document.getElementById("finalTermBtn")
    finalTermBtn.addEventListener("click", goToFinalTerm);
}


function goToProfile(){
    document.location.href = "profile.html";
}

function goToMidterm(){
    document.location.href = "midTerm.html";
}

function goToFinalTerm(){
    document.location.href = "finalTerm.html";
}

main()