function getTotalLikes(medias) {
  const totalLikesCounter = document.querySelector(".total-like-counter");
  const total = medias.reduce(
    (previousValue, currentValue) => previousValue + currentValue.likes,
    0,
  );

  totalLikesCounter.innerHTML = total;
}

function updateTotalLikes(action) {
  const actualLikes = document.querySelector(".total-like-counter");
  let total = parseInt(actualLikes.textContent);
  if(action === "INC") {
    total += 1;
  } else if (action === "DEC") {
    total -= 1;
  } else {
    throw "Unknow action"
  }
  actualLikes.innerHTML = total;
}