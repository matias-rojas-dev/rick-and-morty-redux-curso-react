const
    reducer = (state, action) => {
        // state: representación de como se encuentra actualmente
        // action: acción para modificar el state
        switch (action.type) { //recibe cualquiera de estos tres tipos de acciones
            case 'SET_FAVORITE':
                return {
                    //1 copia inicial del state
                    ...state,
                    //2 propiedad o contenido del store a modificar
                    favoriteCharacters: [...state.favoriteCharacters, action.payload], //action.payload : contenido de datos que modifican el valor
                };

            case 'DELETE_FAVORITE':
                return {
                    ...state,
                    favoriteCharacters: state.favoriteCharacters.filter(
                        (items) => items.data.id !== action.payload, //tiene que ser distinto al items.data.id
                    ),
                };

            case 'SET_SECTION':
                return {
                    ...state,
                    sectionActive: action.payload,
                };

            default:
                return state
        }
    };

export default reducer;