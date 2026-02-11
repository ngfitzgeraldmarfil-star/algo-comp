const profileBtn = document.getElementById("profileBtn")
const syllabusBtn = document.getElementById("syllabusBtn")
const midTermBtn = document.getElementById("midTermBtn")
const finalTermBtn = document.getElementById("finalTermBtn")
    
function goToProfile(){
    document.location.href = "profile.html";
}

function goToSyllabus(){
    document.location.href = "syllabus.html";
}

function goToMidterm(){
    document.location.href = "midTerm.html";
}

function goToFinalTerm(){
    document.location.href = "finalTerm.html";
}

profileBtn.addEventListener("click", goToProfile);
syllabusBtn.addEventListener("click", goToSyllabus);
midTermBtn.addEventListener("click", goToMidterm);
finalTermBtn.addEventListener("click", goToFinalTerm);
