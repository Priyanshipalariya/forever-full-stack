import React from 'react'
import { assets } from '../assets/assets'

export const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-5 py-5 mt-40 text-sm border-t border-gray-300'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore rerum aspernatur dolore. Eum vitae quod tempore ipsa porro, maiores amet unde officiis distinctio quis necessitatibus architecto expedita obcaecati ratione!
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>connect@forever.com</li>
                    </ul>
                </div>
            </div>

            <div>
                <hr className='text-gray-300'/>
                <p className='py-5 text-sm text-center text-gray-700'>Copyright 2025@forever.com - All rights reserved </p>
            </div>
        </div>
    )
}
