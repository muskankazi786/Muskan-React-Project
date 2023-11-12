// Header.js

import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  const headerStyles = {
    backgroundColor: 'navy', // Change this to your desired navy blue color
    color: '#adff2f', // Change this to your desired green-yellow color combination
  };

  return (
    <div style={headerStyles}>
      <header className="container mx-auto flex items-center justify-between border-b border-stone-200 px-4 py-3 uppercase sm:px-6">
        <Link to="/" className="tracking-widest">
          Muskan Pizza.
        </Link>
        <SearchOrder />
        <Username />
      </header>
    </div>
  );
}

export default Header;
