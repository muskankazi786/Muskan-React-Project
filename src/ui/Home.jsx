// Home.js

import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  const purpleThemeStyles = {
    color: '#6b46c1', // Purple text color
  };

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-3xl font-semibold text-purple-800 md:text-4xl" style={purpleThemeStyles}>
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Muskaan Pizzas can bring a Muskaan on your face.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
