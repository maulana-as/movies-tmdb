import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../helpers/useFetcher";
import MovieCard from "./movieCard";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, loading] = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=fd9b437f11ae93e3e45caf29958e97f0`
  );
  if (loading)
    return (
      <div className="d-flex justify-content-center" style={{ marginTop: 350 }}>
        <h1>loading please wait ...</h1>
      </div>
    );
    const setVoteColor = (vote) => { 
        if (vote >= 8) return 'green'
        else if (vote >= 6) return 'yellow'
        else return 'red'
    }  
  return (
    <>
      <h1 className="text-center movie-content_title">Movie's Details</h1>
      <div className="moviedetail-content">
        <div className="movieinfo-thumb">
          <MovieCard
            key={movie.id}
            imageUrl={movie.poster_path}
            clickable={false}
          />
        </div>
        <div className="movieinfo-text">
          <h1>{movie.title}</h1>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <h5>Release Year</h5>
          <p>{movie.release_date}</p>
          <div className="rating-director">
            <div>
              <h5>IMDB RATING</h5>
              <div className={`${setVoteColor(movie.vote_average)}`}>{movie.vote_average}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
