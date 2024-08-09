import Image from 'next/image';
import React from 'react';

export const metadata = {
    title: 'about',
    description: 'about- meta data - thata',
  }

const page = () => {
    return (
        <div>
            <h3>This is contact page</h3>
            {/* <Image alt='cion' width="1000" height={"2000"} src='/images/1.png'></Image> */}
            <div className='grid grid-cols-4'>
                {
                    [1,2,3,4]?.map((img) => (
                        <Image className='border-2 border-black p-2 rounded-2xl' key={img} alt='cion' width="50" height="50" src={`/images/${img}.png`}></Image>
                    ))
                }
            </div>
        </div>
    );
};

export default page;