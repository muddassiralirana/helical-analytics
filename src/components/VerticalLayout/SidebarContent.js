import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader,
} from "../../store/actions";

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initMenu();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.type !== prevProps.type) {
        this.initMenu();
      }
    }
  }

  initMenu() {
    new MetisMenu("#side-menu");

    var matchingMenuItem = null;
    var ul = document.getElementById("side-menu");
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
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-active");
          }
        }
      }
      return false;
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">Menu"</li>

            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="ri-dashboard-line"></i>
                <span className="badge badge-pill badge-success float-right">
                  3
                </span>
                <span className="ml-1">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/datamanagement/upload" className="waves-effect">
                <i className="ri-chat-1-line"></i>
                <span className="ml-1">Upload</span>
              </Link>
            </li>

            <li>
              <Link to="/settings" className="waves-effect">
                <i className="ri-settings-3-line"></i>
                <span className="ml-1">Settings</span>
              </Link>
            </li>

            <li>
              <Link to="/" className="has-arrow waves-effect">
                <i className="ri-database-2-line"></i>
                <span className="ml-1">Data Management</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/datamanagement/folders">Folders</Link>
                </li>
                <li>
                  <Link to="/datamanagement/analytics-datatables">
                    Analytics and Datatables
                  </Link>
                </li>
                <li>
                  <Link to="/datamanagement/csv-input">CSV Input</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/" className="has-arrow waves-effect">
                <i className="ri-braces-fill"></i>
                <span className="ml-1">Dicom</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/dicom/dicom-dump">Dicom Dump</Link>
                </li>
                <li>
                  <Link to="/dicom/dicom-dictionary">Dicom Dictionary</Link>
                </li>
                <li>
                  <Link to="/dicom/dicom-summary">Dicom Summary</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/" className="has-arrow waves-effect">
                <i className="ri-braces-fill"></i>
                <span className="ml-1">Trial Management</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/trialmanagement/overview">Overview</Link>
                </li>
                <li>
                  <Link to="/trialmanagement/newtrial">Start a new trial</Link>
                </li>
                <li>
                  <Link to="/trialmanagement/datatable">Datatable</Link>
                </li>
              </ul>
            </li>

            <li className="menu-title">Pages</li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-account-circle-line"></i>
                <span className="ml-1">Authentication</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">Login</Link>
                </li>
                <li>
                  <Link to="#">Register</Link>
                </li>
                <li>
                  <Link to="#">Recover Password</Link>
                </li>
                <li>
                  <Link to="#">Lock Screen</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-profile-line"></i>
                <span className="ml-1">Utility</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">Starter Page</Link>
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
                <li>
                  <Link to="#">Pricing</Link>
                </li>
                <li>
                  <Link to="#">Error 404</Link>
                </li>
                <li>
                  <Link to="#">Error 500</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  return { ...state.Layout };
};

export default withRouter(
  connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changePreloader,
  })(SidebarContent)
);
