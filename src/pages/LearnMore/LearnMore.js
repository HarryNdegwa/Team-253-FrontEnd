import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Card from '../../components/Card/Card';

const LearnMore = () => (
  <div class="container">
  <Carousel/>
  <div class="container" className="cards">
  <h3 class="text-center">Learn More</h3>
  <Card/> 
  <Card/> 
  <Card/> 
  <Card/> 
  </div>

</div>
);

LearnMore.propTypes = {};

LearnMore.defaultProps = {};

export default LearnMore;
