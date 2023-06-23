import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share

    {/* this br is added to break the header in two lines in the big screens, 
    in small screen if we have two lines, and each line will broken because of the small width, then we will have about 4 lines which take the hole screen, so we removed the br to allow the h1 to be one line, to broken in smallest horizental space possible*/}
      <br className='max-md:hidden' />
      {/* 1- 'max-md' apply hidden to smaller than md, unlike 'md' which means apply hidden to bigger than md 
            - with max, the big is ok, apply to the small
            - without max, the small is ok, apply to big
      */}
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;
