import { getServerSession } from 'next-auth';
import React from 'react';
import { authOption } from '../api/auth/[...nextauth]/route';

const page = async () => {

    const session = await getServerSession(authOption);
    console.log(session);
    

    return (
        <div>
            <h2>This is service</h2>
        </div>
    );
};

export default page;