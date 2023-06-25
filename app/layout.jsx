import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Snippets",
  description: "Discover & Share  Snippets",
  icons: {
    icon: "/assets/images/snippet.svg",
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
    {/* <head>
      <link rel="icon" href="/assets/images/snippet.svg" />
    </head> */}
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
