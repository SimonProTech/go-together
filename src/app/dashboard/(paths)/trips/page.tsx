import React from 'react';
import {SiteHeader} from "@/components/site-header";
import { Plane } from 'lucide-react';

const Page = () => {
    return (
        <>
            <SiteHeader icon={<Plane size={19} className='text-lucide-icon ml-1'/>} title='Twoje podróże, spełnione i te, które czekają' />
            new trip idea
        </>
    );
};

export default Page;
