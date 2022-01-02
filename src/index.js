console.log("script launched");
let detailsImage = document.querySelector(".details-images"); 
let detailsTitle = document.querySelector(".details-title");  
//let thumbnailsName = document.querySelectorAll(".thumbnails-title");
let anchors = document.querySelectorAll(".thumbnails-anchor"); //all html elements belonging to the class thumbnails-anchor
for(let i = 0; i < anchors.length; i++)  {
    anchors[i].addEventListener("click", function(event) {
    event.preventDefault(); //cancelling default behavior of anchor element hitting
    setDetails(anchors[i]); //setDetail function call with passing reference to appropriate anchor
    })
}
function setDetails(anchor) {
    console.log("anchor element was pressed", anchor);
    detailsImage.setAttribute("src", anchor.getAttribute("href"));
   // detailsTitle.textContent = anchor.getAttribute("data-details-title"  );
    detailsTitle.textContent = anchor.textContent+ ": " + anchor.getAttribute("data-details-title"  );
}