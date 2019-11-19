import React, { Component } from 'react';
import sal from 'sal.js'
import Typewriter from 'typewriter-effect';
import ReactTooltip from 'react-tooltip'
import './App.css';
import 'sal.js/dist/sal.css';
class App extends Component {
  componentDidMount() {
    sal();
  }
  render() {
    return (
      <div className="App" id="hero">
        <video autoPlay muted loop id="video">
          <source src="https://mm-videos-102.s3.eu-west-3.amazonaws.com/medaf-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
        <div id="content"></div>
        <div className="title">
          <h1>MEDAF Investments</h1>
        </div>
        <div className="subtitle">
          <Typewriter
            options={{
              strings: ['A NEW <strong style="color:red">TAKE</strong> ON INVESTMENTS', `Fast growing business          group that offers cutting edge services to companies`],
              autoStart: true,
              loop: true,
              delay: 80,
            }}
          />
        </div>

        <div className="container">
          {
            [1, 2, 3, 4, 5, 6, 7, 8].map((element) => (
              <div className="box" key={element} >
                <a data-tip="Medaf">
                  <img src={require(`./images/${element}.jpeg`)} alt={`${element}`} />
                </a>
                <ReactTooltip place="top" type="warning" effect="float" />
              </div>
            ))
          }
        </div>
        <div className="logos">
          <img data-sal="slide-right"
            data-sal-duration="2000"
            data-sal-delay="300"
            data-sal-easing="ease-out-back"
            src={require(`./images/logos/1.png`)} alt="1" />
          <img data-sal="zoom-in"
            data-sal-duration="2000"
            data-sal-delay="400"
            data-sal-easing="ease-out-back" src={require(`./images/logos/2.jpeg`)} alt="2" />
          <img data-sal="slide-down"
            data-sal-duration="2000"
            data-sal-delay="500"
            data-sal-easing="ease-out-back" src={require(`./images/logos/3.jpeg`)} alt="3" />
          <img data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="600"
            data-sal-easing="ease-out-back" src={require(`./images/logos/4.png`)} alt="4" />
          <img data-sal="slide-left"
            data-sal-duration="2000"
            data-sal-delay="700"
            data-sal-easing="ease-out-back" src={require(`./images/logos/5.jpeg`)} alt="5" />

        </div>
      </div>
    );
  }
}

export default App;
