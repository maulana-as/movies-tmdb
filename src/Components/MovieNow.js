import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNowMovies } from '../store/Actions/movieAction'
import MovieCard from './movieCard'
import { Loading } from './loading.style'

function MovieNow () { 

    const dispatch = useDispatch()
    const { movies } = useSelector(state => state.movieReducer)

    useEffect(() => {
        dispatch(getNowMovies())
    }, [dispatch])



    return ( 
        <div className="movie-container" style={{ height: 650, overflowY: "scroll", marginTop: 70}}>
            { 
               movies && movies.map((movie) => (
                    <MovieCard 
                    key={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.title}
                    rating={movie.vote_average}
                    vote_average={movie.vote_average}
                    clickable
                    movieId={movie.id}
              />
                ))
            }
         {/* { <Loading>Loading ...</Loading>} */}
        </div>
    )
}

export default MovieNow