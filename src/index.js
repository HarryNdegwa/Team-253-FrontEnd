import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// import Carousel from './components/Carousel/Carousel';
import LearnMore from './pages/LearnMore/LearnMore';

import './index.css';




// ReactDOM.render(<Carousel/>, document.getElementById('root'));
ReactDOM.render(<LearnMore/>, document.getElementById('root'));
    

serviceWorker.unregister();
