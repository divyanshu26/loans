import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom';
import MainHeader from './Components/MainHeader';
import GetLoan from './Pages/GetLoan';
import DashBoard from './Pages/Dashboard';
import {useEffect, useState} from 'react';

let coordinates = {};


function getLocation() {
  console.log('get location');
  if (navigator.geolocation) {
    
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.log('not exist');
    let val = null;
  }
}

function showPosition(position) {
 console.log('position');
 
 coordinates.accuracy = position.coords.accuracy;
 coordinates.longitude = position.coords.longitude;
 coordinates.latitude = position.coords.latitude; 
 console.log(coordinates);
 //coordinates = JSON.stringify(coordinates);
}

function App() {
  console.log('app');
  const [loanDetails, setLoanDetails] = useState([]);
  useEffect(()=>{
    console.log('use effect');
    getLocation();
   },[]);
  return (
   <>
    <MainHeader/>
     <main>
      <Switch>
        <Route path ={'/'} exact>
          <Redirect to={'/get-loan'}/>
        </Route>
        <Route path={'/get-loan'}>
          <GetLoan applyLoan={setLoanDetails}/>
        </Route>
        <Route path={'/dashboard'}>
          <DashBoard loanDetails={loanDetails} payLoan={setLoanDetails}/>
        </Route>
      </Switch>
     </main>
   </>
  );
}

export default App;
