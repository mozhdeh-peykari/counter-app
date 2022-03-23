import React from 'react';

const Navbar = (props) => {
    return (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <span className='badge badge-fill badge-secondary'>
                    {props.totalCounters}
                </span>
            </a>
        </div>
    </nav>);
};

export default Navbar;