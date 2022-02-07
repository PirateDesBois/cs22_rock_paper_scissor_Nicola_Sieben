import React from 'react';
import Rock from './Rock';
import Scissor from './Scissor';
import Paper from './Paper';

class Step1 extends React.Component {
      constructor(props) {
            super(props);
      }
      render() {
            return (
                  <div className="triangleDiv">
                        <div className="row">
                              <div className="col-12">
                                    <h2 className="text-light text-center pb-5 fs-1">Choose your hand</h2>
                              </div>
                        </div>
                        <div className="row ">
                              <div className="col-4 d-flex justify-content-center">
                                    <Rock onNavigation={this.props.onNavigation}/>
                              </div>
                              <div className="col-4  d-flex justify-content-center">
                                    <Scissor onNavigation={this.props.onNavigation} />
                              </div>
                              <div className="col-4  d-flex justify-content-center">
                                    <Paper onNavigation={this.props.onNavigation} />
                              </div>



                        </div>

                  </div>
            )
      }
}

export default Step1;