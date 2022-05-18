import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import ProjectScreen from './Screens/ProjectScreen';
import LoginScreen from './Screens/LoginScreen';
import ProjectDetailsScreen from './Screens/ProjectDetailsScreen';
import HomeScreen from './Screens/HomeScreen';
import StartScreen from './Screens/StartScreen';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/home' element={<HomeScreen />} exact/>
        <Route path='/projects' element={<ProjectScreen />} exact/>
        <Route path='/login' element={<LoginScreen />} exact/>
        <Route path='/start' element={<StartScreen />} exact/>
        <Route path='/project/:id' element={<ProjectDetailsScreen />} exact/>
      </Routes>
    </div>
  )
}

export default App;
