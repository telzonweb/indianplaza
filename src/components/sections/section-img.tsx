import React from 'react';

interface ImageCardProps {
  src: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => (
  <div className="relative p-4 bg-white rounded-lg">
    <img src={src} alt={alt} className="w-full h-auto rounded-md" />
  </div>
);

const ImageRow: React.FC = () => {
  const images = [
    { src: 'https://media.starquik.com/bannerslider/m/a/may_24_celebration_01.png', alt: 'Image 1' },
    { src: 'https://media.starquik.com/bannerslider/m/a/may_br_24_celebration_02.png', alt: 'Image 2' },
    { src: 'https://media.starquik.com/bannerslider/m/a/may_br_24_celebration_03.png', alt: 'Image 3' },
    { src: 'https://media.starquik.com/bannerslider/m/a/may_br_24_celebration_03.png', alt: 'Image 4' },
  ];

  return (
    <div className="flex justify-center p-4 overflow-x-auto">
      {images.map((image, index) => (
        <ImageCard key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default ImageRow;
