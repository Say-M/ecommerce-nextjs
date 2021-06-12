import Head from "next/head"

const Meta = ({ title, keywords, description, author, property }) => {
    return (
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#202125" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta property="og:site_name" content='coder-sayem' />
            {property && <>
                <meta property="og:type" content="article" />
                <meta property="og:title" content={property?.title} />
                <meta property="og:description" content={property?.description.slice(0, 350)} />
                <meta property="og:url" content={'https://coder-sayem.vercel.app/blog/' + property?.id} />
                <meta property="og:image" content={property?.image} />
                <meta property="og:author" content="https://www.facebook.com/sayem.me" />
                <meta property="og:publisher" content="https://www.facebook.com/sayem.me" />
                <meta property="og:section" content={property?.category?.name} />
                {property?.tags.map(tag => <meta key={tag} property="og:tag" content={tag} />)}
                <meta property="og:tags" content={keywords} />

            </>}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
                crossOrigin="anonymous"
            />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: "Mohammad Sayem's portfolio website",
    keywords: 'Mohammad Sayem, Web designer, Web developer, Frontend developer, MERN stack developer, Nextjs developer, React developer',
    description: 'A frontend developer based on Bangladesh',
    author: 'Mohammad Sayem'
}

export default Meta
