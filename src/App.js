import './App.css';
import MovieList from './component/MovieList';
import Add from './component/add';
import Filter from './component/filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react";
function App() {
  const [filteredMovie,setFilteredMovie] = useState([])
  const [searchKeys,setSearchKeys] = useState({
    key:"",
    rate:1
  })

  
  const [movies,setMovies] = useState([
    {
        title:"prison Break",
        imgurl:"https://images6.alphacoders.com/469/thumbbig-469280.webp",
        discription:"season 4 (2015)",
        rating:5
    },
    {
        title:"the lion king",
        imgurl:"https://play-lh.googleusercontent.com/YMkscfkxtVS8yNtCO8ieucgIgbe7Yv_ZlGMr1ytnY5UCVbygLPHR05d-KNXNQ3sgfphh",
        discription:"season 1 (2018)",
        rating:4
    },
    {
        title:"chernobyl",
        imgurl:"https://images.6play.fr/v2/images/3401257/raw?blur=0&fit=scale_crop&format=jpeg&height=630&interlace=1&quality=60&width=1200&hash=2c7274d86697ef2fa03084c270ed7f7c04a83d3c",
        discription:"season 1 (2010)",
        rating:3
    },
    {
      title:"the lion king",
      imgurl:"https://play-lh.googleusercontent.com/YMkscfkxtVS8yNtCO8ieucgIgbe7Yv_ZlGMr1ytnY5UCVbygLPHR05d-KNXNQ3sgfphh",
      discription:"season 2 (2020)",
      rating:5
  },
]);
const add = (newmovie) => {
  setMovies((movies) => movies.concat(newmovie));
};
const search = (e) => {
  setSearchKeys({...searchKeys,[e.target.name]:e.target.value})
};

useEffect(() => {
  setFilteredMovie(movies.filter(m => (m.rating >= searchKeys.rate) && (searchKeys.key === "" || m.title.startsWith(searchKeys.key) )))
}, [movies,searchKeys])
  return (
    <div className="App">
      <Filter search={search} />
      <Add add={(newmovie)=>add(newmovie)}/>
      <MovieList movies={filteredMovie} />
    </div>
  );
}

export default App;
