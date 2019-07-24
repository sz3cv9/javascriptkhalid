//for(i=0 ; i < 10 ; i++){
//    console.log(i);
//}

//for (i=9; i > -1; i--){
//    console.log(i);
//}

//let favDrinks = [
//    "coffee",
//    "water",
//    "milk"
//];
// console.log(favDrinks[0]);
// console.log(favDrinks[1]);
// console.log(favDrinks[2]);

let favFilms = [
    "Pulp Fiction",
    "Big Bang Theory",
    "Star Trek",
    "Titanic",
    "Ghostbusters"
   ]; 
  for(filmIndex = 0; filmIndex < favFilms.length;filmIndex++){
      console.log(favFilms[filmIndex])
  }
  let films = [
    "Lets Be Cops",
    "Taken",
    "Ghostbusters"
]
        const filmCheck = () => {
            if (films[2] == "Ghostbusters") {
                console.log("Yay it's Ghostbusters");
            } else {
                console.log("Booo, we want Ghostbusters");
            }
        };
        filmCheck();