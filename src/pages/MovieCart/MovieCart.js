import React from 'react'
import './style.scss'
import { IMG_API } from '../../services/config'

export default function MovieCart({ title, poster_path, overview, vote_average }) {

    return (
        <div className='movie'>
            <img src={IMG_API + poster_path} alt={title} />
            <div className='title'>
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className='overview'>
                {overview}
            </div>
        </div>
    )
}
