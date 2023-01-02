import React, {useEffect, useState} from 'react';
import Link from 'next/link';

import {getCategories} from '../services';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, [])
    return (
        <div className='bg-white shadow-lg rounded-lg py-4 px-6 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                Categories
            </h3>
            {categories.map((category, index) => (
                <Link href={`/category/${category.slug}`} key={index} className="flex items-center w-full">
                    <span className='flex cursor-pointer pb-1 mb-1 font-semibold hover:text-pink-500 hover:translate-x-2 duration-100'>
                        <span className={`cursor-pointer ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
                        <span className='ml-2'>  ({category.posts.length})</span>
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Categories