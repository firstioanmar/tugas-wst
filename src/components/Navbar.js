import React from 'react';

const Navbar = () => {
  return (
    <aside className="bg-gray-800 w-64 h-full shadow-lg text-white p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="/" className="hover:bg-gray-700 block p-2 rounded">Dashboard</a>
          </li>
          <li>
            <a href="/profile" className="hover:bg-gray-700 block p-2 rounded">Profile</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
