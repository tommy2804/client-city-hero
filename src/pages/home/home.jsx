import axios from 'axios';
import React, { useContext, useState } from 'react';
import { MyContext } from '../../context/context';
import './home.css'
import NavigateCards from './navigate/navigateCards';
import Statistics from './statistics/statistics';

const Home = () => {
   
  return (<div className='homePage'>
      <div className='logo'>
        <img className='logoPic' src="/assets/ciytHero-logo.png" alt="" />
        <div className='logoText'> 
          <article style={{fontSize:'26px'}}>
            Welcome to the information management system of "City Hero" company
          </article>
          <article style={{fontSize:'16px'}}>
            Here you can follow all the reports that citizens send you to forward them to inspectors in the field and monitor that everything is going well.
          </article>
          <article style={{fontSize:'16px'}}>
              Not everyone knows that but heros can't win without his guy in the chair, so we are soooo lucky to have you.
          </article>
        </div>
      </div>

      <Statistics></Statistics>
      <NavigateCards></NavigateCards>
  </div>

  );
};

export default Home;
