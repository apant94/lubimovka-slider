const videos = document.querySelectorAll('.video__slider-item');

function findVideo() {
  for(let i = 0; i < videos.length; i++ ) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  const videoItem = video.querySelector('.video__item');
  const videoLink = video.querySelector('.video__slider-link');
  const videoBtn = video.querySelector('.video__item-button');
  const id = parseMediaURL(videoItem);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);
    videoLink.remove();
    videoBtn.remove();
    video.appendChild(iframe);
  });

  videoLink.removeAttribute('href');
};

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  const url = media.src;
  const match = url.match(regexp);

  return match[1];
};

function createIframe(id) {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__item');

  return iframe;
};

function generateURL(id) {
  const query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
};

findVideo();