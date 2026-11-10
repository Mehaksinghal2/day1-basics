// Variables
let userName = "Mehak";
let role = "Full Stack Developer";

// Array
let skills = ["HTML", "CSS", "JavaScript", "React"];

// Object
let student = {
    name: "Mehak",
    role: "Full Stack Developer",
    experience: "Learning and Practicing"
};


// Function
function greetUser() {
    document.getElementById("message").innerText =
        "Hello " + userName + "! You are learning JavaScript.";
}


// Button click event
document.getElementById("welcomeBtn").addEventListener("click", function () {
    greetUser();
});


// Display skills
document.getElementById("skillsBtn").addEventListener("click", function () {

    document.getElementById("skills").innerText =
        "My skills: " + skills.join(", ");
});


// Console practice
console.log("User Name:", userName);
console.log("Role:", role);
console.log("Skills:", skills);
console.log("Student:", student);