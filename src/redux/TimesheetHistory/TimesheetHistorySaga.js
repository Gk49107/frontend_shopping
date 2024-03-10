import TimesheetHistoryTypes from "./TimesheetHistoryActionTypes";
import { takeLatest, put, call } from "redux-saga/effects";
import { getTimesheetHistoryListResponse } from "./TimesheetHistoryActions";
import axios from "axios";
import { BASE_URL } from "../../baseurl1";
import { getToken } from "../../Utils/autheticateUser";

// import { UnautherizedResponse } from "../GetUser/GetUserActions";

export function* onGetTimesheetHistoryList({ payload }) {
  try {
    const url = BASE_URL + `/time_sheets_history`;
    const config = {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    };

    const response = yield call(() =>
      axios.get(url, config).then((res) => res?.data)
    );
    yield put(getTimesheetHistoryListResponse(response));
  } catch (error) {
    yield put(getTimesheetHistoryListResponse(error));
    //yield put(UnautherizedResponse(error));
  }
}

export function* TimesheetHistoryWatcherSaga() {
  yield takeLatest(
    TimesheetHistoryTypes.GET_TIMESHEET_HISTORY_LIST_REQUEST,
    onGetTimesheetHistoryList
  );
}
