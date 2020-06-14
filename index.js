var myAudio = new Audio();

function Jukebox () {

	this.currentSongNumber = 0;
	this.songList = [];

	this.addSong = function (mySong) {
		this.songList.push(mySong);
	} 

	this.playSong = function () {
		myAudio.src = this.songList[this.currentSongNumber];
		let playButton = document.getElementById("playButton");
		playButton.addEventListener("click", function () {
			myAudio.play();
			/* Format song name – remove unnecessary characters in file path/name */
			document.getElementById("displayCurrentSong").innerHTML = decodeURI(myAudio.src).split("/").pop();
		});
	}

	this.pauseSong = function () {
		let pauseButton = document.getElementById("pauseButton");
		pauseButton.addEventListener("click", function () {
			myAudio.pause();
		});
	}

	this.nextSong = function () {
		var self = this;
		let nextButton = document.getElementById("nextButton");
		nextButton.addEventListener("click", function () {
			if (self.currentSongNumber < self.songList.length - 1) {
				self.currentSongNumber++;
			} else {
				self.currentSongNumber = 0;
			}
			myAudio.src = self.songList[self.currentSongNumber];
			myAudio.play();
			document.getElementById("displayCurrentSong").innerHTML = decodeURI(myAudio.src).split("/").pop();
		});
	}

	this.previousSong = function () {
		var self = this;
		let nextButton = document.getElementById("previousButton");
		nextButton.addEventListener("click", function () {
			if (self.currentSongNumber > 0) {
				self.currentSongNumber--;
			} else {
				self.currentSongNumber = self.songList.length - 1;
			}
			myAudio.src = self.songList[self.currentSongNumber];
			myAudio.play();
			document.getElementById("displayCurrentSong").innerHTML = decodeURI(myAudio.src).split("/").pop();
		});
	}

	this.playNextSongAfterSongEnds = function () {
		var self = this;
		myAudio.onended = function () {
			if (self.currentSongNumber < self.songList.length - 1) {
				self.currentSongNumber++;
			} else {
				self.currentSongNumber = 0;
			}
			myAudio.src = self.songList[self.currentSongNumber];
			myAudio.play();
			document.getElementById("displayCurrentSong").innerHTML = decodeURI(myAudio.src).split("/").pop();
		}
	};

	this.randomizeSongOrder = function () {
		var self = this;
		let shuffleButton = document.getElementById("shuffleSongs");
		shuffleButton.addEventListener("click", function () {
			for (let i = self.songList.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * i)
				const temp = self.songList[i]
				self.songList[i] = self.songList[j];
				self.songList[j] = temp;
			}
			myAudio.src = self.songList[self.currentSongNumber];
			myAudio.play();
			document.getElementById("displayCurrentSong").innerHTML = decodeURI(myAudio.src).split("/").pop();
		});
	}

}

let jukeBox1 = new Jukebox();
// Users can add more songs with the "addSong" function below...
jukeBox1.addSong("audio/Tangerine.mp3");
jukeBox1.addSong("audio/Acoustic Meditation.mp3");
jukeBox1.addSong("audio/Alison.mp3");
jukeBox1.addSong("audio/12 Mornings.mp3");
jukeBox1.addSong("audio/BeBop 25.mp3");
jukeBox1.addSong("audio/Feels Good 2B.mp3");
jukeBox1.addSong("audio/Big Blues.mp3");
jukeBox1.addSong("audio/Code Blue.mp3");
jukeBox1.playSong();
jukeBox1.pauseSong();
jukeBox1.previousSong();
jukeBox1.nextSong();
jukeBox1.playNextSongAfterSongEnds();
jukeBox1.randomizeSongOrder();








