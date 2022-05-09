import {
  CHANGE_LAYOUT,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_TYPE,
  TOGGLE_RIGHT_SIDEBAR,
  SHOW_RIGHT_SIDEBAR,
  CHANGE_PRELOADER,
  HIDE_RIGHT_SIDEBAR,
} from "./actionTypes";

export const changeLayout = (layout) => ({
  type: CHANGE_LAYOUT,
  payload: layout,
});

export const changePreloader = (layout) => ({
  type: CHANGE_PRELOADER,
  payload: layout,
});

export const changeSidebarTheme = (theme, layoutType) => ({
  type: CHANGE_SIDEBAR_THEME,
  payload: { theme, layoutType },
});

export const changeSidebarType = (sidebarType, isMobile) => {
  return {
    type: CHANGE_SIDEBAR_TYPE,
    payload: { sidebarType, isMobile },
  };
};

export const toggleRightSidebar = () => ({
  type: TOGGLE_RIGHT_SIDEBAR,
  payload: null,
});

export const showRightSidebar = () => ({
  type: SHOW_RIGHT_SIDEBAR,
  payload: null,
});

export const hideRightSidebar = () => ({
  type: HIDE_RIGHT_SIDEBAR,
  payload: null,
});
