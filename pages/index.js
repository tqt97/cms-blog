import {FeaturedPosts} from '../sections/index';
import {PostCard, Categories, PostWidget, SearchBox} from '../components';
import {getPosts} from '../services';

export default function Home ({posts}) {
  // console.log(posts);
  return (

    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-9 col-span-1">
          {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'> */}
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
        {/* </div> */}
        <div className="lg:col-span-3 col-span-1">
          <div className="lg:sticky relative top-8">
            <SearchBox />
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps () {
  const posts = (await getPosts()) || [];
  return {
    props: {posts},
  };
}
