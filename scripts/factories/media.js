function mediaFactory(data, index) {
  const { title, image, video, likes } = data;

  const picture = `./assets/photographers/photos/${image}`;
  const videoSrc = `./assets/photographers/photos/${video}`;

  function getPhotoCardDOM() {
    const photoCard = document.createElement('div');
    photoCard.classList.add('photo-card');
    photoCard.dataset.id = index;
    const mediaCard = document.createElement('div');
    mediaCard.classList.add('media-card');
    if (image){
      // bloc image
      const photoCardImage = document.createElement('img');
      photoCardImage.setAttribute('src', picture);
      photoCardImage.setAttribute('alt', title);
      photoCardImage.classList.add('photo-card-image');
      mediaCard.appendChild(photoCardImage);
    }
    else if (video){
      // bloc video
      const videoCard = document.createElement('video');
      videoCard.setAttribute('alt', title);
      const videoSource = document.createElement('source');
      videoSource.setAttribute('src', videoSrc);
      videoSource.setAttribute('type', 'video/mp4');
      videoCard.classList.add('video-card-image');
      videoCard.appendChild(videoSource);
      mediaCard.appendChild(videoCard);
    }
    mediaCard.addEventListener("click", function() {
      displayLightbox(index);
    })
    // bloc title + likes
    const photoCardInfos = document.createElement('div');
    photoCardInfos.classList.add('photo-card-infos');
    // title
    const photoCardTitle = document.createElement('h2');
    photoCardTitle.textContent = title;
    photoCardTitle.classList.add('photo-card-title');
    // likes
    const photoCardLikes = document.createElement('span');
    photoCardLikes.textContent = `${likes} ♥`;
    photoCardLikes.classList.add('photo-card-likes');
    photoCardInfos.appendChild(photoCardTitle);
    photoCardInfos.appendChild(photoCardTitle);
    photoCardInfos.appendChild(photoCardLikes);

    photoCard.appendChild(mediaCard);
    photoCard.appendChild(photoCardInfos);

    return (photoCard)
  }
  return { getPhotoCardDOM }
}