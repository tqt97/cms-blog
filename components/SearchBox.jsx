import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import {grpahCMSImageLoader} from '../util';
import {getSimilarPosts, getRecentPosts} from '../services';

const SearchBox = ({categories, slug}) => {
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
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Search</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <input type="text" className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-100 bg-gray-100 text-gray-800" placeholder="Search here" name="search" />
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
