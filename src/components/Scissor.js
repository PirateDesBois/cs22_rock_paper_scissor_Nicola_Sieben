import React from 'react';

class Scissor extends React.Component {
      render() {
            return (
                  <div onClick={() => this.props.onNavigation("scissor")} className="scissor d-flex justify-content-center align-items-center  ">
                        <i className="text-grey far fa-hand-scissors"></i>
                  </div>
            )
      }
}

export default Scissor;
