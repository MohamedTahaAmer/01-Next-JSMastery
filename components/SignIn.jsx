"use client";

// import Link from "next/link"; 
import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";


function SignIn() {

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const nextProviders = await getProviders(); 
      /*
      // console.log(nextProviders)
        {
          github: {
            callbackUrl: "http://localhost:3000/api/auth/callback/github",
            id: "github",
            name: "GitHub",
            signinUrl: "http://localhost:3000/api/auth/signin/github",
            type: "oauth",
          },
          google: {
            callbackUrl: "http://localhost:3000/api/auth/callback/github",
            id: "google",
            name: "Google",
            signinUrl: "http://localhost:3000/api/auth/signin/google",
            type: "oauth",
          },
        };

      */
      setProviders(nextProviders);
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
              // - by passing in the provider name we don't redirect to the genral sign in page instaed we get redirected directly to this providers signin page
              signIn(provider.id);
            }}
            
            className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center mr-2"
          >
            {provider.name}
          </button>
        ))}
    </>
  );
}

export default SignIn;
