/*******ANIMATIONS */
const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
  .from("nav", { duration: 1, ease: "power3.out", y: -500 })
  .from('.logo', { opacity: 0, stagger: .5 })
  .from('.title', { opacity: 0, stagger: .5 })
  .from('#noteTXT', { opacity: 0, stagger: .5 })
  .from('.button', { opacity: 0, stagger: .5 })
  .from('#space', { opacity: 0, stagger: .5 })
  .from('#hide', { opacity: 0, stagger: .5 })
  .from(".links" , { duration: .5, ease: "power3.out", y: 500 })
  .from('.link', { opacity: 0, stagger: .5 })
/******ADD/EDIT/DELETE */
var c = 0
var key = ""

function addNote(){
  
    noteVal = document.getElementById("noteTXT").value
    c++
    key="a"+c
    if(noteVal ==""){
        alert("Add a Note")
    }else{
        document.getElementById("hide").style.display="none"
        document.getElementById("space").innerHTML+="<textarea oncontextmenu='changeColor(this)' ondblclick='deleteNOTE(this)' class='note noteVal' id='"+key+"'>"+noteVal+"</textarea>"
        console.log(key)
        document.getElementById("noteTXT").value=""
        
    }
   var note1 = document.getElementById(key)
      
        note1.classList.add("animate__animated")
        note1.classList.add("animate__rotateInUpLeft")

    
    
}

document.getElementById("noteColor").value="#ffffff"

function deleteNOTE(txtID){
   var id= txtID.id
   document.getElementById(id).style.backgroundColor="gray"
    document.getElementById(id).remove()
}

function changeColor(txtID){
    var id= txtID.id
    var color=document.getElementById("noteColor").value
    document.getElementById(id).style.backgroundColor=color
    document.getElementById("noteColor").value="#ffffff"

}

/******pooper******* */
const button = document.querySelector('#butto');
const tooltip = document.querySelector('#tooltip');

const popperInstance = Popper.createPopper(button, tooltip, {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8],
      },
    },
  ],
});

function show() {
  // Make the tooltip visible
  tooltip.setAttribute('data-show', '');

  // Enable the event listeners
  popperInstance.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: true },
    ],
  }));

  // Update its position
  popperInstance.update();
}

function hide() {
  // Hide the tooltip
  tooltip.removeAttribute('data-show');

  // Disable the event listeners
  popperInstance.setOptions((options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: 'eventListeners', enabled: false },
    ],
  }));
}

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach((event) => {
  button.addEventListener(event, show);
});

hideEvents.forEach((event) => {
  button.addEventListener(event, hide);
});

