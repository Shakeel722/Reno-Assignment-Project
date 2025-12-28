 import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [alert, setAlert] = useState({ message: '', type: '' });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('address', data.address);
      formData.append('city', data.city);
      formData.append('state', data.state);
      formData.append('contact', data.contact);
      formData.append('email_id', data.email_id);
      formData.append('image', data.image[0]);

      const res = await axios.post('/api/addSchool', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setAlert({ message: 'School added successfully!', type: 'success' });
      reset();

      // Hide alert after 3 seconds
      setTimeout(() => setAlert({ message: '', type: '' }), 3000);
    } catch (err) {
      setAlert({ message: err.response?.data?.error || 'Something went wrong', type: 'error' });
      setTimeout(() => setAlert({ message: '', type: '' }), 4000);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '5px 0 15px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  };

  const labelStyle = { fontWeight: 'bold' };
  const errorStyle = { color: 'red', marginTop: '-10px', marginBottom: '10px' };
  const containerStyle = { maxWidth: '600px', margin: 'auto', padding: '20px', position: 'relative' };
  const formStyle = { display: 'flex', flexDirection: 'column' };
  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#0070f3',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const alertStyle = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '15px 25px',
    backgroundColor: alert.type === 'success' ? '#4caf50' : '#f44336',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '5px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    zIndex: 1000,
    transition: '0.3s ease-in-out',
  };

  return (
    <div style={containerStyle}>
      {alert.message && <div style={alertStyle}>{alert.message}</div>}

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add School</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>

        <label style={labelStyle}>School Name</label>
        <input
          {...register('name', { required: 'School name is required', minLength: { value: 3, message: 'Name must be at least 3 characters' } })}
          type="text"
          placeholder="Enter school name"
          style={inputStyle}
        />
        {errors.name && <p style={errorStyle}>{errors.name.message}</p>}

        <label style={labelStyle}>Address</label>
        <input
          {...register('address', { required: 'Address is required' })}
          type="text"
          placeholder="Enter address"
          style={inputStyle}
        />
        {errors.address && <p style={errorStyle}>{errors.address.message}</p>}

        <label style={labelStyle}>City</label>
        <input
          {...register('city', { required: 'City is required' })}
          type="text"
          placeholder="Enter city"
          style={inputStyle}
        />
        {errors.city && <p style={errorStyle}>{errors.city.message}</p>}

        <label style={labelStyle}>State</label>
        <input
          {...register('state', { required: 'State is required' })}
          type="text"
          placeholder="Enter state"
          style={inputStyle}
        />
        {errors.state && <p style={errorStyle}>{errors.state.message}</p>}

        <label style={labelStyle}>Contact Number</label>
        <input
          {...register('contact', {
            required: 'Contact number is required',
            pattern: { value: /^[0-9]{10}$/, message: 'Contact must be 10 digits' },
          })}
          type="text"
          placeholder="Enter contact number"
          style={inputStyle}
        />
        {errors.contact && <p style={errorStyle}>{errors.contact.message}</p>}

        <label style={labelStyle}>Email</label>
        <input
          {...register('email_id', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
          })}
          type="email"
          placeholder="Enter email"
          style={inputStyle}
        />
        {errors.email_id && <p style={errorStyle}>{errors.email_id.message}</p>}

        <label style={labelStyle}>School Image</label>
        <input
          {...register('image', { required: 'School image is required' })}
          type="file"
          accept="image/*"
          style={inputStyle}
        />
        {errors.image && <p style={errorStyle}>{errors.image.message}</p>}

        <button type="submit" style={buttonStyle}>Add School</button>
      </form>
    </div>
  );
}
