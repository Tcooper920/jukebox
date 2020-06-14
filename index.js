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
			document.getElementById("displayCurrentSong").innerHTML = myAudio.src.split("/").pop();
			var self = this;
			myAudio.onended = function () {
				if (self.currentSongNumber < self.songList.length - 1) {
					self.currentSongNumber++;
				} else {
					self.currentSongNumber = 0;
				}
				myAudio.src = self.songList[self.currentSongNumber];
				myAudio.play();
				document.getElementById("displayCurrentSong").innerHTML = myAudio.src.split("/").pop();
			};
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
			document.getElementById("displayCurrentSong").innerHTML = myAudio.src.split("/").pop();
			myAudio.onended = function () {
				if (self.currentSongNumber < self.songList.length - 1) {
					self.currentSongNumber++;
				} else {
					self.currentSongNumber = 0;
				}
				myAudio.src = self.songList[self.currentSongNumber];
				myAudio.play();
				document.getElementById("displayCurrentSong").innerHTML = myAudio.src.split("/").pop();
			};
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
			document.getElementById("displayCurrentSong").innerHTML = myAudio.src.split("/").pop();
			myAudio.onended = function () {
				if (self.currentSongNumber < self.songList.length - 1) {
					self.currentSongNumber++;
				} else {
					self.currentSongNumber = 0;
				}
				myAudio.src = self.songList[self.currentSongNumber];
				myAudio.play();
				document.getElementById("displayCurrentSong").innerHTML = myAudio.src.split("/").pop();
			};
		});
	}

	this.randomizeSongOrder = function () {

	}

}

let jukeBox1 = new Jukebox();
jukeBox1.addSong("audio/Tangerine.mp3");
jukeBox1.addSong("audio/Tangerine-2.mp3");
jukeBox1.addSong("audio/Tangerine-3.mp3");
jukeBox1.playSong();
jukeBox1.pauseSong();
jukeBox1.previousSong();
jukeBox1.nextSong();




