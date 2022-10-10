function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes, date } = data;

  const picture = `./assets/photographers/photos/${image}`;
  const videoSrc = `./assets/photographers/photos/${video}`;

  function getPhotoCardDOM() {
    const photoCard = document.createElement('div');
    photoCard.classList.add('photo-card');
    if (image){
      // bloc image
      const photoCardImage = document.createElement('img');
      photoCardImage.setAttribute('src', picture);
      photoCardImage.setAttribute('alt', title);
      photoCardImage.classList.add('photo-card-image');
      photoCard.appendChild(photoCardImage);
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
      photoCard.appendChild(videoCard);
    }
    // bloc title + likes
    const photCardInfos = document.createElement('div');
    photCardInfos.classList.add('photo-card-infos');
    // title
    const photoCardTitle = document.createElement('h2');
    photoCardTitle.textContent = title;
    photoCardTitle.classList.add('photo-card-title');
    // likes
    const photoCardLikes = document.createElement('span');
    photoCardLikes.textContent = `${likes} ♥`;
    photoCardLikes.classList.add('photo-card-likes');

    photCardInfos.appendChild(photoCardTitle);
    photCardInfos.appendChild(photoCardLikes);
    
    photoCard.appendChild(photCardInfos);

    return (photoCard)
  }
  return { getPhotoCardDOM }
}