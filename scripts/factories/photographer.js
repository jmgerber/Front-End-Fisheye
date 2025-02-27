function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `./assets/photographers/ID_photos/${portrait}`;

    function getUserCardDOM() {
      const article = document.createElement('article');
      const photographerCard = `
        <a href ="photographer.html?id=${id}" aria-label="Lien vers la page de ${name}">
          <img src="${picture}" alt="${name}" />
          <h2>${name}</h2>
        </a>
        <p class="card-city">${city}, ${country}</p>
        <p class="card-tagline">${tagline}</p>
        <p class="card-price">${price}€/jour</p>
      `
      article.innerHTML = photographerCard;
      return (article)
    }

    function getSingleUserDOM() {
      // Bloc avec les infos
      const photographerInfos = document.createElement('div');
      const photographerCard = `
        <h1 class="photographer-name">${name}</h1>
        <p class="photographer-city">${city}, ${country}</p>
        <p class="photographer-tagline">${tagline}</p>
      `
      photographerInfos.innerHTML = photographerCard;

      // Bloc de la photo
      const photographerPhoto = document.createElement('img');
      photographerPhoto.setAttribute('src', picture);
      photographerPhoto.setAttribute('alt', name);
      photographerPhoto.classList.add('photographer-idPhoto');
      
      // Bloc prix et total like
      const photographerPriceAndLikes = document.createElement('div');
      photographerPriceAndLikes.classList.add('price-likes-block');

      // Bloc total like
      const photographerLikes = document.createElement('div');
      photographerLikes.classList.add('total-like');

      const photographerLikesCounter = document.createElement('p');
      photographerLikesCounter.classList.add('total-like-counter');
      photographerLikesCounter.textContent = "0";

      const photographerLikesHeart = document.createElement('span');
      photographerLikesHeart.textContent = "❤";

      photographerLikes.appendChild(photographerLikesCounter);
      photographerLikes.appendChild(photographerLikesHeart);
      

      // Bloc prix
      const photographerPrice = document.createElement('span');
      photographerPrice.classList.add("photographer-price");
      photographerPrice.textContent = `${price}€/jour`;

      photographerPriceAndLikes.appendChild(photographerLikes);
      photographerPriceAndLikes.appendChild(photographerPrice);
      
      return { photographerInfos, photographerPhoto, photographerPriceAndLikes }
    }
    return { getUserCardDOM, getSingleUserDOM }
}