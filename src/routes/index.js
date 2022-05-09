import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";

import Dashboard from "../pages/Dashboard/index";
import Folders from "../pages/DataManagement/Folders";
import AnalyticsDatatables from "../pages/DataManagement/AnalyticsDatatables";
import Settings from "../pages/Settings/Settings";
import CSVInput from "../pages/DataManagement/CSVInput";
import Overview from "../pages/TrialManagement/Overview";
import Datatable from "../pages/TrialManagement/Datatable";
import NewTrial from "../pages/TrialManagement/NewTrial";

//! to be replaced in other screens
import UploadScreen from "../pages/DataManagement/FoldersOptions/ReceivedScanFolders/UploadScreen";
import DicomDump from "../pages/Dicom/DicomDump";

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },

  // data management routes
  { path: "/datamanagement/folders", component: Folders },
  {
    path: "/datamanagement/analytics-datatables",
    component: AnalyticsDatatables,
  },
  { path: "/datamanagement/csv-input", component: CSVInput },

  //  to be removed later
  { path: "/datamanagement/upload", component: UploadScreen },

  { path: "/settings", component: Settings },

  { path: "/dicom/dicom-dump", component: DicomDump },

  //trial management routes
  { path: "/trialmanagement/overview", component: Overview },
  { path: "/trialmanagement/datatable", component: Datatable },
  { path: "/trialmanagement/newtrial", component: NewTrial },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  { path: "/auth-lock-screen", component: AuthLockScreen },
];

export { authProtectedRoutes, publicRoutes };
