import React from 'react';

const Navbar = ({totalCounters}) => {
  console.log("Navbar - Rendered");

    return (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <span className='badge badge-fill badge-secondary'>
                    {totalCounters}
                </span>
            </a>
        </div>
    </nav>);
};

export default Navbar;