import React from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
    return (
        <nav className="bg-white flex flex-col md:flex-row items-center justify-between px-6 py-4 shadow-md gap-4">
            <h1 className="text-2xl font-medium text-black">Notes</h1>
            <SearchBar />
            <ProfileInfo />
        </nav>
    );
};

export default Navbar;
