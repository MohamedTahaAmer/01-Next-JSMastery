"use client";

// import Link from "next/link"; 
import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";


function SignIn() {

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders(); // - this will return all providers you are using like google, facebook, github, twitter ..etc
      setProviders(res);
    })();
  }, []);
  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            type="button"
            key={provider.name}
            onClick={() => {
              signIn(provider.id);
            }}
            className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
          >
            G-Sign in
          </button>
        ))}
    </>
  );
}

export default SignIn;
