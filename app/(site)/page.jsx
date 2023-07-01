import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex justify-center items-center flex-col">
    <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center max-md:text-[2rem]">
      Discover & Share
      <br />
      <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-center">
        {" "}
        Snippets
      </span>
    </h1>
    <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-center">
      Snippets is a place to Store and Share your code snippets with others
    </p>
{console.log('Expression')}
    <Feed />
  </section>
);

export default Home;
