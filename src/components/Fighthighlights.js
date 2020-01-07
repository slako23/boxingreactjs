import React, { Component } from 'react';



class Fighterhighlights extends Component {
    render() {
        
      return (
            
        <div>

            <div className="container" id="fighthighlights">
                <h3>FIGHT HIGHLIGHTS</h3>
                    <div className="row">
                        <div className="col">
                            <h4>Spence vs Porter</h4>
                            <iframe width="100%" height="300" src="https://www.youtube.com/embed/cKizQI8F7Cw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col">
                            <h4>Stevenson vs Gonzalez</h4>
                            <iframe width="100%" height="300" src="https://www.youtube.com/embed/ucaCm2kd3C4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col">
                            <h4>Lomachenko vs Russel Jr</h4>
                            <iframe width="100%" height="300" src="https://www.youtube.com/embed/Z55XXdpn4xE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
        </div>

      );
    }
  }
  
  export default Fighterhighlights;