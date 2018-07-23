// Get the modal
var modal = document.getElementById('myModal');
firebase.database().ref().child('PortFolioDataa').child('TotalMainPage').child(getFullDate()).set("");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var SDimg1 = document.getElementById('myImg1');
var SDimg2 = document.getElementById('myImg2');
var SDimg3 = document.getElementById('myImg3');
var SDimg4 = document.getElementById('myImg4');
var SDimg5 = document.getElementById('myImg5');
var SDimg6 = document.getElementById('myImg6');
var SDimg7 = document.getElementById('myImg7');
var SDimg8 = document.getElementById('myImg8');

var sdAndroid1 = document.getElementById('sdAndroid1');
var sdAndroid2 = document.getElementById('sdAndroid2');

var umangAndroid1 = document.getElementById('umangAndroid1');
var umangAndroid2 = document.getElementById('umangAndroid2');
var umangAndroid3 = document.getElementById('umangAndroid3');
var umangAndroid4 = document.getElementById('umangAndroid4');
var umangAndroid5 = document.getElementById('umangAndroid5');
var umangAndroid6 = document.getElementById('umangAndroid6');

var sadhnaAndroid1 = document.getElementById('sadhnaAndroid1');
var sadhnaAndroid2 = document.getElementById('sadhnaAndroid2');
var sadhnaAndroid3 = document.getElementById('sadhnaAndroid3');


var vaccIOS1 = document.getElementById('vaccIOS1');
var vaccIOS2 = document.getElementById('vaccIOS2');
var vaccIOS3 = document.getElementById('vaccIOS3');

var folkWeb1 = document.getElementById('folkWeb1');
var folkWeb2 = document.getElementById('folkWeb2');
var folkWeb3 = document.getElementById('folkWeb3');
var folkWeb4 = document.getElementById('folkWeb4');

var attWeb1 = document.getElementById('attWeb1');
var attWeb2 = document.getElementById('attWeb2');
var attWeb3 = document.getElementById('attWeb3');
var attWeb4 = document.getElementById('attWeb4');

var attAndroid1 = document.getElementById('attAndroid1');
var attAndroid2 = document.getElementById('attAndroid2');
var attAndroid3 = document.getElementById('attAndroid3');
var attAndroid4 = document.getElementById('attAndroid4');

var acc1 = document.getElementById('acc1');
var acc2 = document.getElementById('acc2');
var acc3 = document.getElementById('acc3');
var acc4 = document.getElementById('acc4');
var acc5 = document.getElementById('acc5');
var acc6 = document.getElementById('acc6');
var acc7 = document.getElementById('acc7');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

SDimg1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('SDimg1').child(getFullDate()).set("");
}

SDimg2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('SDimg2').child(getFullDate()).set("");
}

SDimg3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('SDimg3').child(getFullDate()).set("");

}

SDimg4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('SDimg4').child(getFullDate()).set("");
}

SDimg5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('SDimg5').child(getFullDate()).set("");
}

SDimg6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('SDimg6').child(getFullDate()).set("");
}

SDimg7.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('SDimg7').child(getFullDate()).set("");
}

SDimg8.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('SDimg8').child(getFullDate()).set("");
}

sdAndroid1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('sdAndroid1').child(getFullDate()).set("");
}

sdAndroid2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('sdAndroid2').child(getFullDate()).set("");
}

umangAndroid1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('umangAndroid1').child(getFullDate()).set("");
}

umangAndroid2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('umangAndroid2').child(getFullDate()).set("");
}

umangAndroid3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('umangAndroid3').child(getFullDate()).set("");
}
umangAndroid4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('umangAndroid4').child(getFullDate()).set("");
}
umangAndroid5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('umangAndroid5').child(getFullDate()).set("");
}
umangAndroid6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('umangAndroid6').child(getFullDate()).set("");
}

sadhnaAndroid1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('sadhnaAndroid1').child(getFullDate()).set("");
}

sadhnaAndroid2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('sadhnaAndroid2').child(getFullDate()).set("");
}

sadhnaAndroid3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('sadhnaAndroid3').child(getFullDate()).set("");
}

vaccIOS1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('vaccIOS1').child(getFullDate()).set("");
}
vaccIOS2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('vaccIOS2').child(getFullDate()).set("");
}

vaccIOS3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('vaccIOS3').child(getFullDate()).set("");
}

folkWeb1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('folkWeb1').child(getFullDate()).set("");
}


folkWeb2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('folkWeb2').child(getFullDate()).set("");
}


folkWeb3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('folkWeb3').child(getFullDate()).set("");
}

folkWeb4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('folkWeb4').child(getFullDate()).set("");
}

attWeb1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('attWeb1').child(getFullDate()).set("");
}

attWeb2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('attWeb2').child(getFullDate()).set("");
}

attWeb3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('attWeb3').child(getFullDate()).set("");
}

attWeb4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('attWeb4').child(getFullDate()).set("");
}

attAndroid1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('attAndroid1').child(getFullDate()).set("");
}


attAndroid2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('attAndroid2').child(getFullDate()).set("");
}


attAndroid3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('attAndroid3').child(getFullDate()).set("");
}

attAndroid4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('attAndroid4').child(getFullDate()).set("");
}

acc1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('mAccandroid1').child(getFullDate()).set("");
}

acc2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('mAccandroid2').child(getFullDate()).set("");
}

acc3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('mAccandroid3').child(getFullDate()).set("");
}

acc4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('mAccandroid4').child(getFullDate()).set("");
}

acc5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('mAccandroid5').child(getFullDate()).set("");
}

acc6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('mAccandroid6').child(getFullDate()).set("");
}

acc7.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    firebase.database().ref().child('PortFolioData').child('mAccandroid7').child(getFullDate()).set("");
}

function getFullDate(){
	return (new Date() + "");
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


















