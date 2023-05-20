import React from 'react';
import Banner from '../Banner/Banner';
import ImageGallery from '../ImageGallery/ImageGallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Review from '../Review/Review';

export default function Home() {
  return (
    <div>
      <Banner />
      <ImageGallery />
      <ShopByCategory />
      <Review />
    </div>
  );
}
