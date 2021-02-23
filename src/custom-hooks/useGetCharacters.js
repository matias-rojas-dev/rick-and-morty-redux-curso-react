import { useState } from 'react'
import axios from 'axios';

import { useLocalStorage } from './useLocalStorage';

const useGetCharacters = () => {

    const [characters, setCharacters] = useLocalStorage('characters', '');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getCharacters() {
        try {

            //dejaremos la información que venga de la api (https://rickandmortyapi.com/documentation)
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            const result = response.data.results;
            setCharacters(result); // seteamos el contenido de Characters
            setLoading(false);
            setError(false);

        } catch (error) {

            setLoading(false);
            setError(error);
        }
    }; // end async function

    return {
        characters,
        loading,
        error,
        getCharacters
    }
}
export default useGetCharacters;