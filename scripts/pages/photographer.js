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

  medias.forEach((media) => {
    const photoCardModel = mediaFactory(media);
    const photoCardDOM = photoCardModel.getPhotoCardDOM();
    photographerMedias.appendChild(photoCardDOM);
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
  // Fonctions d'affichage du photographe et de ses médias
  displayPhotographerData(photographer);
  displayPhotographerMedias(medias);
};

initSinglePhotographer();