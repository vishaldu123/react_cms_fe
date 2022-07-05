import React, { useEffect, useState,Component } from 'react';
import { Link } from 'react-router-dom';
import { Container,Row,Col,Form,Button,Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// assets

// ================================|| LOGIN ||================================ //

const Login = () => {
    const{useState}=React;
    
    const[eye,seteye]=useState(true);
    const[inpass,setinpass]=useState("password");
     const[warning,setwarning]=useState(false);
    const[tick,settick]=useState(false);
    
     const[inputText,setInputText]=useState({ email:"", password:""});
    
      const[wemail,setwemail]=useState(false);
    const[wpassword,setwpassword]=useState(false);

 const Eye=()=>{
     if(inpass=="password"){
         setinpass("text");
         seteye(false); 
         setwarning(true);
     }
     else{
         setinpass("password");
         seteye(true);  
         setwarning(false);
     }
 }

const Tick=()=>{
    if(tick){
        settick(false);
    }
    else{
        settick(true);
    }
}
    const inputEvent=(event)=>{
        
        const name=event.target.name; 
        const value=event.target.value;
            setInputText((lastValue)=>{ 
                return{
                    ...lastValue,
                    [name]:value
                }
            }); 
        
    } 
     
    const submitForm=(e)=>{
         
        e.preventDefault();
        
        setwemail(false);
        setwpassword(false);
        if(inputText.email==""){
            setwemail(true);
        }
        else if(inputText.password=="")
        setwpassword(true);
      else{
          alert("form submitted");
      }
    } 

    return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={6} className="justify-content-center" >
                        <Card className="mt-5">
                            <Card.Header><h3>Sign In</h3></Card.Header>
                            <Card.Body>
                                <Form onSubmit={submitForm}>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                        <Form.Label column sm={3}>
                                        Email
                                        </Form.Label>
                                        <Col sm={9}>
                                        <Form.Control type="email" placeholder="Email" className={`${wemail ? "text-warning" : ""}`} value={inputText.email} onChange={inputEvent} name="email"  />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                        <Form.Label column sm={3}>
                                        Password
                                        </Form.Label>
                                        <Col sm={9}>
                                        <Form.Control placeholder="Password" type={inpass} className={` ${warning ? "warning" : ""} ${wpassword ? "text-warning" : ""}`} value={inputText.password} onChange={inputEvent} name="password"   />
                                            <i className="fa fa-lock"></i>
                                            <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col sm={{ span: 10, offset: 2 }}>
                                        <Button type="submit">Sign in</Button><br/>
                                        <a href="#">Forgot your password?</a>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    );
};

export default Login;
