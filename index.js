/* jukebox - 6/16/20 */
/* Thomas Cooper */

var myAudio = new Audio();

function Jukebox () {

	this.currentSongNumber = 0; /* counter for current song index */ 
	this.songList = []; /* array of songs in jukebox */
	this.allButtons = document.getElementsByClassName("button");
	
	/* method to push new songs into array */
	this.addSong = function (mySong) {
		this.songList.push(mySong);
	} 

	this.playSong = function () { 
		var self = this;
		myAudio.src = this.songList[this.currentSongNumber]; /* set current song at counter index */
		let playButton = document.getElementById("playButton");
		playButton.addEventListener("click", function () {
			myAudio.play();
			/* format song name – remove unnecessary characters in file path/name */
			document.getElementById("displayCurrentSong").innerHTML = "<span style='color: #b5b1b1;'> Track " + (self.currentSongNumber + 1) + ": </span>" + decodeURI(myAudio.src).split("/").pop();
			/* set all buttons back to default color */
			for (let i = 0; i < self.allButtons.length; i++) {
				self.allButtons[i].style.backgroundColor = "#60dab9";
			}
			/* set active button's color to dark green */
			playButton.style.backgroundColor = "#54c5a7";
		});
	}

	this.pauseSong = function () {
		var self = this;
		let pauseButton = document.getElementById("pauseButton");
		pauseButton.addEventListener("click", function () {
			myAudio.pause();
			/* set all buttons back to default color */
			for (let i = 0; i < self.allButtons.length; i++) {
				self.allButtons[i].style.backgroundColor = "#60dab9";
			}
			/* set active button's color to dark green */
			pauseButton.style.backgroundColor = "#54c5a7";
		});
	}

	this.nextSong = function () {
		var self = this;
		let nextButton = document.getElementById("nextButton");
		nextButton.addEventListener("click", function () {
			/* play next song or move back to first song if at end of song list */
			if (self.currentSongNumber < self.songList.length - 1) { 
				self.currentSongNumber++;
			} else {
				self.currentSongNumber = 0;
			}
			myAudio.src = self.songList[self.currentSongNumber];
			myAudio.play();
			/* format song name – remove unnecessary characters in file path/name */
			document.getElementById("displayCurrentSong").innerHTML = "<span style='color: #b5b1b1;'> Track " + (self.currentSongNumber + 1) + ": </span>" + decodeURI(myAudio.src).split("/").pop();
			/* set all buttons back to default color */
			for (let i = 0; i < self.allButtons.length; i++) {
				self.allButtons[i].style.backgroundColor = "#60dab9";
			}
			/* set active button's color to dark green */
			nextButton.style.backgroundColor = "#54c5a7";
		});
	}

	this.previousSong = function () {
		var self = this;
		let previousButton = document.getElementById("previousButton");
		previousButton.addEventListener("click", function () {
			/* play previous song or move to the last song if at the first song in the list */
			if (self.currentSongNumber > 0) {
				self.currentSongNumber--;
			} else {
				self.currentSongNumber = self.songList.length - 1;
			}
			myAudio.src = self.songList[self.currentSongNumber];
			myAudio.play();
			/* format song name – remove unnecessary characters in file path/name */
			document.getElementById("displayCurrentSong").innerHTML = "<span style='color: #b5b1b1;'> Track " + (self.currentSongNumber + 1) + ": </span>" + decodeURI(myAudio.src).split("/").pop();
			/* set all buttons back to default color */
			for (let i = 0; i < self.allButtons.length; i++) {
				self.allButtons[i].style.backgroundColor = "#60dab9";
			}
			/* set active button's color to dark green */
			previousButton.style.backgroundColor = "#54c5a7";
		});
	}

	this.playNextSongAfterSongEnds = function () {
		var self = this;
		/* execute when current song ends */
		myAudio.onended = function () {
			if (self.currentSongNumber < self.songList.length - 1) {
				self.currentSongNumber++;
			} else {
				self.currentSongNumber = 0;
			}
			myAudio.src = self.songList[self.currentSongNumber];
			myAudio.play();
			/* format song name – remove unnecessary characters in file path/name */
			document.getElementById("displayCurrentSong").innerHTML = "<span style='color: #b5b1b1;'> Track " + (self.currentSongNumber + 1) + ": </span>" + decodeURI(myAudio.src).split("/").pop();
		}
	};

	this.randomizeSongOrder = function () {
		var self = this;
		let shuffleButton = document.getElementById("shuffleSongs");
		shuffleButton.addEventListener("click", function () {
			/* randomly select songs by their indexes and set the previous array indexes to equal the new randomized indexes */
			for (let i = self.songList.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * i)
				const temp = self.songList[i]
				/* set current song order indexes to new randomized song indexes */
				self.songList[i] = self.songList[j];
				self.songList[j] = temp;
			}
			myAudio.src = self.songList[self.currentSongNumber];
			myAudio.play();
			/* format song name – remove unnecessary characters in file path/name */
			document.getElementById("displayCurrentSong").innerHTML = "<span style='color: #b5b1b1;'> Track " + (self.currentSongNumber + 1) + ": </span>" + decodeURI(myAudio.src).split("/").pop();
			/* set all buttons back to default color */
			for (let i = 0; i < self.allButtons.length; i++) {
				self.allButtons[i].style.backgroundColor = "#60dab9";
			}
			/* set active button's color to dark green */
			shuffleButton.style.backgroundColor = "#54c5a7";
		});
	}

}

let jukeBox1 = new Jukebox();

/* preload a few songs into the new jukebox object */
let preloadedSongs = ["audio/Tangerine.mp3", "audio/Acoustic Meditation.mp3", "audio/Alison.mp3", "audio/12 Mornings.mp3", "audio/BeBop 25.mp3", "audio/Feels Good 2B.mp3", "audio/Big Blues.mp3", "audio/Code Blue.mp3"];

for (let i = 0; i < preloadedSongs.length; i++) {
	jukeBox1.addSong(preloadedSongs[i]);
}

// Users can add more songs with the "addSong" function below...
// jukeBox1.addSong();
jukeBox1.playSong();
jukeBox1.pauseSong();
jukeBox1.previousSong();
jukeBox1.nextSong();
jukeBox1.playNextSongAfterSongEnds();
jukeBox1.randomizeSongOrder();



