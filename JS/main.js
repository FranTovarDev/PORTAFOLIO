//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
whats();
};

function scrollFunction() {
if (
document.body.scrollTop > 500 ||
document.documentElement.scrollTop > 500
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}


function whats () {
    var e,t,n,a;window.MyAliceWebChat||((t=document.createElement("div")).id="myAliceWebChat",
    (n=document.createElement("script")).type="text/javascript",n.async=!0,n.src="https://widget.myalice.ai/index.js",
    (a=(e=document.body.getElementsByTagName("script"))[e.length-1]).parentNode.insertBefore(n,a),a.parentNode.insertBefore(t,a),
    n.addEventListener("load",(function(){MyAliceWebChat.init({selector:"myAliceWebChat",number:"50687798110",message:"",
    color:"#25D366",channel:"wa",boxShadow:"medium",text:"Whatsapp",theme:"light",position:"left",mb:"110px",mx:"20px",
    radius:"20px"})})))
};