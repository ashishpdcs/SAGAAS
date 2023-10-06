import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  loginFailure,
  loginSuccess,
} from "./actions";
import { LOGIN_REQUEST} from "./actionTypes";

const login = async (payload: { name: string; email: string ; mobileNo : string ; description : string}) => {
    const { data } = await axios.post<any>(
        "https://localhost:7256/api/Contactus/SaveContactUs",
        { name: payload.name , email: payload.email , mobileNo : payload.mobileNo , description : payload.description},
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
//   return data;
};

function* loginSaga(action: any) {
  try {
    const response: { token: string } = yield call(login, {
      name: action.payload.values.name,
      email: action.payload.values.email,
      mobileNo: action.payload.values.mobileNo,
      description: action.payload.values.description,
    });

    yield put(
      loginSuccess({
        token: response.token,
      })
    );
    action.payload.callback(response.token);
  } catch (e: any) {
    yield put(
      loginFailure({
        error: e.message,
      })
    );
  }
}

function* authSaga() {
  yield all([takeLatest(LOGIN_REQUEST, loginSaga)]);
}

export default authSaga;