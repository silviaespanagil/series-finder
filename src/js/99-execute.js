resetButton.addEventListener("click", resetFav);
searchButton.addEventListener("click", search);
form.addEventListener("submit", search);
form.addEventListener("submit", preventSubmit);
getLocal();

console.log(favoriteSeries);
