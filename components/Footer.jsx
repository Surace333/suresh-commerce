import React from 'react';
import {urlFor} from '../lib/client';
import Link from 'next/link';
import {AiOutlineTwitter,AiFillInstagram} from 'react-icons/ai';
const Footer = () =>
{
    return(
        <div className="footer-container">

<p>2023 Jsm headphones All rights are reserved</p>
<p className="icons">
<AiFillInstagram/>
<AiOutlineTwitter/>
</p>
        </div>
    )
}

export default Footer;