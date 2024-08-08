"use client";
import React, { useState } from 'react';

const Todo = () => {

    const [search, setSearch] = useState("");
    const [err, setErr] = useState("");
    const [todo, setTodo] = useState([]);

    const handler = (e) => {
        setSearch(e.target.value);       
    }

    const loadData = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${search}`);
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            
            // Validate data format
            if (!data || (Array.isArray(data) && data.length === 0) || (!Array.isArray(data) && !data.id)) {
                throw new Error("Invalid data received");
            }

            setTodo(Array.isArray(data) ? data : [data]);
            setErr("");
        } catch (error) {
            console.error("Fetch error:", error);
            setErr("No data found");
            setTodo([]); // Clear previous todos on error
        }
    }
    
    const load = () => {
        loadData();
    }

    return (
        <div>
            <div>
                <input 
                    onChange={handler} 
                    placeholder='Enter Todo ID' 
                    className='bg-amber-300 p-3 border-2 border-black' 
                    type="text"
                />
                <button 
                    onClick={load} 
                    className='bg-amber-300 p-3 border-2'
                >
                    Search
                </button>
                {
                    todo.length > 0 && !err && todo.map((sTodo) => (
                        <div key={sTodo.id}>
                            <h3>Title: {sTodo.title}</h3>
                            <h3>Completed: {sTodo.completed ? "Yes" : "No"}</h3>
                        </div>
                    ))
                }
                {
                    err && <h6>{err}</h6>
                }
            </div>
        </div>
    );
};

export default Todo;
