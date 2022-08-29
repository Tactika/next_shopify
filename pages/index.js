import { getProductsInCollection } from '../lib/shopify'
import ProductList from '../components/ProductList'
import styles from '../styles/Home.module.css'

export default function Home({products}) {
  console.log(products)
  return (
    <>
    <ProductList products={products} />
    </>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  return {
    props: {products}
  }
}