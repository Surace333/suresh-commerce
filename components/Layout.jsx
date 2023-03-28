import React from 'react';
import Head from 'next/head';
import {Navbar} from '../components';
import {Footer} from '../components';

const Layout = ({ children }) =>
{
    return(
<div className="layout">
        <Head>
    <title>Wolf Magic Solutions</title>
</Head>
<header>
   <Navbar/>
</header>
<main className="main-container">
{children}
</main>
    <footer>
  <Footer/>
    </footer>
     </div>
    )
}

export default Layout;