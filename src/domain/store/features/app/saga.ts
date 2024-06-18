'use client'

import { fork, put, takeLatest } from 'redux-saga/effects'

import { delay } from '@/domain/utils/delay'
import {
  appStart,
  setReady,
} from './actions'

function* start() {
  try {
    yield put(setReady(true))
    console.log('App started!')
  } catch (err) {
    console.error(err)
  }
}

function* appWatcher() {
  yield takeLatest(appStart, start)
}

export function* appSaga() {
  yield fork(appWatcher)

  yield delay(250)
  yield put(appStart())
}
