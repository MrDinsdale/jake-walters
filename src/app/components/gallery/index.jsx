import React from 'react';
import classNames from 'classnames';

const Gallery = ({
  images,
  currentImage
}) => {
  return (
    <div className="c-gallery">
      {
        images.image.map((image, index) => {
          const isCurrent = index == currentImage;
          return (
            <figure
              className={classNames('c-gallery-item', {'is-current': isCurrent})}
              key={index}
            >
              <img src={image.fields.file.url} className="c-gallery-item__image" />
              <figcaption className="c-gallery-item__caption">
                {image.fields.title}
              </figcaption>
            </figure>
          );
        })
      }
    </div>
  );
}

export default Gallery
