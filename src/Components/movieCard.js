import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import noImage from "../images/no_image.png";

export default function MovieCard(props) {
  const { imageUrl, clickable, movieId } = props;
  const imgUlr = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className={"movie-card"}>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img
            className="clickable"
            src={imageUrl === undefined ? noImage : `${imgUlr}${imageUrl}`}
            alt="moviethumb"
          />
          {/* jika ingin menggunakan judul dan rating di card image */}
          {/* <div className={"movie-card__details"}>
            <h5>{title}</h5>
            <span className={`${setVoteColor(vote_average)}`}>
            {vote_average}</span>
          </div> */}
        </Link>
      ) : (
        <img
          src={imageUrl === undefined ? noImage : `${imgUlr}${imageUrl}`}
          alt="moviethumb"
        />
      )}
    </div>
  );
}

MovieCard.propTypes = {
  rating: PropTypes.number,
  imageUrl: PropTypes.string,
  clickable: PropTypes.bool,
  movieId: PropTypes.number,
};
