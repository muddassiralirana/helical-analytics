import React, { Component } from "react";
import { VectorMap } from "react-jvectormap";
import "./jquery-jvectormap.css";

export class WorldVectorMap extends Component {
  render() {
    return (
      <div style={{ width: this.props.width, height: 500 }}>
        <VectorMap
          markersSelectableOne={true}
          map={this.props.value}
          backgroundColor="transparent"
          ref="map"
          markerStyle={{
            initial: {
              fill: "#6773d6",
              stroke: "#a1a9e4",
              "fill-opacity": 1,
              "stroke-width": 3,
              "stroke-opacity": 1,
              r: 8,
            },
            // hover: {
            //   stroke: "#6773d6",
            //   "stroke-width": 2,
            //   cursor: "pointer",
            // },
            selected: {
              fill: "#CA0020",
            },
            // selectedHover: {
            //   fill: "#ff0000",
            //   color: "#ff0000",
            // },
          }}
          markers={this.props.markers}
          onMarkerClick={this.props.onMarkerClick}
          onMarkerSelected={this.props.onMarkerSelected}
          containerStyle={{
            width: "100%",
            height: "80%",
          }}
          regionStyle={{
            initial: {
              fill: this.props.color,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
          }}
          containerClassName="map"
        />
      </div>
    );
  }
}

export default WorldVectorMap;
