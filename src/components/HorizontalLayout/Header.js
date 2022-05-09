import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

// reactstrap
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  FormGroup,
} from "reactstrap";

// Import menuDropdown
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

//Import Logos
import logosm from "../../assets/images/logo-sm.png";
import LogoHelicalAnalytics from "../../assets/images/LogoHelicalAnalytics.png";

// profile images
import github from "../../assets/images/brands/github.png";
import bitbucket from "../../assets/images/brands/bitbucket.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import slack from "../../assets/images/brands/slack.png";

//Import mega menu image
import megamenuImg from "../../assets/images/megamenu-img.png";

// Redux Store
import { toggleRightSidebar } from "../../store/actions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      isMegaMenu: false,
      isProfile: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleRightbar = this.toggleRightbar.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch = () => {
    this.setState({ isSearch: !this.state.isSearch });
  };
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.openLeftMenuCallBack();
  }

  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar();
  }

  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex align-items-center">
              <div className="navbar-brand-box">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logosm} alt="Helical Analytics" height="40" />
                  </span>
                  <span className="logo-lg">
                    <img
                      src={LogoHelicalAnalytics}
                      alt="Helical Analytics"
                      width="120px"
                      height="60px"
                    />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logosm} alt="Helical Analytics" height="40" />
                  </span>
                  <span className="logo-lg">
                    <img
                      src={LogoHelicalAnalytics}
                      alt="Helical Analytics"
                      width="120px"
                      height="60px"
                    />
                  </span>
                </Link>
              </div>

              <Button
                color="none"
                type="button"
                size="sm"
                onClick={this.toggleMenu}
                className="px-3 font-size-24 d-lg-none header-item"
                data-toggle="collapse"
                data-target="#topnav-menu-content"
              >
                <i className="ri-menu-2-line align-middle"></i>
              </Button>

              <Form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <span className="ri-search-line"></span>
                </div>
              </Form>

              <Dropdown
                isOpen={this.state.isMegaMenu}
                toggle={() =>
                  this.setState({ isMegaMenu: !this.state.isMegaMenu })
                }
                className="dropdown-mega d-none d-lg-block ml-2"
              >
                <DropdownToggle
                  tag="button"
                  type="button"
                  className="btn header-item waves-effect"
                >
                  Mega Menu <i className="mdi mdi-chevron-down"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-megamenu">
                  <Row>
                    <Col sm={8}>
                      <Row>
                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">UI Components</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">Lightbox</Link>
                            </li>
                            <li>
                              <Link to="#">Range Slider</Link>
                            </li>
                            <li>
                              <Link to="#">Sweet Alert</Link>
                            </li>
                            <li>
                              <Link to="#">Rating</Link>
                            </li>
                            <li>
                              <Link to="#">Forms</Link>
                            </li>
                            <li>
                              <Link to="#">Tables</Link>
                            </li>
                            <li>
                              <Link to="#">Charts</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">Applications</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="/datamanagement">Data Management</Link>
                            </li>
                            <li>
                              <Link to="#">Calendar</Link>
                            </li>
                            <li>
                              <Link to="#">Email</Link>
                            </li>
                            <li>
                              <Link to="#">Projects</Link>
                            </li>
                            <li>
                              <Link to="#">Tasks</Link>
                            </li>
                            <li>
                              <Link to="#">Contacts</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">Extra Pages</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">Light Sidebar</Link>
                            </li>
                            <li>
                              <Link to="#">Compact Sidebar</Link>
                            </li>
                            <li>
                              <Link to="#">Horizontal layout</Link>
                            </li>
                            <li>
                              <Link to="#">Maintenance</Link>
                            </li>
                            <li>
                              <Link to="#">Coming Soon</Link>
                            </li>
                            <li>
                              <Link to="#">Timeline</Link>
                            </li>
                            <li>
                              <Link to="#">FAQs</Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={4}>
                      <Row>
                        <Col sm={6}>
                          <h5 className="font-size-14 mt-0">UI Components</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">Lightbox</Link>
                            </li>
                            <li>
                              <Link to="#">Range Slider</Link>
                            </li>
                            <li>
                              <Link to="#">Sweet Alert</Link>
                            </li>
                            <li>
                              <Link to="#">Rating</Link>
                            </li>
                            <li>
                              <Link to="#">Forms</Link>
                            </li>
                            <li>
                              <Link to="#">Tables</Link>
                            </li>
                            <li>
                              <Link to="#">Charts</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col sm={5}>
                          <div>
                            <img
                              src={megamenuImg}
                              alt=""
                              className="img-fluid mx-auto d-block"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </DropdownMenu>
              </Dropdown>
            </div>

            <div className="d-flex">
              <div className="dropdown d-inline-block d-lg-none ml-2">
                <Button
                  color="none"
                  type="button"
                  onClick={() => {
                    this.setState({ isSearch: !this.state.isSearch });
                  }}
                  className="header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                >
                  <i className="ri-search-line"></i>
                </Button>
                <div
                  className={
                    this.state.isSearch
                      ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show"
                      : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                  }
                  aria-labelledby="page-header-search-dropdown"
                >
                  <Form className="p-3">
                    <FormGroup className="m-0">
                      <InputGroup>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <InputGroupAddon addonType="append">
                          <Button color="primary" type="submit">
                            <i className="ri-search-line"></i>
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </div>
              </div>

              <Dropdown
                isOpen={this.state.isProfile}
                toggle={() =>
                  this.setState({ isProfile: !this.state.isProfile })
                }
                className="d-none d-lg-inline-block ml-1"
              >
                <DropdownToggle
                  tag="button"
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                >
                  <i className="ri-apps-2-line"></i>
                </DropdownToggle>
                <DropdownMenu right className="dropdown-menu-lg">
                  <div className="px-lg-2">
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={github} alt="Github" />
                          <span>GitHub</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={bitbucket} alt="bitbucket" />
                          <span>Bitbucket</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={dribbble} alt="dribbble" />
                          <span>Dribbble</span>
                        </Link>
                      </Col>
                    </Row>

                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={dropbox} alt="dropbox" />
                          <span>Dropbox</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={mail_chimp} alt="mail_chimp" />
                          <span>Mail Chimp</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={slack} alt="slack" />
                          <span>Slack</span>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </DropdownMenu>
              </Dropdown>

              <div className="dropdown d-none d-lg-inline-block ml-1">
                <Button
                  type="button"
                  color="none"
                  onClick={this.toggleFullscreen}
                  className="header-item noti-icon waves-effect"
                  data-toggle="fullscreen"
                >
                  <i className="ri-fullscreen-line"></i>
                </Button>
              </div>

              <NotificationDropdown />

              <ProfileMenu />

              <div
                onClick={this.toggleRightbar}
                className="dropdown d-inline-block"
              >
                <Button
                  type="button"
                  color="none"
                  className="header-item noti-icon right-bar-toggle waves-effect"
                >
                  <i className="ri-settings-2-line"></i>
                </Button>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { layoutType } = state.Layout;
  return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(Header);
