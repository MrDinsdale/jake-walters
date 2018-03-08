import React from 'react';

const GalleryItem = ({
    image
}) => {
    return (
        <figure className="c-gallery-item">
            <img src={image.url} className="c-gallery-item__image" />
            <figcaption className="c-gallery-item__caption">{image.alt}</figcaption>
        </figure>
    )
};

export default GalleryItem
