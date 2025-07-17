import React, { useState } from 'react';

const Office = () => {
    const [showText, setShowText] = useState(false);

    return (
        <div id='office' className='py-2 pb-20 text-black justify-center mx-auto md:px-10 px-5 bg-[#f0f0f0]'>
            <div className='mx-auto justify-center'>
                <div className='items-center py-10 pt-20 justify-center mx-auto text-center'>
                    <p className='text-[#000] md:text-4xl text-3xl md:pt-5 pt-3 uppercase'>
                        Our Office
                    </p>
                    <p className='text-sm md:text-xl md:pt-8 pt-5 tracking-wide mx-auto text-center justify-center max-w-3xl text-[#757575]'>
                        Elite Crown Diamond operates in multiple countries and our professional advice is only available for our friends and family.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Office;