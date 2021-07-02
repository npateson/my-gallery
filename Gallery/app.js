


let images = document.querySelectorAll("img");
 images.forEach(function(image){
   image.addEventListener("mouseover", changeImage)
   function changeImage(){
    document.querySelector("#display-div").style.backgroundImage = `url(\"${image.src}\")`;
   let displayText = image.getAttribute("alt");
   let text = document.querySelector("h4");
   text.innerHTML = displayText;
   text.style.color = "white";
   text.style.fontSize = "2em";
    document.querySelector("body").removeEventListener("mouseover", changeImage);
}
 })

