function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `./assets/photographers/ID_photos/${portrait}`;

    function getUserCardDOM() {
      const article = document.createElement('article');
      const photographerCard = `
        <a href ="photographer.html?id=${id}">
          <img src="${picture}" alt="${name}" />
          <h2>${name}</h2>
        </a>
        <p class="card-city">${city}, ${country}</p>
        <p class="card-tagline">${tagline}</p>
        <p class="card-price">${price}€/jour</p>
      `
      article.innerHTML = photographerCard
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
      photographerInfos.innerHTML = photographerCard

      // Bloc de la photo
      const photographerPhoto = document.createElement('img');
      photographerPhoto.setAttribute('src', picture);
      photographerPhoto.setAttribute('alt', name);
      photographerPhoto.classList.add('photographer-idPhoto')
      
      // Bloc du prix
      const photographerPrice = document.createElement('div');
      photographerPrice.classList.add('price-block')
      photographerPrice.innerHTML = `
        <span class="total-like-counter">127 ❤</span>
        <span class="photographer-price">${price}€/jour</span>
      `
      
      return { photographerInfos, photographerPhoto, photographerPrice }
    }
    return { getUserCardDOM, getSingleUserDOM }
}