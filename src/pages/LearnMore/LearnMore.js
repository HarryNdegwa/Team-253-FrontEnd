import React from 'react';

import Carousel from '../../components/Carousel/Carousel';
import SpeedLimit from '../../components/Cards/SpeedLimit';
import TrafficLights from '../../components/Cards/TrafficLights';
import RoadSafety from '../../components/Cards/RoadSafety';
import RoadSigns from '../../components/Cards/RoadSigns';

import "./LearnMore.css";


function LearnMore() {
    return (
      <main className="main col-md-9 col-lg-7 mx-auto my-5">
        <Carousel/>
        <h3 className="text-center">Learn More</h3>
        <div className="container cards">
          <SpeedLimit/>
          <TrafficLights/>
          <RoadSafety/>
          <RoadSigns/>
        </div>
      </main>
    )
}


export default LearnMore