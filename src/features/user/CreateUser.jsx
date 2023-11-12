// CreateUser.js

import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <p className="mb-4 text-sm text-green-600 md:text-base">
        👋 Welcome To MUSKAAN PIZZA! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: '10px',
          border: '1px solid #008000', // Dark Green border
          borderRadius: '5px',
          outline: 'none',
        }}
        className="input mb-8 w-72"
      />

      {username !== '' && (
        <div>
          <Button
            type="primary"
            style={{
              backgroundColor: '#008000', // Dark Green background color
              color: '#fff', // White text color
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
