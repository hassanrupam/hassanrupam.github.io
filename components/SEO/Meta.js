import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Hassan Sakib Afrin Portfolio - Software Engineer</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Hassan Sakib Afrin Portfolio - Software Engineer" />
            <meta name="description"
                content="Hassan Sakib Afrin's (hassanrupam) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Hassan Sakib Afrin (hassanrupam)" />
            <meta name="keywords"
                content="hassanrupam, hassanrupam's portfolio, hassanrupam linux, ubuntu portfolio, hassan sakib afrin protfolio,hassan sakib afrin computer, hassan sakib afrin, rupamubuntu, hassan sakib afrin ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Hassan Sakib Afrin Portfolio - Software Engineer" />
            <meta itemProp="description"
                content="Hassan Sakib Afrin's (hassanrupam) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Hassan Sakib Afrin Portfolio - Software Engineer" />
            <meta name="twitter:description"
                content="Hassan Sakib Afrin's (hassanrupam) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="hassanrupam" />
            <meta name="twitter:creator" content="hassanrupam" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Hassan Sakib Afrin Portfolio - Software Engineer" />
            <meta name="og:description"
                content="Hassan Sakib Afrin's (hassanrupam) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="http://hassanrupam.github.io/" />
            <meta name="og:site_name" content="Hassan Sakib Afrin Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.png" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
            {/* Google tag (gtag.js) */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-79GXN05G50"></script>
            <script dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-79GXN05G50');
                `
            }} />

        </Head>
    )
}
