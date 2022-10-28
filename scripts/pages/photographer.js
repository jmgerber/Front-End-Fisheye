// Affichage des infos du photographe
async function displayPhotographerData(photographer) {
  const photographersSection = document.querySelector(".photograph-header");
  
  const photographerModel = photographerFactory(photographer);
  const singleUserDOM = photographerModel.getSingleUserDOM();
  photographersSection.appendChild(singleUserDOM.photographerInfos);
  photographersSection.appendChild(singleUserDOM.photographerPhoto);
  photographersSection.appendChild(singleUserDOM.photographerPriceAndLikes);
};

// Affichage des medias (photos/vidéos) du photographe
async function displayPhotographerMedias(medias) {
  const photographerMedias = document.querySelector(".photograph-medias");

  medias.forEach((media, index) => {
    const photoCardModel = mediaFactory(media, index);
    const photoCardDOM = photoCardModel.getPhotoCardDOM();
    photographerMedias.appendChild(photoCardDOM);
  });
}

// Création du caroussel pour les médias de la page
async function initMediasCarousel(medias) {
  const slider = document.querySelector(".slider");

  medias.forEach((media,index) => {
    const mediaModel = carouselFactory(media, index);
    const slideDOM = mediaModel.getSlideDOM();
    slider.appendChild(slideDOM);
  });
}

async function initSinglePhotographer() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographers();
  // Récupère l'id dans l'URL
  const params = (new URL(document.location)).searchParams;
  const idParam = params.get('id');
  // Isole les données du photographe
  const photographer = photographers.find(photographer => photographer.id == idParam);
  const medias = media.filter(media => media.photographerId == idParam);
  // Fonctions d'affichage du photographe, de ses médias, et du caroussel
  displayPhotographerData(photographer);
  displayPhotographerMedias(medias);
  initMediasCarousel(medias);
  // Calcule le nombre total de likes du photographe
  getTotalLikes(medias);

  initSorter(medias);
};

initSinglePhotographer();