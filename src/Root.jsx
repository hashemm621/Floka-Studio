import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import Home from "./pages/home/Home";
import CustomCursor from "./customAnimation/CustomCursor";
import Preloader from "./customAnimation/Preloader";

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="bg-white min-h-screen">
        {loading && <Preloader />}

        <div className={loading ? "hidden" : "block"}>
          <CustomCursor />
          <header>
            <Navbar />
          </header>

          <main>
            <Home />
          </main>

          <footer></footer>
        </div>
      </div>
    </>
  );
};

export default Root;
