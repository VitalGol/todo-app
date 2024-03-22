import React from 'react';

const Navbar = () => {
  return (
    <div className="flex flex-wrap justify-around py-3">
      <h1 className="text-lg font-bold text-red-800">Todo App</h1>
      <ul className="flex gap-8 text-md">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
// toast.success(response.data.msg);
// setFormData({ title: '', description: '' });
