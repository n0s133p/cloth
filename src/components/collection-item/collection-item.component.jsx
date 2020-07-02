import React from 'react';

// styling 
import './collection-item.styles.scss';

// does this component needs id ???

// content should have image and centered add to cart div
// collection footer, left side of the div -> 
// collection footer, right side of the div -> price
const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className="collection-item">
        <div 
        className="image"
        style={{ backgroundImage: `url(${imageUrl})`}}
        ></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
    </div>
);
    

    


export default CollectionItem;