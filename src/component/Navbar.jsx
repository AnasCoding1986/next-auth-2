"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathName = usePathname();
    const router = useRouter();

    const handler = () => {
        router.push("/about")
    }

    const links = [
        {
            title: "about",
            path: "/about"
        },
        {
            title: "service",
            path: "/service"
        },
        {
            title: "contact",
            path: "/contact"
        },
        {
            title: "users",
            path: "/users"
        },
        {
            title: "allSegment",
            path: "/allSegment"
        },
    ]

    if (pathName.includes("/dash")) {
        return <div className='bg-lime-600 text-4xl'>This is dash navbar</div>
    }

    return (
        <nav className='flex justify-between items-center p-4'>
            <h2 className='text-xl font-bold'>Next</h2>
            <ul className='flex'>
                {
                    links.map((link) => <li key={link.path}>
                        <Link className={`${pathName === link.path && "text-red-700"}`} href={link.path}>{link.title}</Link>
                    </li>)
                }
            </ul>
            <button onClick={handler} className='bg-orange-300 text-4xl p-4'>Login</button>
        </nav>
    );
};

export default Navbar;
