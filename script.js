console.log("Hello,I'm Utkarsh");
console.log("I am learning Javascript");
let name = "Utkarsh";
let age = 19;
let course = "B.Tech CSE";
console.log(name);
console.log(age);
console.log(course);
const github = "https://github.com/utkarshyadav3436-afk";

console.log(github);
let githubBtn = 
document.getElementById("githubBtn");

githubBtn.addEventListener("click",function(){
    console.log("GitHub button was clicked!");
});
let message = document.getElementById("message");

githubBtn.addEventListener("click", function() {
    message.textContent = "Thanks for visiting my portfolio!";
});
let isStudent = true;
if (isStudent){
    console.log("I am a B.Tech CSE student.");
} else{
    console.log("Student condition is false.");
}
let marks = 75;
if(marks >= 60){
    console.log("Good Result!");
} else {
    console.log("Keep practicing!");
}
function showWelcome(){
    console.log("Welcome to my portfolio!");
}
showWelcome();
function greetUser(name){
    console.log("Hello, "+ name);
}
greetUser("Utkarsh");
greetUser("Student");
function addNumbers(a,b){
    return a+b;
}
let result = addNumbers(10,20);

console.log(result);
function showLearningMessage(){
    let message = 
    document.getElementById("jsMessage");

    message.textContent = "Currently Learning JavaScript";
}

showLearningMessage();
let resumeBtn = document.getElementById("resumeBtn");
let resumeMessage = document.getElementById("resumeMessage");

resumeBtn.addEventListener("click", function(event) {
    event.preventDefault();

    resumeMessage.textContent = "Resume download feature coming soon!";
    resumeBtn.textContent = "Resume Coming Soon";
    resumeBtn.disabled = true;
});
let heading = document.querySelector("h1");

heading.textContent = "Welcome to My Portfolio";
function changeHeading(){
    heading.textContent = "Hello, I'm Utkarsh Yadav";
} 
changeHeading();
let profileImage =
document.querySelector(".profile");

console.log(profileImage);
profileImage.classList.add("profile-highlight");