import React from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchBar = ({ HandleSearch }) => {
    return (
        <div className="flex items-center border border-gray-300 p-2 rounded-md w-full md:w-80">
            <input
                type="text"
                placeholder="Search Notes"
                className="flex-grow px-2 text-sm bg-transparent border-none outline-none"
            />
            <button
                className="text-lg text-gray-600 hover:text-blue-600"
                onClick={HandleSearch}
            >
                <IoSearch />
            </button>
        </div>
    );
};

export default SearchBar;
