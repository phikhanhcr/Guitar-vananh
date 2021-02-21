
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
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
  const [latestItem, setLatestItem] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await fetch('http://localhost:3000/api/all-product')
        .then(res => res.json())
        .then(data => {
          setLatestItem(data.sort((a, b) => a.createAt - b.createAt).slice(0,8));
        })
    }
    fetchData()
  }, [])
  
  // for (let i = 0; i < 50 ; i++) {
  //   if (arrRandom.indexOf(latestItem[randomIndex]) === -1) {
  //     arrRandom.push(latestItem[randomIndex])
  //   }
  //   if (arrRandom.length === 8) {
  //     break
  //   };
  // }

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
      <Products latestItem={latestItem}/>
      <News />
      <Footer />
    </main>

  </div>
);
}

export default Home;