import React, { Component, Fragment } from "react";

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
              style={{ backgroundColor: "rgba(0, 190, 218, 0.75)" }}
            ></div>
            <div className="legend-desc">Visited Node</div>
          </div>
          <div>
            <div className="node node-wall"></div>
            <div className="legend-desc">Wall Node</div>
          </div>
          <div>
            <div
              className="node"
              style={{ backgroundColor: "rgb(255, 254, 106)" }}
            ></div>
            <div className="legend-desc">Shortest Path</div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export class Instructions extends Component {
  render() {
    return (
      <Fragment>
        <div className="container mt-4 text-secondary text-left instructions">
          <p>
            A Pathfinding Algorithm seeks to find the shortest path between two
            points. This web application created in ReactJS visualizes several
            pathfinding algorithms.
          </p>
          <p>
            The algorithms used in this application is the{" "}
            <strong>Dijkstra's Algorithm</strong> which is the father of
            pathfinding algorithms; guarantees the shortest path. In order to visualize the shortest path between the two points,
            click on the button above to visualize the Dijkstra's Algorithm.
          </p>
          <p>
            Walls can be added by clicking on the grid. Walls are impenetrable,
            meaning that a path cannot cross through them. Dragging through the
            grid can also add walls.
          </p>
        </div>
      </Fragment>
    );
  }
}
