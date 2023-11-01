import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, fetchTrending } from "../features/movieSlice";

import ListMovies from "./ListMovies";
import ListTrending from "./ListTrending";

const Hero = () => {
  const { movies, trending, isLoading, isError } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  useEffect(() => {
    dispatch(fetchTrending())
  }, [])
  

  return (
    <>
      <ListMovies movies={movies}/>

      <ListTrending trending={trending}/>
    </>
  );
};

export default Hero;
