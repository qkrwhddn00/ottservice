import React from "react"
import './Moviemodal.css';

const Moviemodal = ({
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModal
})=> {
    return (
        <div className="container" role='presentation'>
            <div className="wrap-modal">
                <div className="modal">
                    <span ocClick={()=>setModal(false)} className="close">X</span>
                    <img className="modal_img" 
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}/>
                    <div className="modalContent">
                        <p className="modalDetail">
                            {release_date ? release_date : first_air_date}
                        </p>
                        <h2 className="modalTitle">{title ? title:name}</h2>
                        <p className="modaloverview">평점 :{vote_average}</p>
                        <p className="modaloverview">{overview}</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Moviemodal