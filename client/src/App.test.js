import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import * as rtl from '@testing-library/react';
import { render} from '@testing-library/react';
import Players from './components/Players'
import NavBar from './components/NavBar';
afterEach(rtl.cleanup);




test('Render trends on app', ()=>{
  const {getByText} = render(<App/>);
  const element = getByText(/trends/i)
  expect(element).toBeVisible();
  
})

test('Render players', ()=>{
  const {getByText} = render(<App/>);
  const element = getByText(/players/i);
  expect(element).toBeVisible();
})

test('Render tennis', ()=>{
  const {getByText} = render(<App/>);
  const element = getByText(/tennis/i);
  expect(element).toBeVisible();
})




