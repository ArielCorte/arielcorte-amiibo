import React from 'react'
import head_image from '../common/assets/images/Products-Home-page.png'

const OpenGraph = () => {
  return (
    <>
      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='amiiboStore' />
      <meta
        property='og:description'
        content='This project is an e-commerce mockup. You can add products to cart, remove them and choose their quantity.'
      />
      <meta property='og:url' content='https://arielcorte-amiibo.vercel.app' />
      <meta property='og:site_name' content='amiiboStore' />

      <meta property='og:image' content={head_image} />
      <meta property='og:image:secure_url' content={head_image} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content='amiiboStore products' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:description'
        content='This project is an e-commerce mockup. You can add products to cart, remove them and choose their quantity.'
      />
      <meta name='twitter:title' content='amiiboStore' />
      <meta name='twitter:image' content={head_image} />

      <meta property='og:image' content={head_image} />
      <meta property='og:image:secure_url' content={head_image} />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:image:width' content='300' />
      <meta property='og:image:height' content='300' />
    </>
  )
}

export default OpenGraph
