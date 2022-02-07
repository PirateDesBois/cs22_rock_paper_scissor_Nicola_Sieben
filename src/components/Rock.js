import React from 'react';

class Rock extends React.Component {
      render() {
            return (
                  <div onClick={() => this.props.onNavigation("rock")} className="rock d-flex justify-content-center align-items-center ">
                        <i className="text-grey far fa-hand-rock"></i>
                  </div>
            )
      }
}

export default Rock;
