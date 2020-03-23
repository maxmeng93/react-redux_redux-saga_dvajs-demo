import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

export function* addTodo() {
  yield console.log('hello sagas!');
};

export function* removeTodo() {
  yield console.log(1);
}

export default function* rootSaga() {
  yield all([
    addTodo(),
    removeTodo(),
  ]);
}
