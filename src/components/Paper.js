import React from 'react';

class Paper extends React.Component {
      render() {
            return (
                  <div onClick={() => this.props.onNavigation("paper")} className="paper d-flex justify-content-center align-items-center ">
                        <i className="text-grey far fa-hand-paper"></i>
                  </div>
            )
      }
}

export default Paper;