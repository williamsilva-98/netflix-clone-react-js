import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./tmdb/Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const getAllMovies = async () => {
      let list = await Tmdb.getMovies();
      setMovieList(list);

      let originals = list.filter((e) => e.slug === "originals");
      let randomNumber = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosenMovie = originals[0].items.results[randomNumber];
      let chosenMovieInfo = await Tmdb.getMovieInfo(chosenMovie.id, "tv");
      setFeaturedMovie(chosenMovieInfo);
    };

    getAllMovies();
  }, []);

  useEffect(() => {
    const scrollListner = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListner);

    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  }, []);

  return (
    <div className="page">
      <Header blackHeader={blackHeader} />

      {featuredMovie && <FeaturedMovie movie={featuredMovie} />}

      <section className="lists">
        {movieList.map((movie, index) => (
          <MovieRow key={index} title={movie.title} movies={movie.items} />
        ))}
      </section>

      <footer>
        Feito com{" "}
        <span role="img" aria-label="coração">
          💜
        </span>{" "}
        por William Silva
        <br />
        <br />
        Direitos de imagem para Netflix
        <br />
        <br />
        Dados provenientes de Themoviedb.org
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="http://cdn.lowgif.com/full/bf91d18c3cda055b-netflix-finally-adds-offline-viewing-netflix.gif"
            alt="carregando"
          />
        </div>
      )}
    </div>
  );
}

export default App;
