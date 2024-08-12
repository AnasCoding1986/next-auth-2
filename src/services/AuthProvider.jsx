"use client";
import React, { Children } from 'react';
import {SessionProvider} from "next-auth/react";

const AuthProvider = ({Children}) => {
    return (
        <SessionProvider>
            {Children}
        </SessionProvider>
    );
};

export default AuthProvider;