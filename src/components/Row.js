import axios from '../api/axios';
import React,{useState,useEffect,useCallback} from 'react'
import './Row.css';
import Moviemodal from './Moviemodal';

function Row({title,id,fetchUrl}) {

    const[movies,setMovies] = useState([]);
    const [openModal,setOpenModal] =useState(false);
    const [select,setSelect] =useState({});
    
    const fetchMovieData = useCallback (async () => {
        const response = await axios.get(fetchUrl);
        console.log(response.data);
        setMovies(response.data.results);
    },[fetchUrl]);

    useEffect(()=> {
        fetchMovieData();
    },[fetchMovieData]);

    const click=(movie) => {
        setOpenModal(true);
       setSelect(movie);
    }

    return (
        <div>
            <h2>{title}</h2>
                <div className='slider'>
                    <div className='slider__arrow-left'>
                        <span className='arrow' onClick={()=>{document.getElementById(id).scrollLeft -= window.innerWidth -20; }}>{"<"}</span>  
                    </div>
                    <div id={id} className='row__posters'>
                    {movies?.map((movie) => <img
                    key={movie.id}
                    className='row__poster'
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                     onClick={()=> click(movie)}
                    />)}
                    </div>
                    <div className='slider__arrow-right'>
                        <span className='arrow' onClick={()=>{document.getElementById(id).scrollLeft += window.innerWidth -20; }}>{">"}</span>
                    </div>
                </div>
            {openModal && <Moviemodal {...select} setModal={setOpenModal}/>}
        </div>     
    )
}
export default Row
//scrollLeft +/- = 기준 +-
//innerWidth = 뷰포트의 전체 너비의미
//useCallback 성능을 최적화시킴 자식 컴포넌트에서 부모 컴포넌트로 콜백 함수를 줄 때 사용 