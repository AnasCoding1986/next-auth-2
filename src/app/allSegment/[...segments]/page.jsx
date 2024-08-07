import React from 'react';

const page = ({params}) => {
    console.log(params.segments);

    if (params.segments.length === 1) {
        return <p>This is 1</p>
    } else if(params.segments.length === 2) {
        return <p>This is 2</p>
    } else if(params.segments.length === 3) {
        return <p>This is 3</p>
    } else if(params.segments.length === 4) {
        return <p>This is 4</p>
    }
    
    return (
        <div>
            <p>More than 4</p>
        </div>
    );
};

export default page;