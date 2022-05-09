// @flow
import { all, call, fork, takeEvery } from "redux-saga/effects";

import {
  CHANGE_LAYOUT,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_TYPE,
  TOGGLE_RIGHT_SIDEBAR,
  SHOW_RIGHT_SIDEBAR,
  HIDE_RIGHT_SIDEBAR,
} from "./actionTypes";

/**
 * Changes the body attribute
 */
function changeBodyAttribute(attribute, value) {
  if (document.body) document.body.setAttribute(attribute, value);
  return true;
}

/**
 * Toggle the class on body
 * @param {*} cssClass
 */
function manageBodyClass(cssClass, action = "toggle") {
  switch (action) {
    case "add":
      if (document.body) document.body.classList.add(cssClass);
      break;
    case "remove":
      if (document.body) document.body.classList.remove(cssClass);
      break;
    default:
      if (document.body) document.body.classList.toggle(cssClass);
      break;
  }

  return true;
}

/**
 * Changes the layout type
 * @param {*} param0
 */
function* changeLayout({ payload: layout }) {
  try {
    if (layout === "horizontal") {
      document.body.removeAttribute("data-sidebar");
      document.body.removeAttribute("data-sidebar-size");
    }
    yield call(changeBodyAttribute, "data-layout", layout);
  } catch (error) {}
}

/**
 * Changes the left sidebar theme
 * @param {*} param0
 */
function* changeLeftSidebarTheme({ payload: { theme, layoutType } }) {
  try {
    yield call(changeBodyAttribute, "data-sidebar", theme);
    // if (layoutType === "vertical") {
    //   if (theme === "light")
    //     //Fire action for changing dark theme of topbar
    //     yield put(changeTopbarThemeAction("dark"));
    //   if (theme === "dark")
    //     //Fire action for changing light theme of topbar
    //     yield put(changeTopbarThemeAction("light"));
    // }
  } catch (error) {}
}

/**
 * Changes the left sidebar type
 * @param {*} param0
 */
function* changeLeftSidebarType({ payload: { sidebarType, isMobile } }) {
  try {
    switch (sidebarType) {
      case "icon":
        yield call(changeBodyAttribute, "data-keep-enlarged", "true");
        yield call(manageBodyClass, "vertical-collpsed", "add");
        break;
      case "condensed":
        yield call(manageBodyClass, "sidebar-enable", "add");
        if (!isMobile) yield call(manageBodyClass, "vertical-collpsed", "add");
        break;
      default:
        yield call(changeBodyAttribute, "data-sidebar-size", "");
        yield call(manageBodyClass, "sidebar-enable", "remove");
        if (!isMobile)
          yield call(manageBodyClass, "vertical-collpsed", "remove");
        break;
    }
  } catch (error) {}
}

/**
 * Toggles the rightsidebar
 */
function* toggleRightSidebar() {
  try {
    yield call(manageBodyClass, "right-bar-enabled");
  } catch (error) {}
}

/**
 * Show the rightsidebar
 */
function* showRightSidebar() {
  try {
    yield call(manageBodyClass, "right-bar-enabled", "add");
  } catch (error) {}
}

/**
 * Hides the rightsidebar
 */
function* hideRightSidebar() {
  try {
    yield call(manageBodyClass, "right-bar-enabled", "remove");
  } catch (error) {}
}

/**
 * Watchers
 */
export function* watchChangeLayoutType() {
  yield takeEvery(CHANGE_LAYOUT, changeLayout);
}

export function* watchChangeLeftSidebarTheme() {
  yield takeEvery(CHANGE_SIDEBAR_THEME, changeLeftSidebarTheme);
}

export function* watchChangeLeftSidebarType() {
  yield takeEvery(CHANGE_SIDEBAR_TYPE, changeLeftSidebarType);
}

export function* watchToggleRightSidebar() {
  yield takeEvery(TOGGLE_RIGHT_SIDEBAR, toggleRightSidebar);
}

export function* watchShowRightSidebar() {
  yield takeEvery(SHOW_RIGHT_SIDEBAR, showRightSidebar);
}

export function* watchHideRightSidebar() {
  yield takeEvery(HIDE_RIGHT_SIDEBAR, hideRightSidebar);
}

function* LayoutSaga() {
  yield all([
    fork(watchChangeLayoutType),
    fork(watchChangeLeftSidebarTheme),
    fork(watchChangeLeftSidebarType),
    fork(watchToggleRightSidebar),
    fork(watchShowRightSidebar),
    fork(watchHideRightSidebar),
  ]);
}

export default LayoutSaga;
