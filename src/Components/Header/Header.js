import React from 'react';
import logo from "../../images/Logo.svg";

const Header = () => {
    return (
        <div className=' bg-slate-800 p-7'>
            <div className="navbar p-0 w-10/12 mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></a>
                </div>
                <div className="flex-none">
                    <ul className="text-white menu menu-horizontal">
                        <li><a className='text-white capitalize text-base'>review</a></li>
                        <li><a className='text-white capitalize text-base'>manage inventory</a></li>
                        <li><a className='text-white capitalize text-base'>login</a></li>
                        <li><a className='text-white capitalize text-base'>order</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;