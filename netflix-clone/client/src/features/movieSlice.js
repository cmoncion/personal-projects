import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const MY_API_KEY = "4842b541b44a56c09d75624d0e72cde0";
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = createAsyncThunk("fetMovies", async () => {
  const response = await fetch(
    `${TMDB_BASE_URL}/discover/movie?api_key=${MY_API_KEY}`
  );
  const data = await response.json();
  const genresData = await getGenres();
  const movies = data.results.slice(0, 12);
  const arrayMovies = [];

  movies.forEach((movie) => {
    const arrayGenres = [];
    movie.genre_ids.forEach((genreId) => {
      const genreName = genresData.genres.find(({ id }) => id === genreId);
      if (genreName) arrayGenres.push(genreName.name);
    });
    if (movie.backdrop_path) {
      arrayMovies.push({
        id: movie.id,
        name: movie?.original_name ? movie.riginal_name : movie.original_title,
        image: movie.backdrop_path,
        genres: arrayGenres.slice(0, 5),
      });
    }
  });

  return arrayMovies.slice(0, 12);
});

export const getGenres = async () => {
  const response = await fetch(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const fetchTrending = createAsyncThunk("fetcheTrending", async () => {
  const response = await fetch(
    `${TMDB_BASE_URL}/trending/all/week?api_key=${MY_API_KEY}`
  );
  const data = await response.json();
  return data.results.slice(0, 12);
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    trending: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    // Movies reducer
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });

    // Trending reducer
    builder.addCase(fetchTrending.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      state.isLoading = false;
      state.trending = action.payload;
    });
    builder.addCase(fetchTrending.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default movieSlice.reducer;
