
import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import News from './News/News';
import Products from './Products/Products';
import img1 from './Slide/images/2.png'
import img2 from './Slide/images/3.png'
import img3 from './Slide/images/q.png'
import Slideshow from './Slide/Slide';

function Home(props) {
  const collection = [
    { src: img1, caption: "Caption one" },
    { src: img2, caption: "Caption two" },
    { src: img3, caption: "Caption three" }
  ];
  return (
    <div>
      <main>
        <Slideshow
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`5000`}
        />
        <Banner />
        <Products />
        <News />
        <Footer />
      </main>

    </div>
  );
}

export default Home;