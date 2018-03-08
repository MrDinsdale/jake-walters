import React from 'react';
import GalleryItem from './gallery-item';

const Gallery = ({
    images,
    currentItem
}) => {
    return (
        <div className="c-gallery">
            {
                images.map((image, index) => {
                    return (
                        <GalleryItem image={image.image} imageIndex={index} key={index} />
                    );
                })
            }
        </div>
    );
}

export default Gallery
