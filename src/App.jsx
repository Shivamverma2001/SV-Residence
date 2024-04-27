import './App.css'
import React from 'react'
import AddRoom from './components/room/AddRoom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import ExistingRooms from './components/room/ExistingRooms';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/home/Home';
import EditRoom from './components/room/EditRoom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import RoomListing from './components/room/RoomListing';
import Checkout from './components/booking/Checkout'
import Admin from './components/admin/Admin';
import BookingSuccess from './components/booking/BookingSuccess';
import Bookings from './components/booking/Bookings';

function App() {

  return (
    <>
    <main>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/edit-room/:roomId' element={<EditRoom/>}/>
          <Route path='/existing-rooms' element={<ExistingRooms/>}/>
          <Route path='/add-room' element={<AddRoom/>}/>
          <Route path='/book-room/:roomId' element={<Checkout/>}/>
          <Route path='/browse-all-rooms' element={<RoomListing/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/booking-success' element={<BookingSuccess/>}/>
          <Route path='/existing-bookings' element={<Bookings/>}/>
        </Routes>
      </Router>
      <Footer/>
    </main>
    </>
  )
}

export default App