import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex justify-start items-start flex-col">
    <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center max-md:text-[2rem]">
      Discover & Share
      {/* this br is added to break the header in two lines in the big screens, 
    in small screen if we have two lines, and each line will broken because of the small width, then we will have about 4 lines which take the hole screen, so we removed the br to allow the h1 to be one line, to broken in smallest horizental space possible*/}
      {/* <br className='max-md:hidden' /> */}
      {/* I'll just make the font-size smaller in the small devises */}
      <br />
      {/* 1- 'max-md' apply hidden to smaller than md, unlike 'md' which means apply hidden to bigger than md 
            - with max, the big is ok, apply to the small
            - without max, the small is ok, apply to big
      */}
      <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-center">
        {" "}
        AI-Powered Prompts
      </span>
    </h1>
    <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-center">
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;
