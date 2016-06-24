import React from 'react'
import { Router, Route } from 'react-router'
import * as components from './components'
import * as cons from './constants/constants'

const {
  Application,
} = components

export const createRoutes = (store) => {
  return (
    <Route name ='App' component = {Application}>
    </Route>
  );
};
