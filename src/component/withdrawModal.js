import {Form, Button, Modal, Alert, FloatingLabel} from 'react-bootstrap'
import React, {useEffect, useState} from "react";

function WithdrawModal(props) {

    const[userData, setUserData] = useState()
    const [withdrawAmount, setWithdrawAmount] = useState()
    const userDetails = localStorage.getItem("user")
    const [error, setError] = useState("")

    useEffect(()=>{
        if(userDetails){
            setUserData(JSON.parse(userDetails))
        }
    },[userDetails])

    function handleSubmit(event){
        if(withdrawAmount > parseInt(userData.balance)){
            setError("Balance not sufficient")

        }
        else{
            event.preventDefault();
            const balance = parseInt(userData.balance) - parseInt(withdrawAmount)
            userData['balance'] = balance
            localStorage.setItem("user", JSON.stringify(userData));
            console.log(balance);
            alert("Your new balance is $" + balance );
        }
        
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
          <h4>Enter the amount to deposit:</h4>
          <Form className="mx-3" onSubmit={handleSubmit} >
                    <Form.Group>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Withdraw Amount"
                        className="mb-3">
                            <Form.Control
                                type="number"
                                min="1"
                                placeholder="Withdraw Amount"
                                name="withdraw"
                                onChange = {(e)=>setWithdrawAmount(e.target.value)}
                                required
                                >
                             </Form.Control>
                    </FloatingLabel>
                    </Form.Group>
                    <Button variant="primary" type="submit">Withdraw</Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default WithdrawModal;