import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GetQuote = () => {
    const [user, setUser] = useState({
        Name: '',
        Email: '',
        Contact: '',
        Product: '',
        Message: ''
    });

    let name, value;
    const handleInputChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const getData = async (e) => {
        e.preventDefault();
        const { Name, Email, Contact, Product, Message } = user;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name, Email, Contact, Product, Message
            })
        };

        try {
            const res = await fetch(
                'https://reego-chairs-default-rtdb.firebaseio.com/UserData.json',
                options
            );
            if (res.ok) {
                alert('Message Sent');
            } else {
                alert('Error Occurred');
            }
        } catch (error) {
            alert('Error Occurred');
        }
    };

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow-lg p-4 rounded-lg"
                style={{ backgroundColor: '#e9f5ff', maxWidth: '500px', width: '100%' }}>
                <h2 className="text-center text-primary mb-4">Get a Quote</h2>
                <form method="POST" onSubmit={getData}>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            name="Name"
                            value={user.Name}
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            autoComplete='off'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="email"
                            name="Email"
                            value={user.Email}
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail"
                            autoComplete='off'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            name="Contact"
                            value={user.Contact}
                            className="form-control form-control-lg"
                            placeholder="Enter Your Contact Number"
                            autoComplete='off'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            name="Product"
                            value={user.Product}
                            className="form-control form-control-lg"
                            placeholder="Product Name"
                            autoComplete='off'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <textarea
                            name="Message"
                            value={user.Message}
                            className="form-control form-control-lg"
                            placeholder="Message for Us"
                            autoComplete='off'
                            onChange={handleInputChange}
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-lg text-white"
                            style={{
                                backgroundColor: '#1e90ff',
                                border: 'none',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GetQuote;
