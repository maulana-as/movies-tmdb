// buat sebuah function untuk merubah data di store

export const getNowMovie = (movie) => { 
    return async (dispatch) => { 
        await dispatch ({ 
            type: 'SET_MOVIE', 
            movie
        })
    }
}

// buat sebuah fungsi yang akan mem-fetch data list movies yang sedang ditonton
export const getNowMovies = () => { 
    return async (dispatch) => { 
        const fetchMovie  = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=fd9b437f11ae93e3e45caf29958e97f0&language=en-US')
        const movies = await fetchMovie.json()
        dispatch({
            type: 'SET_MOVIES',
            movies: movies.results
        })
    }
}

// buat sebuah fungsi yang akan mem-fetch data list dari movie yang mirip2, 
export const getSimilarMovies = (movie_id) => { 
    return async (dispatch) => { 
        const similarMovie = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=fd9b437f11ae93e3e45caf29958e97f0&language=en-US&page=1`)
        const similarMovies = await similarMovie.json()

        if (similarMovies.length === 0) return null

        dispatch({ 
            type: 'SET_SIMILAR_MOVIES', 
            similarMovies: similarMovies.results
        })
    }
}