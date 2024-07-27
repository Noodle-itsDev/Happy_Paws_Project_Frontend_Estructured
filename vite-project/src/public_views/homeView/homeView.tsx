// src/views/HomeView.tsx
import React from 'react';
import ImageCarousel from '../../components/bannerComponent/bannerComponent';
import Img1 from '../../assets/img/pexels-katlovessteve-551628.jpg';
import Img2 from '../../assets/img/pexels-pixabay-45170.jpg';
import Img3 from '../../assets/img/pexels-snapwire-46024.jpg';

const images = [
  Img1,
  Img2,
  Img3,
];

const HomeView: React.FC = () => {
  return (
    <div style={styles.container}>
      <ImageCarousel images={images} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    overflow: 'hidden',
  },
};

export default HomeView;
