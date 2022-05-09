import React, { Component } from "react";
import { Row, Col, Collapse, Container } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({});
    }
  }

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <div className="topnav">
          <Container fluid>
            <nav
              className="navbar navbar-light navbar-expand-lg topnav-menu"
              id="navigation"
            >
              <Collapse
                isOpen={this.props.menuOpen}
                className="navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                      <i className="ri-dashboard-line mr-2"></i> Dashboard
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ uiState: !this.state.uiState });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-uielement"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-pencil-ruler-2-line mr-2"></i>
                      UI Elements <div className="arrow-down"></div>
                    </Link>

                    <div
                      className={classname(
                        "dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl",
                        { show: this.state.uiState }
                      )}
                      aria-labelledby="topnav-uielement"
                    >
                      <Row>
                        <Col lg={4}>
                          <div>
                            <Link to="#" className="dropdown-item">
                              Alerts
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Buttons
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Cards
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Carousel
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Dropdowns
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Grid
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Images
                            </Link>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div>
                            <Link to="#" className="dropdown-item">
                              Lightbox
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Modals
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Range Slider
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Round slider
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Session Timeout
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Progress Bars
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Sweet-Alert
                            </Link>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div>
                            <Link to="#" className="dropdown-item">
                              Tabs & Accordions
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Typography
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Video
                            </Link>
                            <Link to="#" className="dropdown-item">
                              General
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Rating
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Notifications
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ appState: !this.state.appState });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-apps"
                      role="button"
                    >
                      <i className="ri-apps-2-line mr-2"></i>
                      Apps <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.appState,
                      })}
                      aria-labelledby="topnav-apps"
                    >
                      <Link to="/datamanagement" className="dropdown-item">
                        Data Management
                      </Link>
                      <Link to="#" className="dropdown-item">
                        Chat
                      </Link>
                      <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                              emailState: !this.state.emailState,
                            });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-email"
                          role="button"
                        >
                          Email <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.emailState,
                          })}
                          aria-labelledby="topnav-email"
                        >
                          <Link to="#" className="dropdown-item">
                            Inbox
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Read Email
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                              ecommerceState: !this.state.ecommerceState,
                            });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-ecommerce"
                          role="button"
                        >
                          Data Management <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.ecommerceState,
                          })}
                          aria-labelledby="topnav-ecommerce"
                        >
                          <Link to="#" className="dropdown-item">
                            Products
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Product Detail
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Orders
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Customers
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Cart
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Checkout
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Shops
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Add Product
                          </Link>
                        </div>
                      </div>

                      <Link to="/trialmanagement" className="dropdown-item">
                        Trial Management
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                          componentState: !this.state.componentState,
                        });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-components"
                      role="button"
                    >
                      <i className="ri-stack-line mr-2"></i>
                      Components <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.componentState,
                      })}
                      aria-labelledby="topnav-components"
                    >
                      <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({ formState: !this.state.formState });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-form"
                          role="button"
                        >
                          Forms <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.formState,
                          })}
                          aria-labelledby="topnav-form"
                        >
                          <Link to="#" className="dropdown-item">
                            Elements
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Validation
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Advanced Plugins
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Editors
                          </Link>
                          <Link to="#" className="dropdown-item">
                            File Upload
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Xeditable
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Wizard
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Mask
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                              tableState: !this.state.tableState,
                            });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-table"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Tables <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.tableState,
                          })}
                          aria-labelledby="topnav-table"
                        >
                          <Link to="#" className="dropdown-item">
                            Basic Tables
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Data Tables
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Responsive Table
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Editable Table
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                              chartState: !this.state.chartState,
                            });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-charts"
                        >
                          Charts <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.chartState,
                          })}
                          aria-labelledby="topnav-charts"
                        >
                          <Link to="#" className="dropdown-item">
                            Apex charts
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Chartjs
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Jquery Knob Chart
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Sparkline Chart
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({ iconState: !this.state.iconState });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-icons"
                        >
                          Icons <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.iconState,
                          })}
                          aria-labelledby="topnav-icons"
                        >
                          <Link to="#" className="dropdown-item">
                            Remix Icons
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Material Design
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Dripicons
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Font awesome 5
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({ mapState: !this.state.mapState });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-map"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Maps <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.mapState,
                          })}
                          aria-labelledby="topnav-map"
                        >
                          <Link to="#" className="dropdown-item">
                            Google Maps
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Vector Maps
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ extraState: !this.state.extraState });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-more"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ri-file-copy-2-line mr-2"></i>
                      Pages <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.extraState,
                      })}
                      aria-labelledby="topnav-more"
                    >
                      <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({ authState: !this.state.authState });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-auth"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Authentication <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.authState,
                          })}
                          aria-labelledby="topnav-auth"
                        >
                          <Link to="#" className="dropdown-item">
                            Login
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Register
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Recover Password
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Lock Screen
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                              utilityState: !this.state.utilityState,
                            });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-utility"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Utility <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.utilityState,
                          })}
                          aria-labelledby="topnav-utility"
                        >
                          <Link to="#" className="dropdown-item">
                            Starter Page
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Maintenance
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Coming Soon
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Timeline
                          </Link>
                          <Link to="#" className="dropdown-item">
                            FAQs
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Pricing
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Error 404
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Error 500
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Collapse>
            </nav>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { leftSideBarType, leftSideBarTheme } = state.Layout;
  return { leftSideBarType, leftSideBarTheme };
};

export default withRouter(connect(mapStatetoProps, {})(Navbar));
