import React from 'react';
import { initialName } from '../../helpers/helpere';

const ProfileInfo = () => {
    return (
        <div className="flex items-center gap-3">
            <div>
                <h1 className="bg-slate-300 text-sm md:text-lg p-2 rounded-full font-medium text-center">
                    {initialName("dipak mundhe")}
                </h1>
            </div>
            <div className="hidden md:block">
                <h2 className="font-medium text-black text-sm md:text-base">
                    Dipak Mundhe
                </h2>
            </div>
        </div>
    );
};

export default ProfileInfo;
