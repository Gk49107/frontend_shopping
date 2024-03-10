import { combineReducers } from "@reduxjs/toolkit";
import TimesheetHistoryReducer from "./TimesheetHistory/TimesheetHistoryReducer";
// import GetUserReducer from "./GetUser/GetUserReducer";

const rootReducer = combineReducers({
  // getUserReducer: GetUserReducer,
  timesheetHistoryReducer: TimesheetHistoryReducer,
});

export default rootReducer;
