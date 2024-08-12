"use client";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathName = usePathname();
    const router = useRouter();
    const session = useSession();

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
        {
            title: "posts",
            path: "/posts"
        },
        {
            title: "todos",
            path: "/todos"
        },
    ]

    if (pathName.includes("/dash")) {
        return <div className='bg-lime-600 text-4xl'>This is dash navbar</div>
    }

    return (
        <nav className='flex bg-red-600 justify-between items-center p-4'>
            <h2 className='text-xl font-bold'>Next</h2>
            <ul className='flex gap-6'>
                {
                    links.map((link) => <li key={link.path}>
                        <Link className={`${pathName === link.path && "text-red-700"}`} href={link.path}>{link.title}</Link>
                    </li>)
                }
            </ul>
            {!(session.status === "authenticated") ? <button onClick={handler} className='bg-orange-300 text-4xl p-4'>Login</button> : <button onClick={handler} className='bg-red-500 text-4xl p-4'>Logout</button>}
        </nav>
    );
};

export default Navbar;
