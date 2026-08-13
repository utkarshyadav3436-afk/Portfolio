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