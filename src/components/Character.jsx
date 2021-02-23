import React, { useState, useEffect } from 'react';

// proptypes
import propTypes from 'prop-types';

// actions and redux
import { setFavorite, deleteFavorite } from '../actions';
import { connect } from 'react-redux';

// custom hooks
import useModal from '../custom-hooks/useModal';

// utils
import '../assets/styles/components/Character.scss';
import { ReactComponent as SVGStar } from '../assets/static/icons/star.svg';

// components
import CharacterDetail from './CharacterDetail'; // desplegará información dentro del Modal
import Modal from './Modal'; //desplegará un cuadro

const Character = (props) => { // nota* cuando solo pasemos un parámetro SIEMPRE dejar sin {}

    // useModal destructuring
    const {modal, handleCloseModal, handleOpenModal} = useModal(); 

    // Hook -> useState
    // const [modal, setModal] = useState(false);
    const [favorite, setFavorite] = useState(false);

    // destructuring para poder trabajar con las funciones declaradas
    const { data, favoriteCharacters } = props;
    const { id, image, name, status, species, gender } = data;

    // functions
    /*const handleCloseModal = () => {
        setModal(false);
    };

    const handleOpenModal = () => {
        setModal(true)
    };
    */
    const handleSetFavorite = () => {
        props.setFavorite({ data });
        setFavorite(true)
    };

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId);
        setFavorite(false)
    };

    const isFavorite = () => {
        const result = favoriteCharacters.filter(
            (favoriteCharacter) => favoriteCharacter.data.id === id
        );

        if (result.length) setFavorite(true);
    };

    // Hook -> useEffect
    useEffect(() => {
        isFavorite()
    });



    return (
        <div className='character'>
            <img className='character__img' src={image} alt='Character' />
            <div className='character__details'>
                <h2 className='character__details-name'>{name}</h2>
                {
                    favorite ?
                        <SVGStar className='character__details-star favorite' onClick={() => handleDeleteFavorite(id)} />

                        : <SVGStar className='character__details-star noFavorite' onClick={handleSetFavorite} />
                }


                <p className='character__details__item'>
                    <span className='character__details__item-type'>Status: </span>
                    {status}
                </p>
                <p className='character__details__item'>
                    <span className='character__details__item-type'>Species: </span>
                    {species}
                </p>
                <p className='character__details__item'>
                    <span className='character__details__item-type'>Gender: </span>
                    {gender}
                </p>

                <p onClick={handleOpenModal} className='character__details__item-more'>More details</p>
            </div>

            
                <Modal isOpen={modal} onClose={handleCloseModal}>
                    <CharacterDetail data={data} />
                </Modal>
            
        </div>
    )
};

Character.propTypes = {
    // documentar las props y el tipo de la propiedad
    data: propTypes.object, // data's an object
};


const mapStateToProps = (state) => {
    return {
        favoriteCharacters: state.favoriteCharacters,
    }
};
// registro de acciones 
const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(Character);