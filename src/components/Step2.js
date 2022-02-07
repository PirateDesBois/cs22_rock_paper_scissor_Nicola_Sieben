import React from 'react';
import Rock from './Rock';
import Scissor from './Scissor';
import Paper from './Paper';

class Step2 extends React.Component {
      constructor(props) {
            super(props);
      }
      render() {
            return (
                  <div className="divstep2 ">
                        <div className="row ">
                              <div className="col-12 d-flex justify-content-center align-items-center flex-column my-2">
                                    {/* Rechargement de la page  */}
                                    <button className="rules btn btn-outline-secondary text-light rounded-1 text-uppercase" onClick={() => window.location.reload(false)}>Retry</button>
                              </div>

                              <div className="col-12 d-flex justify-content-center align-items-center flex-column my-3">
                                    <h2 className="text-light text-center pb-5 fs-1">Your choice</h2>
                                    {this.props.jeu === "rock" &&
                                          <Rock />
                                    }
                                    {this.props.jeu === "scissor" &&
                                          <Scissor />
                                    }
                                    {this.props.jeu === "paper" &&
                                          <Paper />
                                    }
                              </div>
                        </div>
                  </div>

            )
      }
}

export default Step2;