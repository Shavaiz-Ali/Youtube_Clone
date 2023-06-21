import React from 'react';
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Feed from "./components/Feed";
import SearchResult from './components/SearchResult';
import VideoDetails from "./components/VideoDetails"

import { AppContext } from './context/contextApi';
function App() {
  return (
    <AppContext>
      <Router>
        <div className='flex flex-col h-full'>
          <Header />
          <Routes>
            <Route exact path={'/'} element={<Feed />} />
            <Route exact path={'/SearchResult/:searchQuery'} element={<SearchResult />} />
            <Route exact path={'/video:id'} element={<VideoDetails />} />
          </Routes>
        </div>
      </Router>
    </AppContext>
  );
}

export default App;