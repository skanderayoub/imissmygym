let playingAudio = new Array();

function checkPause(){
	if (playingAudio.length==0) {
		document.getElementById("pauseAll").parentNode.className="massPause hidden";
	} else{
		document.getElementById("pauseAll").parentNode.className="massPause";
	}
}

checkPause();

//play audio

function playSound(audioNum) {
	//let sound=document.getElementById(audioNum);	
	let sound=document.querySelectorAll('[id="'+audioNum+'"]');
	
	sound.forEach(elements => {
		if(elements.paused){
			elements.play();
			elements.parentNode.className="audio pressed";
			playingAudio.push(audioNum);
			checkPause();
		} else {
			elements.pause();
			elements.parentNode.className="audio unpressed";
			playingAudio.splice(playingAudio.indexOf(audioNum), 1);
			checkPause();
		}
	});
}

//volume

function changeVolume(audioNum, val) {
	let sound=document.querySelectorAll('[id="'+audioNum+'"]');

	sound.forEach(elements => {
		elements.volume = val;
		if (val==0) {
			elements.parentNode.querySelector("#vol").className="volume-control muted";
		} else {
			elements.parentNode.querySelector("#vol").className="volume-control";
		}
	});
}

//pause all

function pauseAll() {
	if (document.getElementById("pauseAll").checked) {
		for (let number of playingAudio) {
			document.querySelectorAll('[id="'+number+'"]').forEach(elements => {
				elements.pause();
				elements.parentNode.className="audio unpressed";
			});			
			document.getElementById("pauseNotice").innerHTML="Resume &nbsp;";
		}
	} else {
		for (let number of playingAudio) {
			document.querySelectorAll('[id="'+number+'"]').forEach(elements => {
				elements.play();
				elements.parentNode.className="audio pressed";
			});
			document.getElementById("pauseNotice").innerHTML="Pause all &nbsp;";
		}
	}
}

//modal

var modal = document.getElementById("myModal");
var btn = document.getElementById("modalButton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

