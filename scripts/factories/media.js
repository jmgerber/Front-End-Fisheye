function mediaFactory(data, index) {
  const { title, image, video, likes } = data;

  const picture = `./assets/photographers/photos/${image}`;
  const videoSrc = `./assets/photographers/photos/${video}`;
  let like = likes;

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
    const photoCardLikes = document.createElement('div');
    const photoCardLikesCounter = document.createElement('p');
    const photoCardLikesHeart = document.createElement('div');
    photoCardLikesHeart.innerHTML = `
    <svg class="heart" viewBox="0 0 241.59736 220.05746">
      <g transform="translate(-175.32265,-1696.4765)">
          <path d="m 243.45243,1708.9786 c -26.9341,0.2312 -51.58009,21.4767 -55.08178,48.2939 -3.11346,23.844 7.32949,47.3995 23.96855,64.2142 27.5148,27.8054 61.22631,49.7939 83.44686,82.5473 4.39089,-4.6889 9.27818,-12.0655 14.22742,-17.529 25.22951,-27.8509 58.1653,-48.0133 80.86454,-78.1545 17.17546,-22.8065 19.10279,-58.1138 -0.53802,-80.4051 -18.24975,-20.7125 -51.76012,-25.1712 -74.36972,-9.2543 -8.22594,5.791 -15.27469,13.3707 -19.93251,22.3123 -10.05314,-19.3195 -30.53412,-32.2142 -52.58534,-32.0248 z" />
      </g>
    </svg>`
    photoCardLikesHeart.classList.add('like-btn');
    photoCardLikesCounter.textContent = like;
    photoCardLikes.classList.add('photo-card-likes');

    // Event lors d'un like/dislike
    photoCardLikesHeart.addEventListener('click', function(){
      if (this.classList.contains('wished')) {
        this.classList.remove('wished');
        updateTotalLikes('DEC');
        like--
        photoCardLikesCounter.textContent = like;
    } else {
        this.classList.add('wished');
        updateTotalLikes('INC');
        like++
        photoCardLikesCounter.textContent = like;
    }
    })

    photoCardLikes.appendChild(photoCardLikesCounter);
    photoCardLikes.appendChild(photoCardLikesHeart);

    photoCardInfos.appendChild(photoCardTitle);
    photoCardInfos.appendChild(photoCardTitle);
    photoCardInfos.appendChild(photoCardLikes);

    photoCard.appendChild(mediaCard);
    photoCard.appendChild(photoCardInfos);

    return (photoCard)
  }
  return { getPhotoCardDOM }
}