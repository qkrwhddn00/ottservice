import React, {useEffect,useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import "../Search/SearchPage.css";
import { useDebounce } from '../../Hooks/useDebounce';

const SearchPage = () => {
  const [searchResult,setSearchResult] = useState([]);
  

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");
  const navigate = useNavigate();
  const debounceTerm = useDebounce(searchTerm,500);

  useEffect (()=> {
    if(debounceTerm){
      fetchSearchMovie(debounceTerm)
    }

  },[searchTerm])

  const fetchSearchMovie = async(searchTerm) => {
    try{
      const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResult(response.data.results);
      console.log('response',response);
    } catch(err) {
    }
  }
  if (searchResult.length > 0) {
    return (
    <section className='search-container'>
      {searchResult.map((movie)=> {
        if(movie.backdrop_path !== null && movie.media_type !== "person"){
          const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
          return (
            <div className='movie' key={movie.id}>
             <div className='movie_poster_column' onClick={()=>navigate(`/${movie.id}`)}>
               <img src={movieImageUrl} alt='movie' className='movieposter'/>
              </div>
            </div>
          )
        }
      })}
      
    </section>
    )
    } else {
      return (
        <section className='resultno'>
          <div className='resultnotext'>
            <p>해당 검색어에 일치하는 "{searchTerm}"은 (는) 없습니다.</p>
          </div>
        </section>
      )
    }

  }


  


export default SearchPage

//Debounce 사용자가 미리 결정된 시간동안 타이핑 하는 걸 멈출 때까지 keyup 이벤트 처리 지연
