import { all } from "redux-saga/effects";
import { TimesheetHistoryWatcherSaga } from "./TimesheetHistory/TimesheetHistorySaga";
// import { LoginWatcherSaga } from "./LoginPage/LoginSaga";

export default function* RootSaga() {
  yield all([
    // LoginWatcherSaga()
    TimesheetHistoryWatcherSaga(),
  ]);
}
