import React, {useState, useEffect} from 'react';

// proptypes
import propTypes from 'prop-types';

// actions and redux
import { setFavorite, deleteFavorite } from '../actions';
import { connect } from 'react-redux';

// utils
import '../assets/styles/components/Character.scss';
import {ReactComponent as SVGStar} from '../assets/static/icons/star.svg'; 

// components
import CharacterDetail from './CharacterDetail';
import Model from './Modal'

const Character = ({props}) => {

    // Hook -> useState
    const [modal, setModal] = useState(false);
    const [favorite, setFavorite] = useState(false);

    // destructuring
    const {data, favoriteCharacters} = props;
    const { id, image, name, status, species, genre} = data;

    // functions
    const handleCloseModal = () => {

    };

    const handleOpenModal = () => {

    };

    const handleSetFavorite = () => {

    };

    const handleDeleteFavorite = () => {

    };

    const isFavorite = () => {

    };

    // Hook -> useEffect
    useEffect( () => {

    }, []);



    return (
        <div>
            {props}
        </div>
    )
};

Character.propTypes = {
    // documentar las props y el tipo de la propiedad
    data: propTypes.object, // data's an object
    name: propTypes.string // name's a string
};


const mapStateToProps = (state) => {
    return{
        favoriteCharacters: state.favoriteCharacters,
        deleteFavoriteCharacter: state.deleteFavoriteCharacter
    }
};

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(Character);