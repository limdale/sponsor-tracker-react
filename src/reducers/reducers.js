import { CLICK_COMPANY } from "actions/search-table-actions";

export default function searchTableReducer(state, action) {
  switch (action.type) {
    case CLICK_COMPANY: {
      return {
        ...state
      };
    }
    default:
      return {
        ...state
      };
  }
}
