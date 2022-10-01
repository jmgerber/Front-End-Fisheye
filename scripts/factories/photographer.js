function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `./assets/photographers/ID_photos/${portrait}`;

    function getUserCardDOM() {
      const article = document.createElement('article');
      const photographerCard = `
        <a href ="#">
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
    return { name, picture, getUserCardDOM }
}