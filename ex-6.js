let favoriteBooks = [];

function addFavoriteBook (bookName) {
  // Start coding here !
if (bookName.includes("Beauty")){
  favoriteBooks.push(bookName);
}else{
  return 0;
}

}
// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty");
console.log(favoriteBooks);
