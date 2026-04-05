import React from 'react';
import Navbar from './shared/Navbar';
import Home from './pages/home/Home';
import CustomCursor from './customAnimation/CustomCursor';

const Root = () => {
    return (
        <>

        <CustomCursor/>
           <header>
            <Navbar/>
           </header>
            
          

           <main>
            <Home/>
           </main>

           <footer>

           </footer>
        </>
    );
};

export default Root;