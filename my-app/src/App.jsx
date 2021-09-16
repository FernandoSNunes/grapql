import React from 'react';
import "./App.css"
import Top_bar from './components/Top_bar'
import AllQuestions from './AllQuestions';
import Nav_bar from './components/Nav_bar';
import Form_modal from './components/Form_modal';

const App = () => {
  return (
    <div className="container-fluid">
      <Top_bar />
      <Nav_bar />
      <AllQuestions />
    </div>
  )
}

export default App