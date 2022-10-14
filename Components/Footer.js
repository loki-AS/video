import React from 'react';
import { NextPage } from 'next';
import { footerList1, footerList2, footerList3 } from '../utils/constants';

const List = ({ items, mt }) => (
  <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
    {items.map((item) => (
      <p key={item} className='text-gray-400 text-sm  hover:underline cursor-pointer' >
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => (
  <div className='mt-6 hidden xl:block'>
    <List items={footerList1} mt={false} />
    <List items={footerList2} mt={true} />
    <List items={footerList3} mt={true} />
    <p className='text-gray-400 text-sm mt-5'>© 2022 TikTik</p>
  </div>
);

export default Footer;