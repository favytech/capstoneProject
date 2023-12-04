import React, { useState } from 'react';
import './App.css';

const BookingForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        date: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" onChange={handleChange} />
            </label> <br></br>
            <label>
                Email:
                <input type="email" name="email" onChange={handleChange} />
            </label><br></br>
            <label>
                Date:
                <input type="date" name="date" onChange={handleChange} />
            </label><br></br>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default BookingForm;
