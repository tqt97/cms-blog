import { FeaturedPosts } from '../sections/index';
import { Key } from 'react';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

export default function Home ( { posts }: { posts: any } )
{
    return (
        <div className="container mx-auto px-10 mb-8">
            <FeaturedPosts />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1">
                    { posts.map( ( post: { node: any; }, index: Key | null | undefined ) => (
                        <PostCard key={ index } post={ post.node } />
                    ) ) }
                </div>
                <div className="lg:col-span-4 col-span-1">
                    <div className="lg:sticky relative top-8">
                        <PostWidget categories={ undefined } slug={ undefined } />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Fetch data at build time
export async function getStaticProps ()
{
    const posts = ( await getPosts() ) || [];
    return {
        props: { posts },
    };
}