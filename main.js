
dragElement(document.getElementById("sticker"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



class note{
  constructor(note) {
    this.note = note ;
    }
}
class notes {
  constructor(){
    this.notes = JSON.parse(localStorage.getItem('notes')); 
    if(this.notes == null){
      this.notes = [];
    }
  }
  addNote(newNote) {
    this.notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
let Note = new notes();
function addNotes() {
  let note = document.getElementById("note").value;

  let newNote = new note(note, new Date().toTimeString());
  notes.addNote(newNote);
}



function changeColor(color) { 
  document.getElementById('note').style.backgroundColor= color; 
} 

function toGray() { 
  changeColor('#DDDDDD'); 
} 
function toPink() { 
  changeColor('#F7B2C9'); 
} 
function toGreen() { 
  changeColor('#B8F8BA'); 
} 
function toCyan() { 
  changeColor('#B2DDF6'); 
} 

function hide(note) {
  document.getElementById(note).style.display = 'none';
}
  
