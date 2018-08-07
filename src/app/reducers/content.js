import { ACTIONS } from '../enums';
import pathOr from 'ramda/src/pathOr';

const initialState = {
  isLoaded: false,
  content: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_CONTENT_TYPES:
      return { ...state, isLoaded: true }
    case ACTIONS.GET_OVERVIEW_CONTENT:
      return { ...state, content: { ...state.content, overview: action.data } }
    case ACTIONS.GET_PORTFOLIO_CONTENT:
      return { ...state, content: { ...state.content, portfolio: action.data } }
    case ACTIONS.GET_VIDEO_CONTENT:
      return { ...state, content: { ...state.content, video: action.data } }
    default:
      return state;
  }
};
