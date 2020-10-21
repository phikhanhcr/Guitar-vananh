import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export default function Slide() {
  return (
    <div>
      <Carousel breakPoints={breakPoints}>
        {
          [1, 1, 1, 1, 1, 2, 3, 4].map(ele => (
            <Item className="d-flex flex-column align-items-center">
              <img src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/121541413_3342990775926571_7775936184945434658_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=D1xItYiXpIgAX_B5bgd&_nc_ht=scontent.fhan2-6.fna&oh=99f6bc51fd2b101c63051547c4879bca&oe=5FB4F1AD" alt="img" />
              <h3 className="s20 t1">Phi Khanh Cr</h3>

              <h3 className="uppercase s18 t1">Founder</h3>
              <p className="t1">
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since
                the 1500s.
            </p>
            </Item>

          ))
        }

      </Carousel>
    </div>
  );
}
