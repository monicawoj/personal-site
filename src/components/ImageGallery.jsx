import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const ImageGallery = ({ items }) => {
  const images = items.map(item => {
    const original = item.image.url;
    const originalAlt = item.image.alt || "";
    const description = item.image_caption[0].text;
    return {
      original,
      originalAlt,
      description,
      thumbnail: original,
      thumbnailAlt: originalAlt,
    };
  });
  return <ReactImageGallery items={images} />;
};

export default ImageGallery;
