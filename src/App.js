import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import SeatsDisp from "./components/SeatsDisp";
import CustomerDisp from "./components/CustomerDisp";
import BookingsDisp from "./components/BookingsDisp";
import AddShow from "./components/AddShow";
import ShowsDisp from "./components/ShowsDisp";
import AddScreen from "./components/AddScreen";
import Screendisp from "./components/Screendisp";
import BookingPage from './components/BookingPage';
import Home from './components/Home';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import AHomePage from "./components/AHomePage";
import MovieDisp from "./components/MovieDisp";
import AddMovie from "./components/AddMovie";
import AddSeats from "./components/AddSeats";
import ContactUs from "./components/ContactUs";
import TicketPage from "./components/TicketPage";
import MultiplexDisp from "./components/MultiplexDisp";
import AddMultiplex from "./components/AddMultiplex";
import SeatSelection from "./components/SeatSelection";
import AdminLogin from "./components/AdminLogin";


function App() {
  return (
    <>
    {/* <br/>
    <br/>
    <br/>
    <br/>
    <h3>This is incarnation of App.js file</h3>
    <LoginPage/>
    <SignUpPage/>
    <About/>
    <ContactUs/>
    <ErrorPage/>
    <Home/>
    <BookingPage/>
    <AHomePage/>
    <MovieDisp/>
    <AddMovie/>
    <Screendisp/>
    <AddScreen/>
    <ShowsDisp/>
    <AddShow/>
    <BookingsDisp/>
    <CustomerDisp/>
    <SeatsDisp/>
    <AddSeats/> */}

    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route exact path="*" element={<ErrorPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route exact path="Home" element={<Home/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Contact" element={<ContactUs/>}/>
      <Route path="/book/:movieId/:movieDescription/:movieDate/:movieHours/:movieRating" element={<BookingPage/>}/>
      <Route path="/moviedisp" element={<MovieDisp/>}/>
      <Route path="/screendisp" element={<Screendisp/>}/>
      <Route path="/seatdisp" element={<SeatsDisp/>}/>
      <Route path="/addmovie" element={<AddMovie/>}/>
      <Route path="/addseat" element={<AddSeats/>}/>
      <Route path="/custdisp" element={<CustomerDisp/>}/>
      <Route path="/bookingdisp" element={<BookingsDisp/>}/>
      <Route path="/addshow/:theatreId/:theatreName/:screenId" element={<AddShow/>}/>
      <Route path="/adminhome" element={<AHomePage/>}/>
      <Route path="/showdisp" element={<ShowsDisp/>}/>
      <Route path="/addscreen/:theatreId" element={<AddScreen/>}/>
      <Route path="/ticket/:movieId/:theatreId/:theatreName/:showId/:showStartTime/:showDate/:selected/:totalprice" element={<TicketPage/>}/>
      <Route path="/muldisp" element={<MultiplexDisp/>}/>
      <Route path="/addmul" element={<AddMultiplex/>}/>
      <Route path="/seatsel/:movieId/:theatreId/:theatreName/:showId/:showStartTime/:showDate" element={<SeatSelection/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>

    </Routes>
</>
  );
}

export default App;
