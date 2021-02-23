import React, {useEffect} from 'react';

import useGetCharacters from '../custom-hooks/useGetCharacters';

import '../assets/styles/components/CharacterList.scss';

import Character from './Character';
import Error from './Error';
import Loader from './Loader';

const CharacterList = () => {

    // use useGetCharacters destructuring
    const {characters, loading, error, getCharacters} = useGetCharacters();
   
    /*
     const [ characters, setCharacters ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    

    async function getCharacters(){
        try{

            //dejaremos la información que venga de la api (https://rickandmortyapi.com/documentation)
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            const result = response.data.results;
            setCharacters(result); // seteamos el contenido de Characters
            setLoading(false);
            setError(false);

        } catch(error){

            setLoading(false);
            setError(error);
        }
    }; // end async function
    */
    useEffect( () => {
        getCharacters()
    }, []);

    return(
        <div className='characterList'>
            {
                loading ? ( // if loading's true
                    <Loader />
                ) : error ? ( //else if error's true
                    <Error />
                ) : ( // end else 
                    characters.map((character) => ( // () para manejar el contexto interno
                        <Character key={character.id} data={character} />
                    ))
                )
            }
        </div>
    );


};


export default CharacterList;