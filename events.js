"use strict";

//1. When any section is clicked the output target text 
//   should be "You clicked on the {text of the section} section"
var sectionSelect = document.getElementsByClassName("article-section");
var output = document.getElementById("output-target");

function clickToDom() {
  output.innerHTML = "You Clicked on the " + this.innerHTML + " section.";
  };
for(var i = 0; i < sectionSelect.length; i++) {
  sectionSelect[i].addEventListener('click', clickToDom);
};



//2. When the mouse is over the h1 tag, the output element should contain 
//   the text "You moved your mouse over the header".
var h1Hover = document.getElementById("page-title");
function hoverToDom() {
  output.innerHTML = "You moved your mouse over the header.";
};
h1Hover.addEventListener('mouseover', hoverToDom);



//  3. When the mouse leaves the h1 tag, the output element should contain the text
//    "You left me!!".
function abandonmentIssues() {
  output.innerHTML = "You left me!!";
};
h1Hover.addEventListener('mouseout', abandonmentIssues);



//  4. When you type characters into the input field, 
//    the output element should mirror the text in the input field.
var textInput = document.getElementById("keypress-input");
//function goes here
function mirrorToDom() {
  output.innerHTML = `${textInput.value}`;
};
textInput.addEventListener('keyup', mirrorToDom);


//  5. When you click the "Add color" button, the `guinea-pig` element's 
//  text color should change to blue.
var btnColor = document.getElementById("add-color");
var guineaPigText = document.getElementById("guinea-pig");
function addColor() {
  guineaPigText.classList.add("blue");
};
btnColor.addEventListener('click', addColor);


//  6. When you click the "Hulkify" button, the `guinea-pig` 
//  element's font size should become much larger.
var btnHulkify = document.getElementById("make-large");
function hulkify() {
  guineaPigText.classList.add("hulkify");
};
btnHulkify.addEventListener('click', hulkify);


//  7. When you click the "Capture it" button, the `guinea-pig` 
//  element should have a border added to it.
var btnCapture = document.getElementById("add-border");
function capture() {
  guineaPigText.classList.add("capture");
};
btnCapture.addEventListener('click', capture);


//  8. When you click the "Rounded" button, the `guinea-pig` 
//  element's border should become rounded.
var btnRounded = document.getElementById("add-rounding");
function rounded() {
  guineaPigText.classList.add("rounded");
};
btnRounded.addEventListener('click', rounded);


//  9. The first section's text should be bold.
//  10. The last section's text should be bold and italicized.
//  11. Make the buttons stop appearing next to each other as 
//  inline elements. Change them into block elements.

var firstSection = sectionSelect[2];
var lastSection = sectionSelect[sectionSelect.length - 2];
var btns = document.getElementsByTagName("button");

function boldFirst() {
  firstSection.classList.add("boldFirst");
};
function italicizeLast() {
  lastSection.classList.add("italicizeLast");
};
function blockify() {
  for(var i = 0; i < btns.length; i++) {
  btns[i].classList.add("blockify");
  };
};

function pageLoad() {
  boldFirst();
  italicizeLast();
  blockify();
};
window.addEventListener('load', pageLoad);






