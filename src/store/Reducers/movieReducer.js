const initialState = {
  movie: {},
  movies: [],
  similarMovies: [],
};

// reducer hanya fungsi javascript biasa yang dimana akan mengambil state
// sebelumnya, ambil nama actionnya dan melakukan tugas sesuai nama actionya
// lalu kembalikan state barunya

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MOVIE': 
        return {...state, movie: action.movie}
    case "SET_MOVIES":
        return {...state, movies: action.movies }
    case 'SET_SIMILAR_MOVIES': 
        return {...state, similarMovies: action.similarMovies }
    default: 
        return state
  }
}

export default movieReducer

// Buat store nya untuk menyimpan data
// ambil data dari store bisa melalui react component
// jika mau merubah datanya kita tidak bisa merubah langsung datanya
// dalam reducer kita akan mendispatch action 