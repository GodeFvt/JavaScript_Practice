const Movies = require('./Movies.js')

describe('Movie Class', () => {
  let movieDatabase
  beforeEach(() => {
    movieDatabase = new Movies()
    movieDatabase.addMovie(
      'Inception',
      'Christopher Nolan',
      2010,
      'Science Fiction'
    )
    movieDatabase.addMovie(
      'The Shawshank Redemption',
      'Frank Darabont',
      1994,
      'Drama'
    )
    movieDatabase.addMovie(
      'The Dark Knight',
      'Christopher Nolan',
      2008,
      'Action'
    )
  })

  afterEach(() => {
    movieDatabase = null
  })

  //constructor
  test('Create an empty movie database', () => {
    movieDatabase = new Movies()
    expect(movieDatabase.movies).toHaveLength(0)
    expect(movieDatabase.movies).toStrictEqual(new Movies().movies)
  })

  //getAllMovies()
  test('Get all movies', () => {
    const allMovies = movieDatabase.getAllMovies()
    expect(allMovies).toHaveLength(3)
    expect(allMovies).toEqual([
      {
        title: 'Inception',
        director: 'Christopher Nolan',
        year: 2010,
        genre: 'Science Fiction'
      },
      {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        year: 1994,
        genre: 'Drama'
      },
      {
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        year: 2008,
        genre: 'Action'
      }
    ])
  })

  //addMovie()
  test('Add a movie to the database', () => {
    const newMovie = movieDatabase.addMovie(
      'Interstellar',
      'Christopher Nolan',
      2014,
      'Science Fiction'
    )

    expect(newMovie).toEqual({
      title: 'Interstellar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Science Fiction'
    })

    expect(movieDatabase.movies).toHaveLength(4)
  })

  test('Add multiple movies to the database', () => {
    movieDatabase.addMovie(
      'Interstellar',
      'Christopher Nolan',
      2014,
      'Science Fiction'
    )
    movieDatabase.addMovie('Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime')
    movieDatabase.addMovie(
      'The Matrix',
      'Lana Wachowski',
      1999,
      'Science Fiction'
    )

    expect(movieDatabase.movies).toEqual([
      {
        title: 'Inception',
        director: 'Christopher Nolan',
        year: 2010,
        genre: 'Science Fiction'
      },
      {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        year: 1994,
        genre: 'Drama'
      },
      {
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        year: 2008,
        genre: 'Action'
      },
      {
        title: 'Interstellar',
        director: 'Christopher Nolan',
        year: 2014,
        genre: 'Science Fiction'
      },
      {
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        year: 1994,
        genre: 'Crime'
      },
      {
        title: 'The Matrix',
        director: 'Lana Wachowski',
        year: 1999,
        genre: 'Science Fiction'
      }
    ])
    expect(movieDatabase.movies).toHaveLength(6)
  })

  test('Add a movie with missing details', () => {
    const newMovie1 = movieDatabase.addMovie(
      'Interstellar',
      'Christopher Nolan',
      2014
    )
    expect(newMovie1).toBeUndefined()
    expect(movieDatabase.movies).toHaveLength(3)

    const newMovie2 = movieDatabase.addMovie(
      'Interstellar',
      'Christopher Nolan'
    )
    expect(newMovie2).toBeUndefined()
    expect(movieDatabase.movies).toHaveLength(3)

    const newMovie3 = movieDatabase.addMovie('Interstellar')
    expect(newMovie3).toBeUndefined()
    expect(movieDatabase.movies).toHaveLength(3)

    const newMovie4 = movieDatabase.addMovie()
    expect(newMovie4).toBeUndefined()
    expect(movieDatabase.movies).toHaveLength(3)
  })

  test('Add multiple movies with duplicates', () => {
    const inception1 = movieDatabase.addMovie(
      'Interstellar',
      'Christopher Nolan',
      2014,
      'Science Fiction'
    )
    expect(inception1).toEqual({
      title: 'Interstellar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Science Fiction'
    })

    expect(movieDatabase.movies).toHaveLength(4)
    const inception2 = movieDatabase.addMovie(
      'inception',
      'christopher nolan',
      2010,
      'Science Fiction'
    )

    expect(inception2).toBeUndefined()
    expect(movieDatabase.movies).toHaveLength(4)
  })
  test('Add multiple movies with not duplicate', () => {
    const inception1 = movieDatabase.addMovie(
      'Interstellar',
      'Christopher Nolans',
      2014,
      'Science Fiction'
    )
    expect(inception1).toEqual({
      title: 'Interstellar',
      director: 'Christopher Nolans',
      year: 2014,
      genre: 'Science Fiction'
    })

    expect(movieDatabase.movies).toHaveLength(4)
  })
  //updateMovie()
  test('Update director of a movie', () => {
    const updatedMovie = movieDatabase.updateMovie('inception', {
      director: 'James Cameron'
    })
    expect(updatedMovie).toEqual({
      title: 'Inception',
      director: 'James Cameron',
      year: 2010,
      genre: 'Science Fiction'
    })

    expect(movieDatabase.movies).toHaveLength(3)
  })

  test('Update year of a movie', () => {
    const updatedMovie = movieDatabase.updateMovie('inception', { year: 2011 })
    expect(updatedMovie).toEqual({
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2011,
      genre: 'Science Fiction'
    })
    expect(movieDatabase.movies).toHaveLength(3)
  })

  test('Update genre of a movie', () => {
    const updatedMovie = movieDatabase.updateMovie('inception', {
      genre: 'Action'
    })
    expect(updatedMovie).toEqual({
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2010,
      genre: 'Action'
    })
    expect(movieDatabase.movies).toHaveLength(3)
  })

  test('Update combination of movie details', () => {
    const updatedMovie = movieDatabase.updateMovie('inception', {
      director: 'James Cameron',
      year: 2011,
      genre: 'Action'
    })
    expect(updatedMovie).toEqual({
      title: 'Inception',
      director: 'James Cameron',
      year: 2011,
      genre: 'Action'
    })

    expect(movieDatabase.movies).toHaveLength(3)
    const updatedMovie2 = movieDatabase.updateMovie(
      'The shawshank redemption',
      {
        year: 2010,
        genre: 'Fantasy'
      }
    )

    expect(updatedMovie2).toEqual({
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      year: 2010,
      genre: 'Fantasy'
    })

    expect(movieDatabase.movies).toHaveLength(3)
    const updatedMovie3 = movieDatabase.updateMovie('THE dark knight', {
      director: 'Tim Burton',
      genre: 'Drama'
    })
    expect(updatedMovie3).toEqual({
      title: 'The Dark Knight',
      director: 'Tim Burton',
      year: 2008,
      genre: 'Drama'
    })

    expect(movieDatabase.movies).toHaveLength(3)
    const updatedMovie4 = movieDatabase.updateMovie('the dark knight', {
      director: 'Martin Scorsese',
      year: 2020
    })
    expect(updatedMovie4).toEqual({
      title: 'The Dark Knight',
      director: 'Martin Scorsese',
      year: 2020,
      genre: 'Drama'
    })
    expect(movieDatabase.movies).toHaveLength(3)
  })

  test('Update details of a movie that does not exist', () => {
    const updatedMovie = movieDatabase.updateMovie('Avatar', {
      director: 'James Cameron',
      year: 2009,
      genre: 'Science Fiction'
    })
    expect(updatedMovie).toBeUndefined()
  })

  //deleteMovieByTitle()
  test('Delete movie by title', () => {
    movieDatabase.deleteMovieByTitle('inception')
    expect(movieDatabase.movies).toHaveLength(2)
    expect(movieDatabase.movies).toEqual([
      {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        year: 1994,
        genre: 'Drama'
      },
      {
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        year: 2008,
        genre: 'Action'
      }
    ])
  })
  test('Delete movie by title with case insensitive', () => {
    movieDatabase.deleteMovieByTitle('THE DARK KNIGHT')
    expect(movieDatabase.movies).toHaveLength(2)
    expect(movieDatabase.movies).toEqual([
      {
        title: 'Inception',
        director: 'Christopher Nolan',
        year: 2010,
        genre: 'Science Fiction'
      },
      {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        year: 1994,
        genre: 'Drama'
      }
    ])
  })
  test('Delete movie by title (movie not found)', () => {
    movieDatabase.deleteMovieByTitle('Avatar')
    expect(movieDatabase.movies).toHaveLength(3)
    expect(movieDatabase.movies).toEqual([
      {
        title: 'Inception',
        director: 'Christopher Nolan',
        year: 2010,
        genre: 'Science Fiction'
      },
      {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        year: 1994,
        genre: 'Drama'
      },
      {
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        year: 2008,
        genre: 'Action'
      }
    ])
  })
})
