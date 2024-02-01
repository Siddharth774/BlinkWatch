import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import BookTickets from './components/BookTickets';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/show/:id" element={<ShowDetails />} />
        <Route path="/book/:id" element={<BookTickets />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;