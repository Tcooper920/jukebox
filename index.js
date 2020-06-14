
function Jukebox () {

	// this.songList = [];

	// this.addSong = function (mySong) {
	// 	this.songList.push(mySong);
	// }

	this.pauseSong = function () {
		let pauseButton = document.getElementById("pause-btn");
		pauseButton.addEventListener("click", function () {
			myAudio.pause();
		});
	}

	this.playSong = function () {
		let playButton = document.getElementById("play-btn");
		playButton.addEventListener("click", function () {
			myAudio.play();
		});
	}

}

let jukeBox1 = new Jukebox();
jukeBox1.playSong();
jukeBox1.pauseSong();