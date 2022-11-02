async function getPhotographers() {
  const response = await fetch('data/photographers.json');
    if(response.ok){
      const photographers = await response.json();
      return photographers
    } else {
      console.error(`Returned error : ${response.status}`);
    }
}