import TimesheetHistoryTypes from "./TimesheetHistoryActionTypes";

//------------timesheet history GET--------------------
export const getTimesheetHistoryListRequest = (payload) => ({
  type: TimesheetHistoryTypes.GET_TIMESHEET_HISTORY_LIST_REQUEST,
  payload,
});

export const getTimesheetHistoryListResponse = (payload) => ({
  type: TimesheetHistoryTypes.GET_TIMESHEET_HISTORY_LIST_RESPONSE,
  payload,
});
