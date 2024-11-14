import React, { useState } from 'react';

function Login() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle login logic here
        formData.email = '';
        formData.name = '',
            formData.password = '';
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f2f5'
        }}>
            <div style={{
                width: '350px',
                padding: '30px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>Login</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ textAlign: 'left' }}>
                        <label style={{ fontSize: '14px', color: '#555' }}>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                marginTop: '5px',
                                borderRadius: '8px',
                                border: '1px solid #ddd',
                                fontSize: '14px'
                            }}
                        />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <label style={{ fontSize: '14px', color: '#555' }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                marginTop: '5px',
                                borderRadius: '8px',
                                border: '1px solid #ddd',
                                fontSize: '14px'
                            }}
                        />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <label style={{ fontSize: '14px', color: '#555' }}>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                marginTop: '5px',
                                borderRadius: '8px',
                                border: '1px solid #ddd',
                                fontSize: '14px'
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            padding: '12px',
                            backgroundColor: '#4CAF50',
                            color: '#fff',
                            fontWeight: 'bold',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            transition: 'background-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
