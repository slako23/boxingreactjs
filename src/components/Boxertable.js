import React, { Component } from 'react';



class Boxertable extends Component {
    render() {
        

        const boxerName = this.props.fighterTable.map( boxer => (

            <div>{boxer.fighterName}</div>
          ));

          const boxerCountry = this.props.fighterTable.map( boxer => (

            <div>{boxer.fighterCountry}</div>
          ));

          const boxerweightClass = this.props.fighterTable.map( boxer => (

            <div>{boxer.weightClass}</div>
          ));

          const boxerRecord = this.props.fighterTable.map( boxer => (

            <div>{boxer.fighterRecord}</div>
          ));


      return (

                <div>
                    <h4 className="nolimitwarriors">NO LIMIT PROFESSIONAL FIGHTERS</h4>
                     <div className="container" id="fightertable">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">FIGHTER</th>
                                    <th scope="col">COUNTRY</th>
                                    <th scope="col">WEIGHT CLASS</th>
                                    <th scope="col">RECORD</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{boxerName[0]}</td>
                                    <td>{boxerCountry[0]}</td>
                                    <td>{boxerweightClass[0]}</td>
                                    <td>{boxerRecord[0]}</td>
                                </tr>
                                <tr>
                                    <td>{boxerName[1]}</td>
                                    <td>{boxerCountry[1]}</td>
                                    <td>{boxerweightClass[1]}</td>
                                    <td>{boxerRecord[1]}</td>
                                </tr>
                                <tr>
                                    <td>{boxerName[2]}</td>
                                    <td>{boxerCountry[2]}</td>
                                    <td>{boxerweightClass[2]}</td>
                                    <td>{boxerRecord[2]}</td>
                                </tr>
                                <tr>
                                    <td>{boxerName[3]}</td>
                                    <td>{boxerCountry[3]}</td>
                                    <td>{boxerweightClass[3]}</td>
                                    <td>{boxerRecord[3]}</td>
                                </tr>
                                <tr>
                                    <td>{boxerName[4]}</td>
                                    <td>{boxerCountry[4]}</td>
                                    <td>{boxerweightClass[4]}</td>
                                    <td>{boxerRecord[4]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> 
                );
            }
        }

export default Boxertable;