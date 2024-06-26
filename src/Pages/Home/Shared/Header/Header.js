import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../Asset/dadu.PNG'
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const menuItems = <>

        <li className='font-semibold'><Link to='/'>Home</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/orders'>Orders</Link></li>
                    <li className='font-semibold'>
                        <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>

                    </li>
                </>
                :
                <li className='font-semibold'><Link to='/Login'>Login</Link></li>}

    </>
    return (
        <div className="navbar bg-base-100 h-20 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl w-40">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-error">Book Appointment</button>
            </div>
        </div>
    );
};

export default Header;