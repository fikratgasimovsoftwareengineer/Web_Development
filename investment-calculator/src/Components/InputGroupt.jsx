import React from "react";


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons'; // Importing a specific icon

export default function InputGroupt({userInput, onChange}){

  
    const time = <FontAwesomeIcon icon="fa-duotone fa-hourglass-half" />

    return(
        <>  
                <div className="input-group">
                    <div className="input-item1">
                        <label>INITIAL INVESTMENT</label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control 
                                aria-label="Amount (to the nearest dollar)"
                                required
                                type="number"
                                value={userInput.initialInvestment}
                                placeholder="type initial investiment..."
                                
                                onChange={(e) => onChange("initialInvestment", e.target.value)}
                               
                            />
                            
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                    </div>
                    <div className="input-item2">
                        <label>ANNUAL INVESTMENT</label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control 
                                aria-label="Amount (to the nearest dollar)"
                                required
                                type="number"
                                value={userInput.annualInvestment}
                                placeholder="type annual investment..."
                                onChange={(e) =>onChange("annualInvestment", e.target.value)}
                            />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                    </div>
                </div>
           


        <div className="flex2-block">
            <div className="input-item3">
                    <label>EXPECTED RETURN</label>
                    <InputGroup className="mb-3">
                    
                    
                        <InputGroup.Text>$</InputGroup.Text>

                        <Form.Control 
                            aria-label="Amount (to the nearest dollar)"
                            value={userInput.expectedReturn}
                            required
                            type="number"
                            placeholder="type expected return ..."
                            onChange={(e)=>onChange("expectedReturn", e.target.value)}/>

                        <InputGroup.Text>.00</InputGroup.Text>
                        
                        
                        </InputGroup>   
                    </div>
                    <div className="input-item4">
                        <label>DURATION</label>
                        <InputGroup className="mb-3">
                    
                            <Form.Control
                            aria-label="Default"
                            required
                            type="number"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="type duration..."
                            onChange={(e)=>onChange("duration", e.target.value)}
                            />
                             <InputGroup.Text>  <FontAwesomeIcon icon={faHourglassStart} size="xl"/> {/* FontAwesome icon added here */}</InputGroup.Text>
                        </InputGroup>
                    </div>
            </div>
           
        </>
    );

}