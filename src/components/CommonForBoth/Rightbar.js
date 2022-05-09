import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";

import { connect } from "react-redux";
import {
  hideRightSidebar,
  changeLayout,
  changeSidebarType,
  changePreloader,
} from "../../store/actions";

//SimpleBar
import SimpleBar from "simplebar-react";

import { Link } from "react-router-dom";

import "./rightbar.scss";

class RightSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutType: this.props.layoutType,
      sidebarType: this.props.leftSideBarType,
      layoutWidth: this.props.layoutWidth,
      sidebarTheme: this.props.leftSideBarTheme,
    };
    this.hideRightbar = this.hideRightbar.bind(this);
    this.changeLayout = this.changeLayout.bind(this);
    this.changeLeftSidebarType = this.changeLeftSidebarType.bind(this);
    this.changeThemePreloader = this.changeThemePreloader.bind(this);
  }

  /**
   * Hides the right sidebar
   */
  hideRightbar(e) {
    e.preventDefault();
    this.props.hideRightSidebar();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        layoutType: this.props.layoutType,
        sidebarType: this.props.leftSideBarType,
        sidebarTheme: this.props.leftSideBarTheme,
      });
    }
  }

  changeThemePreloader = () => {
    this.props.changePreloader(!this.props.isPreloader);
  };
  /**
   * Change the layout
   * @param {*} e
   */
  changeLayout(e) {
    if (e.target.checked) {
      this.props.changeLayout(e.target.value);
    }
  }

  // change left sidebar design
  changeLeftSidebarType(e) {
    if (e.target.checked) {
      this.props.changeSidebarType(e.target.value);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="right-bar">
          <SimpleBar style={{ height: "900px" }}>
            <div data-simplebar className="h-100">
              <div className="rightbar-title px-3 py-4">
                <Link
                  to="#"
                  onClick={this.hideRightbar}
                  className="right-bar-toggle float-right"
                >
                  <i className="mdi mdi-close noti-icon"></i>
                </Link>
                <h5 className="m-0">Settings</h5>
              </div>

              <hr className="my-0" />

              <div className="p-4">
                <div className="radio-toolbar">
                  <span className="mb-2 d-block">Layouts</span>
                  <Input
                    type="radio"
                    id="radioVertical"
                    name="radioFruit"
                    value="vertical"
                    checked={this.state.layoutType === "vertical"}
                    onChange={this.changeLayout}
                  />
                  <Label htmlFor="radioVertical">Vertical</Label>
                  {"   "}
                  <Input
                    type="radio"
                    id="radioHorizontal"
                    name="radioFruit"
                    value="horizontal"
                    checked={this.state.layoutType === "horizontal"}
                    onChange={this.changeLayout}
                  />
                  <Label htmlFor="radioHorizontal">Horizontal</Label>
                </div>

                <hr className="mt-1" />

                {this.state.layoutType === "vertical" ? (
                  <React.Fragment>
                    <hr className="mt-1" />
                    <div className="radio-toolbar">
                      <span className="mb-2 d-block" id="radio-title">
                        Left Sidebar Type
                      </span>
                      <Input
                        type="radio"
                        id="sidebarDefault"
                        name="sidebarType"
                        value="default"
                        checked={this.state.sidebarType === "default"}
                        onChange={this.changeLeftSidebarType}
                      />

                      <Label htmlFor="sidebarDefault">Default</Label>
                      {"   "}
                      <Input
                        type="radio"
                        id="sidebarIcon"
                        name="sidebarType"
                        value="icon"
                        checked={this.state.sidebarType === "icon"}
                        onChange={this.changeLeftSidebarType}
                      />
                      <Label htmlFor="sidebarIcon">Icon</Label>
                    </div>

                    <hr className="mt-1" />
                  </React.Fragment>
                ) : null}

                <FormGroup>
                  <span className="mb-2 d-block" id="radio-title">
                    Preloader
                  </span>

                  <div className="custom-control custom-switch">
                    <Input
                      type="checkbox"
                      className="custom-control-input checkbox"
                      id="checkbox_1"
                      checked={this.props.isPreloader}
                      onChange={this.changeThemePreloader}
                    />
                    <Label
                      className="custom-control-label"
                      htmlFor="checkbox_1"
                    >
                      Preloader
                    </Label>
                  </div>
                </FormGroup>
              </div>
            </div>
          </SimpleBar>
        </div>
        <div className="rightbar-overlay"></div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  return { ...state.Layout };
};

export default connect(mapStatetoProps, {
  hideRightSidebar,
  changeLayout,
  changeSidebarType,
  changePreloader,
})(RightSidebar);
