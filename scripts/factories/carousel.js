function carouselFactory(data, index) {
  const { image, video, title } = data;

  const picture = `./assets/photographers/photos/${image}`;
  const videoSrc = `./assets/photographers/photos/${video}`;

  function getSlideDOM() {
    const mediaCard = document.createElement('div');
    mediaCard.classList.add('lightbox-slide');
    mediaCard.dataset.id = index;
    if (image){
      // bloc image
      const mediaCardImage = document.createElement('img');
      mediaCardImage.setAttribute('src', picture);
      mediaCardImage.setAttribute('alt', title);
      mediaCardImage.classList.add('media-card-image');
      mediaCard.appendChild(mediaCardImage);
    }
    else if (video){
      // bloc video
      const videoCard = document.createElement('video');
      videoCard.setAttribute('alt', title);
      videoCard.setAttribute('controls', '');
      const videoSource = document.createElement('source');
      videoSource.setAttribute('src', videoSrc);
      videoSource.setAttribute('type', 'video/mp4');
      videoCard.classList.add('media-card-video');
      videoCard.appendChild(videoSource);
      mediaCard.appendChild(videoCard);
    }
    const mediaCardTitle = document.createElement('h2');
    mediaCardTitle.textContent = title;
    mediaCardTitle.classList.add('media-card-title');

    mediaCard.appendChild(mediaCardTitle);
    return (mediaCard)
  }
  return { getSlideDOM }
}