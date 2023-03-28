import React from 'react';
import {urlFor} from '../lib/client';
import Link from 'next/link';

const FooterBanner = ({footerBanner : {product,discount,saleTime,largeText1,largeText2,midText,buttonText,desc,image,smallText}}) =>
{
    return(
        <div className="footer-banner-container">
            <div className="banner-desc">
                <div className="left">
            <p>{discount}</p>
            <h3>{largeText1}</h3>
            <h3>{largeText2}</h3>
            <p>{saleTime}</p>
            </div>
            <div className="right">

            <p>{smallText}</p>
            <h3>{midText}</h3>
         
            <p>{desc}</p>
            <Link href={`/product/${product}`}>
                <div>
<button type="button">{buttonText}</button>
</div>
            </Link>
                </div>
<img src={urlFor(image)} className="footer-banner-image"></img>
            </div>
        </div>
    )
}

export default FooterBanner;