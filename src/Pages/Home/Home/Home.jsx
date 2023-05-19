import React from 'react';
import Banner from '../Banner/Banner';
import ImageGallery from '../ImageGallery/ImageGallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

export default function Home() {
  return (
    <div>
      <Banner />
      <ImageGallery />
      <ShopByCategory />
    </div>
  );
}
