var ls = window.localStorage;

storySection = document.getElementById("story-section");

storySection.style.display = "none";

var name = ls.getItem("name");
var rollNo = ls.getItem("rollNo");
var phoneNo = ls.getItem("phoneNo");

if (name == null || rollNo == null || phoneNo == null) {
  document.getElementById("welcome-text").innerHTML =
    "Welcome to Creative Corner!";
} else {
  document.getElementById("welcome-text").innerHTML =
    `Hey ${name.split(' ')[0]} good to see you again!`;
  document.getElementById("nameInput").setAttribute("value", name);
  document.getElementById("rollNoInput").setAttribute("value", rollNo);
  document.getElementById("phoneNoInput").setAttribute("value", phoneNo);
}

function nextButton() {
  var inputName = document.getElementById("nameInput").value;
  var inputRollNo = document.getElementById("rollNoInput").value;
  var inputPhoneNo = document.getElementById("phoneNoInput").value;
  if (inputName != null) ls.setItem("name", inputName);
  if (inputRollNo != null) ls.setItem("rollNo", inputRollNo);
  if (inputPhoneNo != null) ls.setItem("phoneNo", inputPhoneNo);
  document.getElementById("login-section").style.display = "none";
  storySection.style.display = "block";
}

function uploadClicked() {
  let filePath = document.getElementById("upload-file-btn").value.split("\\");
  let file = filePath[filePath.length - 1];
  alert("You have uploaded " + file); 
}