import { graphql } from 'gatsby'
import React from 'react'
import Features from './../components/Features'
import Layout from './../components/Layout'
import PreviewCompatibleImage from './../components/PreviewCompatibleImage'
import Pricing from './../components/Pricing'
import Testimonials from './../components/Testimonials'

interface Props {
  image: any
  title: string
  heading: string
  description: string
  intro: {
    blurbs: any
  }
  main: {
    description: string
    heading: string
    image1: any
    image2: any
    image3: any
  }
  testimonials: any
  fullImage: any
  pricing: {
    description: string
    heading: string
    plans: any
  }
}

interface ProductPageProps {
  data: {
    markdownRemark: {
      frontmatter: any
    }
  }
}

export const ProductPageTemplate: React.SFC<Props> = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}: Props) => (
  <section>
    <div
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        style={{
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <div>
      <div>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
    <Features gridItems={intro.blurbs} />
    <div>
      <h3>{main.heading}</h3>
      <p>{main.description}</p>
    </div>
    <div>
      <article>
        <PreviewCompatibleImage imageInfo={main.image1} />
      </article>
      <article>
        <PreviewCompatibleImage imageInfo={main.image2} />
      </article>
      <article>
        <PreviewCompatibleImage imageInfo={main.image3} />
      </article>
    </div>
    <Testimonials testimonials={testimonials} />
    <div
      style={{
        backgroundImage: `url(${
          fullImage.childImageSharp
            ? fullImage.childImageSharp.fluid.src
            : fullImage
        })`,
      }}
    />
    <h2>{pricing.heading}</h2>
    <p>{pricing.description}</p>
    <Pricing data={pricing.plans} />
  </section>
)

const ProductPage: React.SFC<ProductPageProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
