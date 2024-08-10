import Image from 'next/image';
import React from 'react';

export const metadata = {
    title: 'about',
    description: 'about- meta data - thata',
  }

  const getTime = async () => {
    const res = await fetch('http://localhost:3000/time', { next: { revalidate: 10 } });
    const data = await res.json();
    return data.currentTime;
  }

const page = async () => {

    const currentTimeS = await getTime();

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

            <h3>Time: {currentTimeS}</h3>

            


        </div>
    );
};

export default page;