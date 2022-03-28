import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as authApi from "../../apis/auth"

// worker Saga: will be fired on USER_LOGIN actions
function* login(action) {
   try {
       console.log(action)
      const data = yield call(authApi.login, action.payload);
      console.log(data)
      yield put({type: "USER_LOGIN_SUCCEEDED", payload: {
        username: data.username,
        token: data.token
      }});
   } catch (e) {
      yield put({type: "USER_LOGIN_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_LOGIN` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_LOGIN", login);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default mySaga;