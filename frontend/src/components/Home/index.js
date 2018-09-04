import React, {Component} from 'react';
import Home from './Home';

import './style.css';

class HomeComponent extends Component {
  render() {
    return (
<React.Fragment>
      <main className="wrapper">
      <div className="about">
       <h3> About The Carers Service App: </h3>
       <p>` It's a network for Carers to access informaitions, resources and the support
          they need to thrive as a Carer `. </p>
      </div>
      <div>
         <h3>Questions And Answers:</h3>
         <Home />
         </div>
         <h3> Useful Links: </h3>
      <div className="usefulLinks">
        <ul>
          <li> Alzheimer’s Society Website <a href='https://www.alzheimers.org.uk/'>Go</a></li>
          <li> Our Facebook Page <a href='https://www.facebook.com/alzheimerssocietyuk'>Go</a></li>
          <li> Our Twitter Page <a href='https://twitter.com/alzheimerssoc'>Go</a></li>
        </ul>
      </div>
      </main>
   </React.Fragment>
 );
}
}

export default HomeComponent;
