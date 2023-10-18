
import './App.css';
import React, { useEffect } from 'react';
// import Chartexp from './components/chartjs/Chartexp';
import Axiousexp from './components/chartjs/Axiousexp';

function App() {

  // Disable right-click
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])

  return (
    <div className="App">
      {/* <Chartexp/> */}
      <Axiousexp/>
    </div>
  );
}

export default App;
