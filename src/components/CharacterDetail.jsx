import React from 'react';
import '../assets/styles/components/CharacterDetail.scss';

const CharacterDetail = (props) => {
    const { data } = props;
    const { image, name, status, species, gender, origin, location, episode, url } = data;

    return (

        <div className='characterDetail'>
            <img className='characterDetail-img' src={image} alt={name} />
            <div className='characterDetail__container'>
                <h2 className='characterDetail-name'>{name}</h2>

                <p className='characterDetail__item'>
                    <span className='characterDetail__item-type'>
                        Status: 
                    </span>
                    {` ${status}`}
                </p>

                <p className='characterDetail__item'>
                    <span className='characterDetail__item-type'>
                        Specie: 
                    </span>
                    {` ${species}`}
                </p>

                <p className='characterDetail__item'>
                    <span className='characterDetail__item-type'>
                        Gender: 
                    </span>
                    {` ${gender}`}
                </p>

                <p className='characterDetail__item'>
                    <span className='characterDetail__item-type'>
                        Origin: 
                    </span>
                    {` ${origin.name}`}
                </p>

                <p className='characterDetail__item'>
                    <span className='characterDetail__item-type'>
                        Location: 
                    </span>
                    {` ${location.name}`}
                </p>

                <p className='characterDetail__item'>
                    <span className='characterDetail__item-type'>
                        Episode: 
                    </span>
                    {` ${episode.length}`}
                </p>

                <p className='characterDetail__item'>
                    <span className='characterDetail__item-type'>
                        Url: 
                    </span>
                    <a href='https://rickandmortyapi.com/api/character/3'>{url}</a>
                </p>

                
                
            </div>
        </div>
    )
}

export default CharacterDetail;