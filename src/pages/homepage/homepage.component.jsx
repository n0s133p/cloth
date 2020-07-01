import React from 'react';

// CSS files
import './homepage.styles.scss';

// Homepage contains following components
import Directory from '../../components/directory/directory.component';

const Homepage = () => {
    return (
        <div className="homepage">   
            <Directory/>
        </div>
    );
}

export default Homepage;