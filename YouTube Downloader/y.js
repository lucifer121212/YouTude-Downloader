downloadBtn.addEventListener('click', () => {
	const url = urlInput.value;
	const videoIdMatch = url.match(/(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]{11})/);
	const videoId = videoIdMatch[1];
	const downloadUrl = `https://www.ssyoutube.com/watch?v=${videoId}`;
	window.open(downloadUrl);
});
