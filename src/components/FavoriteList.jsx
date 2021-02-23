import React from 'react';

// import redux
import {connect} from 'react-redux';

// import components
import Character from './Character';
import Empty from './Empty';

// utils
import '../assets/styles/components/FavoriteList.scss';

const FavoriteList = (props) => {
    const {favoriteCharacters} = props;

    return (
        <div className='characterList'>
            {
                !favoriteCharacters.length ? (
                    <Empty />
                ) : favoriteCharacters.map((character) => (
                    <Character key={character.data.id} data={character.data} />
                ) )
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        favoriteCharacters: state.favoriteCharacters
    }
}

export default connect(mapStateToProps, null)(FavoriteList);