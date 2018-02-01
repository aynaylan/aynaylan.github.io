window.onscroll = function() { scrollFunction()};

function scrollFunction(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop>20){
		document.getElementById('myBtn').style.display="block";
	}else{
		document.getElementById("myBtn").style.display="none";
	}

}

//when the user clicks on the button, scroll to the top of the document
function topFunction(){
	document.body.scrollTop = 0;//for safari browers(Apple)
	document.documentElement.scrollTop = 0;//for chrome,firefox,IE and Opera
}

function newDoc() {
    window.location.assign("https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.252057057405!2d36.8068944!3d-1.2862321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d7e72fe6e5%3A0x7b34320441ee62ee!2sKencom+House!5e0!3m2!1sen!2ske!4v1517482292661");
}