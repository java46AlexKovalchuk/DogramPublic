console.log("script launched");
let detailsImage = document.querySelector(".details-images"); 
let detailsTitle = document.querySelector(".details-title");  
let mainContentEl = document.querySelector(".main-content");
let selectedItem;
let centrSound = document.querySelector(".central-sound");
let anchors = document.querySelectorAll(".thumbnails-anchor"); //all html elements belonging to the class thumbnails-anchor
for(let i = 0; i < anchors.length; i++)  {
    anchors[i].addEventListener("click", function(event) {
    event.preventDefault(); //cancelling default behavior of anchor element hitting
    showDetails();
    setDetails(anchors[i]); //setDetail function call with passing reference to appropriate anchor
    })
}


function setDetails(anchor) {
    console.log("anchor element was pressed", anchor);
    let hrefValue = anchor.getAttribute("href");    
    detailsImage.setAttribute("src", hrefValue);

    anchor.parentElement.classList.add("selected");
    if(selectedItem){
        selectedItem.classList.remove("selected")
    }
    selectedItem = anchor.parentElement;
    //get element with thumbnail-title inside the given anchor
    let thumbnailsTitleSelector = `[href="${hrefValue}"] .thumbnails-title`;
    let thumbnailsTitleEl = document.querySelector (thumbnailsTitleSelector);
    //dog name exist inside thumbnailsTitleEl.textContent
    detailsTitle.textContent = `${thumbnailsTitleEl.textContent}: ${anchor.getAttribute('data-details-title')} `;
    
    let thumbnailsSoundSelector = `[href="${hrefValue}"] .thumbnails-sound`;
    let thumbnailsSoundElement = document.querySelector(thumbnailsSoundSelector);
    
    
    centrSound.setAttribute("src", thumbnailsSoundElement.getAttribute("src"));


    centrSound.muted = false;
    setTimeout(addMute, 900);
    
    function addMute() {
        centrSound.muted = true;
    }
}   

function showDetails()  {
    mainContentEl.classList.remove('hidden');
    detailsImage.parentElement.classList.add('is-tiny');
    setTimeout(removeIsTiny, 1);
    
   
}

function removeIsTiny() {
    detailsImage.parentElement.classList.remove('is-tiny'); 
}

function hideDetails() {
   mainContentEl.classList.add('hidden');
   if(selectedItem){
   selectedItem.classList.remove("selected");
   }
} 
   

