import React from 'react';

//components
import CharacterList from './../components/CharacterList';

const Characters = () => (
    <section className="characters">
        <CharacterList />
    </section>
);

Characters.displayName = "Characters";

export default Characters;
