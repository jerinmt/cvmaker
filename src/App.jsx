import { useState } from 'react';
import './App.css';
import GenInfo from './components/GenInfo';
import EduInfo from './components/EduInfo';
import ExpInfo from './components/ExpInfo';
import ExtraInfo from './components/ExtraInfo';

function App() {
  const [modeType, setModeType] = useState("Edit");

  function printCV() {
    setModeType('Print');
    setTimeout(() => {
      window.print()}, 1000);
    setTimeout(() => {
      setModeType('Show')}, 1000);
  }
  if(modeType==='Edit') {
    return (
      <>
        <GenInfo mode='Edit' />
        <EduInfo mode='Edit' />
        <ExpInfo mode='Edit' />
        <ExtraInfo mode='Edit' />
        <br/>
        <button type='button' onClick={() => {setModeType('Show')}}>Preview</button>
      </>
    );
  } else if(modeType ==='Print') {
    return (
      <>
        <GenInfo mode='Show' />
        <EduInfo mode='Show' />
        <ExpInfo mode='Show' />
        <ExtraInfo mode='Show' />
      </>
    );
  } else {
    return (
      <>
        <GenInfo mode='Show' />
        <EduInfo mode='Show' />
        <ExpInfo mode='Show' />
        <ExtraInfo mode='Show' />
        <br/>
        <button type='button' onClick={() => {setModeType('Edit')}}>Edit</button>
        <button type='button' onClick={printCV}>Print</button>          
      </>
    );
  }
}

export default App
