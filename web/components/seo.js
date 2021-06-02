import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

function SEO({ description, title, image, url, favicon }) {
  const faviconUrl = favicon || '/favicon.png'
  const siteUrl = url || 'https://www.shreyasp.me'
  const metaDescription =
    description ||
    `Personal site of Shreyas Papinwar, Developer and entrepreneur.`
  const previewImage =
    image ||
    'https://raw.githubusercontent.com/shreyaspapi/shreyaspapi.github.io/master/web/src/images/aboutPreview.png?token=AFKKMQWWCMKEOWHBA73S6PK72IIJ2'
  const titleTemplate = title || 'shreyaspapi'

  return (
    <Head>
      <title>{titleTemplate}</title>
      {/* <description>{metaDescription}</description> */}
      <link rel="shortcut icon" href={faviconUrl} />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <meta property="og:image" content={previewImage} />
      <meta property="og:title" content={titleTemplate} />
      <meta property="og:description" content={metaDescription} />
      <meta property="twitter:image" content={previewImage} />
      <meta property="og:title" content={titleTemplate} />
      <meta property="og:description" content={metaDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteUrl} />
      <meta name="twitter:creator" content="@spapinwar" />
      <meta name="twitter:title" content={titleTemplate} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={previewImage} />
    </Head>
  )
}

SEO.defaultProps = {
  meta: [],
  description: `Personal site of Shreyas Papinwar, Developer and entrepreneur.`,
}

SEO.propTypes = {
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
