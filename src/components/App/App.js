import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import PartyLeader from "../PartyLeader/PartyLeader"
import GuestList from "../GuestList/GuestList"
import DinnerSupplies from "../DinnerSupplies/DinnerSupplies"
import GuestForm from "../GuestForm/GuestForm"

function App() {
  let [guestList, setGuestList] = useState([]);
  

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])


  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  const addGuest = (guest) => {
    axios({
      method: 'POST',
      url: '/guests',
      data: guest
    }).then(response => {
      getGuests();
    }).catch((error) => {
      console.log('Error', error);
      
    }); 
    
  };


  

  
  return (
    <div className="App">
      <Header/>
      <PartyLeader list={guestList}/>
      <GuestForm addGuest={addGuest}/>
      <GuestList list={guestList}/>
      <DinnerSupplies list={guestList}/>
      <Footer/>
    </div>
  );
}

export default App;
