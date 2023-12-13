//65130500054 Phuttinan Phaksawaeng

class Movies {
  //your code here...
  constructor(){
    this.movies = []
  }
  getAllMovies(){
    return this.movies
  }
  addMovie(title , director, year, genre){
    if(title === undefined || director === undefined || year === undefined || genre === undefined){
      return undefined
    }
    if(this.movies.find((el)=> el.title.toLowerCase() === title.toLowerCase()) !== undefined ){
      return undefined
    }
    if(this.movies.find((el)=> el.title.toLowerCase() === title.toLowerCase()) !== undefined && this.movies.find((el)=> el.director.toLowerCase() === director.toLowerCase()) === undefined){
      return undefined
    }
    let movie = {title:title, director:director, year:year, genre:genre}
    this.movies.push(movie)
    return movie
  }
  updateMovie(title, updatedDetails){
    let findMovie = this.movies.findIndex((el) => el.title.toLowerCase() === title.toLowerCase())
    if(findMovie === -1){
      return undefined
    }
    if(Object.keys(updatedDetails).find((el) => el === "title") !== undefined){
      this.movies[findMovie].title = updatedDetails.title
    }if(Object.keys(updatedDetails).find((el) => el === "director") !== undefined){
      this.movies[findMovie].director = updatedDetails.director
    }if(Object.keys(updatedDetails).find((el) => el === "year") !== undefined){
      this.movies[findMovie].year = updatedDetails.year
    }if(Object.keys(updatedDetails).find((el) => el === "genre") !== undefined){
      this.movies[findMovie].genre = updatedDetails.genre
    }
    return this.movies[findMovie]
  }
  deleteMovieByTitle(title){
    let findMovie = this.movies.findIndex((el) => el.title.toLowerCase() === title.toLowerCase())
    let mesage = ""
    if(findMovie === -1){
      return "no movie deleted"
    }if (findMovie > -1) {
      mesage =`a movie object ${this.movies[findMovie]} is deleted`
      this.movies.splice(findMovie, 1);
    }
    return mesage;
  }
}

module.exports = Movies
