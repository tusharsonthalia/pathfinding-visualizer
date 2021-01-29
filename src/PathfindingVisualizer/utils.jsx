import React, {Component, Fragment} from 'react';

export class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light text-light bg-dark py-3">
          <span className="nav-text mx-auto">
            Pathfinding Algorithm Visualizer
          </span>
        </nav>
      </Fragment>
    );
  }
}
export class Legend extends Component {
  render() {
    return (
      <Fragment>
        <div className="legend-grid">
          <div>
            <div className="node node-start"></div>
            <div className="legend-desc">Start Node</div>
          </div>
          <div>
            <div className="node node-finish"></div>
            <div className="legend-desc">End Node</div>
          </div>
          <div>
            <div
              className="node"
              style={{backgroundColor: 'rgba(0, 190, 218, 0.75)'}}></div>
            <div className="legend-desc">Visited Node</div>
          </div>
          <div>
            <div className="node node-wall"></div>
            <div className="legend-desc">Wall Node</div>
          </div>
          <div>
            <div
              className="node"
              style={{backgroundColor: 'rgb(255, 254, 106)'}}></div>
            <div className="legend-desc">Shortest Path</div>
          </div>
        </div>
      </Fragment>
    );
  }
}
