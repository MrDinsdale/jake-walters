import React from 'react';
import { Link } from 'react-router-dom';

const Thumbnails = ({
    images,
    currentItem
}) => {
    return (
        <div className="c-thumbs">
            {
                images.map((image, index) => {
                    return (
                        <Link to="/" className="c-thumb__link" key={index}>
                            <img src={image.image.thumb.url} className="c-thumb__image" alt={`Link to view ${image.image.alt}`} />
                        </Link>
                    );
                })
            }
        </div>
    );
}

export default Thumbnails