import TimesheetHistoryTypes from "./TimesheetHistoryActionTypes";

const initialState = {
  getTimesheetHistoryListLoading: false,
  getTimesheetHistoryListResponse: null,
};

const TimesheetHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case TimesheetHistoryTypes.GET_TIMESHEET_HISTORY_LIST_REQUEST:
      return {
        ...state,
        getTimesheetHistoryListLoading: true,
      };
    case TimesheetHistoryTypes.GET_TIMESHEET_HISTORY_LIST_RESPONSE:
      return {
        ...state,
        getTimesheetHistoryListLoading: false,
        getTimesheetHistoryListResponse: action.payload,
      };
    default:
      return state;
  }
};

export default TimesheetHistoryReducer;
