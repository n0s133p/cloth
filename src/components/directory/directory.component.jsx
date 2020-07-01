import React, { Component } from 'react';

import './directory.styles.scss';
import SECTIONS from './directory.data';

// directory consists of following components
import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component {
    constructor() {
        super();
        this.state = {
            sections: SECTIONS,
        };
    }       
    
    render() {
        return (
            <div className="directory-menu">
                {
                 this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                 ))   
                }
            </div>
        );
    }
}

export default Directory;