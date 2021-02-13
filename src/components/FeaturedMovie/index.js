import React from "react";
import "./styles.css";

const FeaturedMovie = ({ movie }) => {

  let year = new Date(movie.first_air_date)
  
  let genres = [];

  movie.genres.map(e => (
    genres.push(e.name)
  ))

  console.log(genres);

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: 'fixed',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{movie.original_name}</div>

          <div className="featured--info">
            <div className="featured--points">{movie.vote_average} pontos</div>
            <div className="featured--year">{year.getFullYear()}</div>
            <div className="featured--seasons">
              {movie.number_of_seasons === 1
                ? `${movie.number_of_seasons} temporada`
                : `${movie.number_of_seasons} temporadas`}
            </div>
            <div className="featured--description">{movie.overview}</div>
            <div className="featured--buttons">
              <a href={`/watch/${movie.id}`} className="featured--watch">► Assitir</a>
              <a href={`/list/add/${movie.id}`} className="featured--addlist">+ Minha Lista</a>
            </div>
            <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
