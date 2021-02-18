import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; //trabajar con funciones nativas de Redux
import { setSection } from '../actions';
import '../assets/styles/components/Header.scss';
import Logo from '../assets/static/images/logo.png';

const Header = () => {
    /*
    const {sectionActive} = props;

    const handleSetSection = (section) => {
        props.setSection(section);

    };
    */

    const sectionActive = useSelector((state) => state.sectionActive);
    const dispatch = useDispatch(); // permite ejecutar cualquier acción declarada de mis actions

    const handleSetSection = (section) => {
        dispatch(setSection(section))
    };


    return (
        <header className="header">
            <figure className="header__logo">
                <img
                    className="header__logo-img"
                    src={Logo}
                    alt='Rick and Morty logo'
                />
            </figure>
            <nav className="header__nav">
                <ul className="header__nav__options">
                    
                    <li 
                        onClick={() => handleSetSection('Characters')}
                        className={`header__nav__options-item ${
                            sectionActive === 'Characters' ?  'active' : ''
                        }`}
                    >
                        <Link to="/" >Characters</Link>

                    </li>

                    <li 
                        onClick={() => handleSetSection('Favorites')}
                        className={`header__nav__options-item ${
                            sectionActive === 'Favorites' ?  'active' : ''
                        }`}
                    >
                        <Link to="/favorites" >Favorites</Link>

                    </li>


                </ul>
            </nav>
        </header>
    );
};
/*
const mapStateToProps = (state) => {
    // recibe la difinición inicial del state y lo extrae
    //definición profe: trabajar con el estado inicialñ de las props del store
    // SE REEMPLAZA POR EL USESELECTOR
    return {
        sectionActive: state.sectionActive
    }
};

const mapDispatchToProps = {
    //acciones a trabajar o que modifican el store
    // definición profe: recibía la definición de acciones para modificar el estado de esas props
    // SE REEMPLAZA POR EL USEDISPATCH
    setSection
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

*/
export default Header;