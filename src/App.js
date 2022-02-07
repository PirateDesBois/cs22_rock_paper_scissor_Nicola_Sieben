import React from 'react';
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Rock from './components/Rock'
import Scissor from './components/Scissor'
import Paper from './components/Paper'

class App extends React.Component {
      constructor() {
            super();
            this.state = {
                  step: "step1",
                  score: 0,
                  choice: "",
                  random: "",
                  winner: "",
            };
      }
      onNavigation = (element) => {
            let x = { ...this.state }
            x.choice = element;
            x.step = "step2";
            x.random = Math.floor(Math.random() * 3);
            // Conditions de victoire ou de défaite 
            { x.choice === "rock" && x.random === 0 ? (x.score += 0) : console.log('je ne sais pas quoi mettre ici') }
            { x.choice === "paper" && x.random === 2 ? (x.score += 0) : console.log('je ne sais pas quoi mettre ici') }
            { x.choice === "scissor" && x.random === 1 ? (x.score += 0) : console.log('je ne sais pas quoi mettre ici') }
            { x.choice === "rock" && x.random === 1 ? (x.score += 1) : console.log('je ne sais pas quoi mettre ici') }
            { x.choice === "rock" && x.random === 2 ? (x.score -= 1) : console.log('je ne sais pas quoi mettre ici') }
            { x.choice === "paper" && x.random === 0 ? (x.score += 1) : console.log('je ne sais pas quoi mettre ici') }
            { x.choice === "paper" && x.random === 1 ? (x.score -= 1) : console.log('je ne sais pas quoi mettre ici') }
            { x.choice === "scissor" && x.random === 0 ? (x.score -= 1) : console.log('je ne sais pas quoi mettre ici') }
            { x.choice === "scissor" && x.random === 2 ? (x.score += 1) : console.log('je ne sais pas quoi mettre ici') }
            
            
            // Affichage du gagnant / perdant
            { x.choice === "rock" && x.random === 1 ?  (x.winner = "lose") : console.log('je ne sais pas quoi mettre ici');}
            { x.choice === "rock" && x.random === 2 ?(x.winner = "win") : console.log('je ne sais pas quoi mettre ici') }
            { x.choice === "paper" && x.random === 0 ? (x.winner = "lose") : console.log('je ne sais pas quoi mettre ici');}
            { x.choice === "paper" && x.random === 1 ? (x.winner = "win") : console.log('je ne sais pas quoi mettre ici') }
            { x.choice === "scissor" && x.random === 0 ? (x.winner = "win") : console.log('je ne sais pas quoi mettre ici') }
            { x.choice === "scissor" && x.random === 2 ? (x.winner = "lose") : console.log('je ne sais pas quoi mettre ici');}
            this.setState(x)
            console.log(x);
            console.log(this.state);
      }
      render() {
            return (
                  <div className="App">
                        <div className="section1">
                              <div className="container">
                                    <div className="row justify-content-center">
                                          <div className="col-12">
                                                <div className=" blocPrincipal row justify-content-between border border-secondary border-4 mt-3">
                                                      <div className="col-2">
                                                            <div className="bloc1 ">
                                                                  <p className=" textbloc1 text-light text-uppercase fs-1 fw-bold m-3">rock paper scissors</p>
                                                            </div>
                                                      </div>
                                                      <div className="bloc2 d-flex justify-content-center align-items-center flex-column col-2 bg-light rounded-3 m-3">
                                                            <p className=" text-uppercase fs-5 fw-bold purple p-0 m-0">score</p>
                                                            <span className="text-uppercase scoreNbr text-center fw-bold text-grey">{this.state.score}</span>
                                                      </div>
                                                </div>
                                          </div>
                                          {this.state.step === "step1" &&
                                                <Step1 onNavigation={this.onNavigation} />
                                          }
                                          {this.state.step === "step2" &&
                                                <Step2 jeu={this.state.choice} randomise={this.state.random} />
                                          }
                                          {this.state.random === 0 &&
                                                <div className="col-12 d-flex justify-content-center align-items-center flex-column my-3">
                                                      <h2 className="text-light text-center pb-5 fs-1">House {this.state.winner} </h2>
                                                      <Rock  />
                                                </div>
                                          }
                                          {this.state.random === 1 &&
                                                <div className="col-12 d-flex justify-content-center align-items-center flex-column my-3">
                                                      <h2 className="text-light text-center pb-5 fs-1">House {this.state.winner}</h2>
                                                      <Scissor />
                                                </div>
                                          }
                                          {this.state.random === 2 &&
                                                <div className="col-12 d-flex justify-content-center align-items-center flex-column my-3">
                                                      <h2 className="text-light text-center pb-5 fs-1">House {this.state.winner}</h2>
                                                      <Paper />
                                                </div>
                                          }
                                    </div>
                              </div>
                              <footer>
                                    <div className="container">
                                          <div className="row">
                                                <div className="col-12  mt-5 d-flex justify-content-center py-5">
                                                      {/* <!-- Button modal --> */}
                                                      <button type="button" className=" rules btn btn-outline-secondary text-light rounded-1 text-uppercase " data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            rules
                                                      </button>

                                                      {/* modal */}
                                                      <div className="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div className="modal-dialog border border-0">
                                                                  <div className="modal-content border border-0 ">
                                                                        <div className="modal-header bg-warning border border-0">
                                                                              <h5 className="modal-title text-center" id="exampleModalLabel">Rules</h5>
                                                                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                        <div className="modal-body py-3 bg-primary d-flex justify-content-center border border-0">
                                                                              <img src="./img/image-rules.svg" alt="rules" />
                                                                        </div>
                                                                        <div className="modal-footer d-flex justify-content-center bg-danger border border-0">
                                                                              <button type="button" className="btn btn-light text-danger" data-bs-dismiss="modal">Close</button>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </footer>
                        </div>
                  </div>
            )
      }
}
export default App;
