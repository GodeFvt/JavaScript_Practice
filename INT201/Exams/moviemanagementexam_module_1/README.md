[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/9kXK-30R)
# LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# Movies Requirements

Write a class called _Movies_ that consists of the movies object property and functions:

## Properties:

- **movies** (_An array of movie_): An array contains movie objects. Each movie object has the following properties:

  - title: A string representing the title of the movie.
  - director: A string representing the director of the movie.
  - year: An integer representing the year the movie was released.
  - genre: A string representing the genre of the movie.

  - For example,{
    title: 'Inception'
    director: 'Christopher Nolan'
    year: 2010
    genre: 'Science Fiction'}

## Functions:

- **constructor()**: creates a new movies object without the provided parameters. Your constructor must initial movies property to an empty array ([]).
- **getAllMovies()** :

  - Write a program to get all movies

- **addMovie(title, director, year, genre)** :

  - Write a program to add a new movie to the end of array. The movie details are title, director, year, and genre. If any of the required details are missing, do not add the movie and return undefined. If a movie with the same title and director (with case insenstive) already exists in the array, do not add the duplicate movie and return undefined. Otherwise, a new movie object returned. For examples,

    - addMovie(
      'Inception',
      'Christopher Nolan',
      2010,
      'Science Fiction'
      ), return {
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2010,
      genre: 'Science Fiction'
      }
    - addMovie('Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime'), return
      {
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      year: 1994,
      genre: 'Crime'
      }

    - addMovie('The Matrix', 'Lana Wachowski', 1999, 'Science Fiction'), return
      {
      title: 'The Matrix',
      director: 'Lana Wachowski',
      year: 1999,
      genre: 'Science Fiction'
      }
    - addMovie(
      'Interstellar',
      'Christopher Nolan',
      2014
      ) return undefined because missing a genre
    - addMovie('the matrix', 'lana wachowski', 1991, 'Science Fiction'), return undefined because the duplicates of title and director

- **updateMovie(title, updatedDetails)** :

  - Write a program to update the details of a movie on a given title with case insensitive. The user can update for the director, year, genre, or mixture of them. If the movie is found in the array, update its details. If the movie is not found, return undefined. For examples, update a movie thats has title named 'Inception' with the different details as follow:

    - updateMovie('Inception', {director: 'James Cameron'}), return {
      title: 'Inception',
      director: 'James Cameron',
      year: 2010,
      genre: 'Science Fiction'
      }
    - updateMovie('Inception', {year: 2011 }), return {
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2011,
      genre: 'Science Fiction'
      }
    - updateMovie('Inception', {genre: 'Action'}), return {
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2010,
      genre: 'Action'
      }
    - updateMovie('Inception', { year: 2011, genre: 'Action' }), return {
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2011,
      genre: 'Action'
      }
    - updateMovie('Inception', { director: 'James Cameron', year: 2011 }), return {
      title: 'Inception',
      director: 'James Cameron',
      year: 2011,
      genre: 'Science Fiction'
      }
    - updateMovie('Inception', {
      director: 'James Cameron',
      year: 2011,
      genre: 'Action'
      }), return {
      title: 'Inception',
      director: 'James Cameron',
      year: 2011,
      genre: 'Action'
      }
    - updateMovie('Avatar', {
      director: 'James Cameron',
      year: 2009,
      genre: 'Science Fiction'
      }), return undefined

- **deleteMovieByTitle(title)** :

  - Write a program to delete a movie from the array. If the movie title is found (with case insenstive) in the array then delete it. Otherwise, no movie has been deleted. For examples,
    - deleteMovieByTitle('Pulp'), output: no movie deleted
    - deleteMovieByTitle('pulp giction') output: a movie object {
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      year: 1994,
      genre: 'Crime'
      } is deleted
