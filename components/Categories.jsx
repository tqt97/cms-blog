import React, {useEffect, useState} from 'react';
import Link from 'next/link';

import {getCategories} from '../services';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, [])
    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-8'>
                Categories
            </h3>
            {categories.map((category, index) => (
                <Link href={`/category/${category.slug}`} key={index}>
                    <span className='cursor-pointer block pb-3 mb-3'>
                        <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Categories