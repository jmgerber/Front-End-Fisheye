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
  const sortItems = document.querySelectorAll(".sort-items");
  const sortList = document.querySelector(".sort-list");
  const sorter = mediaSorter(medias);
  let sortedData

  function openMenu() {
    const actualSorting = document.querySelector(".actual-sorting");
    sortItems.forEach(item => item.style.display = "flex");
    sortList.setAttribute("aria-expanded", "true");
    actualSorting.classList.remove("close");
    actualSorting.classList.add("open");
  }

  function closeMenu() {
    const actualSorting = document.querySelector(".actual-sorting");
    sortItems.forEach(item => item.style.display = "none");
    actualSorting.style.display = "flex";
    sortList.setAttribute("aria-expanded", "false");
    actualSorting.classList.remove("open");
    actualSorting.classList.add("close");
  }

  sortList.addEventListener('click', function() {
    if (sortList.getAttribute("aria-expanded") === "false") {
      openMenu();
    }
  })

  sortItems.forEach(item => {
    item.addEventListener('click', function(event) {
      const sortBy = item.id;
      
      const actualSort = document.querySelector(".actual-sorting");
      if (sortList.getAttribute("aria-expanded") === "true") {
        actualSort.classList.remove("actual-sorting");
        item.classList.add("actual-sorting");
        actualSort.style.order = "1";
        item.style.order = "0";

        if (sortBy === "popularity"){
          sortedData = sorter.sortByPopularity();
        } else if (sortBy === "date") {
          sortedData = sorter.sortByDate();
        } else if (sortBy === "title") {
          sortedData = sorter.sortByTitle();
        }
        closeMenu()
        updateMedia()
        updateCarousel()
        event.stopPropagation()
      }
    })
  });

  // Mise à jour des medias
  function updateMedia() {
    photographerMedias.innerHTML = "";
    sortedData.forEach((media, index) => {
      const photoCardModel = mediaFactory(media, index);
      const photoCardDOM = photoCardModel.getPhotoCardDOM();
      photographerMedias.appendChild(photoCardDOM);
    });
  }

  // Mise à jour du caroussel
  function updateCarousel() {
    slider.innerHTML = "";
    sortedData.forEach((media,index) => {
      const mediaModel = carouselFactory(media, index);
      const slideDOM = mediaModel.getSlideDOM();
      slider.appendChild(slideDOM);
    })
  }
}