function mediaSorter(medias) {
  const mediasData = medias;

  function sortByDate() {
    const sortedData = mediasData.sort((a,b) => {
      const dateA = a.date;
      const dateB = b.date;
      if (dateA < dateB) {
        return -1
      } 
      if (dateA > dateB) {
        return 1
      }
      // if dates are equal
      return 0
    })
    return sortedData
  }

  function sortByPopularity() {
    const sortedData = mediasData.sort((a,b) => b.likes - a.likes)
    return sortedData
  }

  function sortByTitle() {
    const sortedData = mediasData.sort((a,b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1
      } 
      if (titleA > titleB) {
        return 1
      }
      // if titles are equal
      return 0
    })
    return sortedData
  }

  return { sortByPopularity , sortByDate , sortByTitle }
}

async function initSorter(medias) {
  const photographerMedias = document.querySelector(".photograph-medias");
  const slider = document.querySelector(".slider");
  const formSelect = document.querySelector('.sorter-form');
  const sorter = mediaSorter(medias);
  
  formSelect.addEventListener('change', function (event) {
    const sortBy = event.target.value;
    let sortedData
    if (sortBy === 'date') {
      sortedData = sorter.sortByDate();
    } else if (sortBy === 'popularity') {
      sortedData = sorter.sortByPopularity();
    } else if (sortBy === 'title') {
      sortedData = sorter.sortByTitle();
    } else {
      console.log("Un problème a eu lieu lors du tri");
    }

    // Mise à jour des medias
    photographerMedias.innerHTML = "";
    sortedData.forEach((media, index) => {
      const photoCardModel = mediaFactory(media, index);
      const photoCardDOM = photoCardModel.getPhotoCardDOM();
      photographerMedias.appendChild(photoCardDOM);
    });

    // Mise à jour du caroussel
    slider.innerHTML = "<img src='assets/icons/close_red.svg' onclick='closeLightbox()' id='lightbox-close-btn' tabindex='0' alt='' aria-label='Bouton de fermeture' />";
    sortedData.forEach((media,index) => {
      const mediaModel = carouselFactory(media, index);
      const slideDOM = mediaModel.getSlideDOM();
      slider.appendChild(slideDOM);
    });
  })
}
