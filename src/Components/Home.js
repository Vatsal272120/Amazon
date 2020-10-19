import React from "react";
import "../Styles/Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/jupiter20/GW-FInal/FinaleDesktop-Hero_3000x1200_Live-now_1x_NP._CB419052847_.jpg'
          alt=''
          className='home__image'
        />

        <div className='home__row'>
          <Product
            id='15'
            title='The Lean StartUP'
            price='29.99'
            image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
            rating={5}
          />
          <Product
            id='65588'
            title='Bose SoundSport Free, True Wireless Earbuds, (Sweatproof Bluetooth Headphones for Workouts and Sports), Midnight Blue/Citron'
            price='54.55'
            image='https://images-na.ssl-images-amazon.com/images/I/61Bx0jEMbnL._SL1500_.jpg'
            rating={3}
          />
        </div>
        <div className='home__row'>
          <Product
            id='987878'
            title='Fossil Sport 43 Digital Black Dial Me'
            price='56.99'
            image='https://images-na.ssl-images-amazon.com/images/I/71H6DjbKjHL._UL1500_.jpg'
            rating={4}
          />
          <Product
            id='65489416514'
            title='Fossil The Carlyle Hr Digital Black Dial Men'
            price='98.99'
            image='https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UL1500_.jpg'
            rating={5}
          />

          <Product
            id='654984'
            title='
Panasonic 100 cm (40 inches) Full HD Android Smart LED TV TH-40HS450DX (Black) (2020 Model)'
            price='99.69'
            image='https://images-na.ssl-images-amazon.com/images/I/91auveGcURL._SL1500_.jpg'
            rating={2}
          />
        </div>
        <div className='home__row'>
          <Product
            id='989855'
            title='Samsung 80 cm (32 Inches) HD Ready LED TV UA32T4010ARXXL (Black) (2020 model)
'
            price='65.66'
            image='https://images-na.ssl-images-amazon.com/images/I/81N7bMl70HL._SL1500_.jpg'
            rating={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
