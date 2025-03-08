document.querySelectorAll('.highlight').forEach(span => {
	let videoClone = document.getElementById('sharedVideo').cloneNode(true);
	videoClone.removeAttribute('id');
	span.appendChild(videoClone);
});
