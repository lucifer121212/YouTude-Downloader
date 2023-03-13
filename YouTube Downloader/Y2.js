const form = document.querySelector('form');
const urlInput = document.querySelector('#url');
const downloadBtn = document.querySelector('#download-btn');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const url = urlInput.value;
	const videoIdMatch = url.match(/(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]{11})/);
	const videoId = videoIdMatch[1];
	console.log(videoId);
});
