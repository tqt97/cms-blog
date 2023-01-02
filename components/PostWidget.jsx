import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import {grpahCMSImageLoader} from '../util';
import {getSimilarPosts, getRecentPosts} from '../services';

const PostWidget = ({categories, slug}) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug).then((result) => {
                setRelatedPosts(result);
            });
        } else {
            getRecentPosts().then((result) => {
                setRelatedPosts(result);
            });
        }
    }, [slug]);

    return (
        <div className="bg-white shadow-lg rounded-lg py-4 px-6 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
            {relatedPosts.map((post, index) => (
                <div key={index} className="flex items-center w-full mb-4">
                    <div className="flex items-center">
                        <Image
                            loader={grpahCMSImageLoader}
                            alt={post.title}
                            title={post.title}
                            height="60"
                            width="60"
                            unoptimized
                            className="align-middle"
                            src={post.featuredImage.url}
                        />
                    </div>
                    <div className="flex-grow ml-4">
                        <p className="text-gray-700 font-xs flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {moment(post.createdAt).format('MMM DD, YYYY')}</p>
                        <Link href={`/post/${post.slug}`} className="text-md hover:text-pink-500 font-semibold" key={index}>{post.title}</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostWidget;
