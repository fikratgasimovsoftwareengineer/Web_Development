import { useState } from 'react';

import Header from './Components/Header';
import InputGroupt from './Components/InputGroupt';
import Results from './Components/Results';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function App(){


    const [userInput, setUserInput] = useState({
        initialInvestment:1000,
        annualInvestment:1500,
        expectedReturn:6,
        duration:10
      });
      
    function handleUserInput(inputIdentifier, newValue){

    setUserInput(prevUserInput=>{
        return {
            ...prevUserInput,
            [inputIdentifier]:+newValue
        }
    });
  }
    const durationIsValid = userInput.duration >= 1;
    return (
        <>
        <Header/>
        <InputGroupt userInput={userInput} onChange={handleUserInput}/>
        { !durationIsValid && <p className="center">Please enter valid duration.</p>}
        { durationIsValid && <Results input = {userInput}/>}
        </>
        
    );

}