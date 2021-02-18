import React from 'react';

//style
import '../assets/styles/components/Layout.scss';

//components
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => (
    <div className="layout">
        <Header />
            {children /* componente que puede ser Characters o Favorites} DEFINICIÓN DINÁMICA*/ } 
        <Footer />
    </div>
);

export default Layout;
