var fontSizeInput = document.getElementById('wielkosc');
var myTextarea = document.getElementById('notatnik');
var colorInput = document.getElementById('kolor');

function setFontSize() {
  // Check if the font size input is 0, and if so, set it to 1
  if (parseFloat(fontSizeInput.value) === 0) {
    fontSizeInput.value = 1;
  }

  const fontSize = fontSizeInput.value + 'vh';
  myTextarea.style.fontSize = fontSize;

  // Calculate the number of rows based on the font size
  const defaultFontSize = 2; // Set your default font size here
  const defaultRows = 15;   // Set your default number of rows here
  const calculatedRows = Math.floor(defaultRows * (fontSizeInput.value / defaultFontSize));

  // Set the calculated number of rows for the textarea
  myTextarea.setAttribute('rows', calculatedRows);
  
  // Set a fixed number of columns
  myTextarea.setAttribute('cols', 40);
  
  // Set width to always have the same x-axis size as 169vh
  myTextarea.style.width = '169vh';
  console.log('Font size:', fontSize);
  console.log('Calculated rows:', calculatedRows);
}

function bold() {
  document.getElementById("notatnik").style.fontWeight = "bolder";
}
function italic() {
    document.getElementById("notatnik").style.fontStyle = "italic";
  }
  function resetsize(){
    document.getElementById("wielkosc").value = "3";
    document.getElementById("notatnik").style.fontSize = "3vh";
  }
function normal1(){
document.getElementById("notatnik").style.fontWeight = "normal";
document.getElementById("notatnik").style.color = "white";
document.getElementById("notatnik").style.textDecoration = "none";
document.getElementById("notatnik").style.fontStyle = "normal";
document.getElementById("kolor").value = "#ffffff";


}
function resetfont(){
  document.getElementById("notepad").style.fontFamily = "Pixel";
  document.getElementById("notatnik").style.fontFamily = "arial";
}
function normal() {
  document.getElementById("notatnik").value = "";
}

function color() {
    var kolor = colorInput.value;
    myTextarea.style.color = kolor;
}

function underline() {
  document.getElementById("notatnik").style.textDecoration = "underline";
}

function overline() {
  document.getElementById("notatnik").style.textDecoration = "overline";
}

function through() {
  document.getElementById("notatnik").style.textDecoration = "line-through";
}

function impact() {
  document.getElementById("notatnik").style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
}
function comicsans() {
  document.getElementById("notatnik").style.fontFamily = "Comic Sans MS, Comic Sans";
}

function times() {
  document.getElementById("notatnik").style.fontFamily = "'Times New Roman', Times, serif";
}

function outwrite() {
  document.getElementById("notatnik").style.fontFamily = "Outwrite";
}

function pixel() {
  document.getElementById("notatnik").style.fontFamily = "Pixel";
}
function chicory() {
  document.getElementById("notatnik").style.fontFamily = "Chicory";
}
function mario() {
  document.getElementById("notatnik").style.fontFamily = "Mario";
}
function pokemon() {
  document.getElementById("notatnik").style.fontFamily = "Pokemon";
}
function tasm() {
  document.getElementById("notatnik").style.fontFamily = "Tasm";
}
function snow() {
  document.getElementById("notatnik").style.fontFamily = "Snowtop";
}

function wob() {
  document.getElementById("notatnik").style.fontFamily = "Whiteonblack";
}
function doctorpunk() {
  document.getElementById("notatnik").style.fontFamily = "Doctorpunk";
}

function floral() {
  document.getElementById("notatnik").style.fontFamily = "Floral";
}

function harry() {
  document.getElementById("notatnik").style.fontFamily = "Harry";
}

function greenscreen(){
  document.getElementById("notatnik").style.backgroundColor = "rgb(0, 255, 13)";
  document.getElementById("writing_area").style.backgroundColor = "rgb(0, 255, 13)";
}

function bluescreen(){
  document.getElementById("notatnik").style.backgroundColor = "rgb(0, 132, 255)";
  document.getElementById("writing_area").style.backgroundColor = "rgb(0, 132, 255)";
}

function resetbackground(){
  document.getElementById("notatnik").style.backgroundColor = "#505050";
  document.getElementById("writing_area").style.backgroundColor = "#505050";
}

// Event listener for manual font size changes
fontSizeInput.addEventListener('input', setFontSize);
colorInput.addEventListener('input', color);


function saveTextAsFile() {
    var textToWrite = document.getElementById('notatnik').value;
    var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
    var fileNameToSaveAs = "Note.txt"; //filename.extension
  
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      // Firefox requires the link to be added to the DOM before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
  
    downloadLink.click();
    document.getElementById("notatnik").value = "";
  }
  
  var button = document.getElementById('save');
  button.addEventListener('click', saveTextAsFile);
  
  function destroyClickedElement(event) {
    // remove the link from the DOM
    document.body.removeChild(event.target);
  }