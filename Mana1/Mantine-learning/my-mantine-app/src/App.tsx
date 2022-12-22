import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test';
import { MantineProvider} from '@mantine/core';

function App() {
  return (
  <>
   
    <MantineProvider>
    <Test/>
    </MantineProvider>
  </>
  );
}

export default App;
