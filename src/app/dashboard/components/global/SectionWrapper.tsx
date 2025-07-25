import React, { ReactNode } from 'react';

interface SectionI {
    children: ReactNode
}

const SectionWrapper = ({children}: SectionI) => {
    return (
        <section className='container mx-auto py-3 px-6 relative'>
            {children}
        </section>
    );
};

export default SectionWrapper;
