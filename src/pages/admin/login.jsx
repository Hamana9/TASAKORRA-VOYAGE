import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // État pour suivre si l'utilisateur est connecté
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Vérifier les informations de connexion
        if (username === 'admin' && password === 'admin') {
            setLoggedIn(true);
            navigate('/liste');
        } else {
            alert('Invalid username or password');
        }
    };



    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
            }}
        >
            <div className="container mt-5">


                <Row>
                    <Col>
                        <h2>Login</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <div className="text-center">
                            <img src="src\assets\logo\tasakorraLogo.png" alt="Logo" className="mb-3" style={{ width: '100px', height: '100px' }} />
                            <p>Tassakorra</p>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    );
}

export default Login;