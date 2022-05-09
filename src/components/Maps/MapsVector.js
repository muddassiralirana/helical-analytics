import React, { Component } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import WorldVectorMap from "./WorldVectorMap";

class MapsVector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      selectedPlace: [],
      setSelectedMarkers: [],
      markers: [
        { latLng: [38.9940541, -77.4524237], name: "us-east-1" },
        { latLng: [40.0946354, -82.7541337], name: "us-east-2" },
        { latLng: [37.44368, -122.153664], name: "us-west-1" },
        { latLng: [45.9174667, -119.2684488], name: "us-west-2" },
        { latLng: [53.4056545, -6.224503], name: "eu-west-1" },
        { latLng: [51.5085036, -0.0609266], name: "eu-west-2" },
        { latLng: [48.6009709, 2.2976644], name: "eu-west-3" },
        { latLng: [50.0992094, 8.6303932], name: "eu-central-1" },
        { latLng: [-23.4925798, -46.8105593], name: "sa-east-1" },
        { latLng: [1.3218269, 103.6930643], name: "ap-southeast-1" },
        { latLng: [-33.9117717, 151.1907535], name: "ap-southeast-2" },
        { latLng: [35.617436, 139.7459176], name: "ap-northeast-1" },
        { latLng: [37.5616592, 126.8736237], name: "ap-northeast-2" },
        { latLng: [19.2425503, 72.9667878], name: "ap-south-1" },
        { latLng: [45.5, -73.6], name: "ca-central-1" },
        { latLng: [-33.914651, 18.3758801], name: "af-south-1" },
        { latLng: [59.326242, 17.8419717], name: "eu-north-1" },
        { latLng: [45.4628328, 9.1076927], name: "eu-south-1" },
        { latLng: [25.941298, 50.3073907], name: "me-south-1" },
        { latLng: [22.2908475, 114.2723379], name: "ap-east-1" },
        { latLng: [39.8094478, 116.5783234], name: "cn-north-1" },
        { latLng: [37.5024418, 105.1627193], name: "cn-northwest-1" },
      ],
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMarkerSelected = this.onMarkerSelected.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({ selectedPlace: [] });
    this.setState({
      selectedPlace: this.state.markers[marker],
    });
    // setTimeout(() => {
    //   Array.from(document.getElementsByClassName("jvectormap-tip")).forEach(
    //     (el) => {
    //       el.style.display = "none";
    //     }
    //   );
    // }, 100);
  }

  onMarkerSelected(e, code, isSelected) {
    console.log(e, code, isSelected);
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <h4 className="card-title">Data Centre Location</h4>

                {this.state.selectedPlace.length !== 0 ? (
                  <>
                    <p>You selected: {this.state.selectedPlace.name}</p>
                  </>
                ) : (
                  <p className="card-title-dsec">Select any one</p>
                )}

                <div id="world-map-markers" style={{ height: "420px" }}>
                  <WorldVectorMap
                    value="world_mill"
                    width="500"
                    color="#d4dadd"
                    markers={this.state.markers}
                    onMarkerClick={this.onMarkerClick}
                    onMarkerSelected={this.onMarkerSelected}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default MapsVector;
