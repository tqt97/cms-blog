import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import {grpahCMSImageLoader} from '../util';


const CategoryCard = ({post}) => (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-4 pb-12 mb-8">
        <div className='grid gap-4 py-4 md:grid-cols-3 md:gap-8'>
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
            </div>
            <div className="md:col-span-2">
                <div className="block lg:flex  items-center1 justify-center1 mb-8 w-full">
                    <div className="flex items-center justify-center1 mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                        <Image
                            unoptimized
                            loader={grpahCMSImageLoader}
                            alt={post.author.name}
                            height="30"
                            width="30"
                            className="align-middle rounded-full shadow-xs"
                            src={post.author.photo.url}
                        />
                        <p className="inline align-middle text-gray-700 ml-2 font-semibold text-lg">{post.author.name}</p>
                    </div>
                    <div className="font-medium text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                    </div>
                </div>
                <h1 className="transition duration-700  mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
                    <Link href={`/post/${post.slug}`}>{post.title}</Link>
                </h1>
                <p className=" text-lg text-gray-700 font-normal text-left lg:px-2011 mb-8">
                    {post.excerpt}
                </p>
                <div className="flex items-center align-top group">
                    <Link href={`/post/${post.slug}`}>
                        <span className="flex transition relative duration-500 ease transform hover:scale-95 bg-pink-600 text-md font-medium rounded-full text-white px-6 py-3 cursor-pointer">
                            Continue Reading
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex h-auto w-6 ml-2 group-hover:rotate-90 text-white w-full transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </div>


);

export default CategoryCard;
