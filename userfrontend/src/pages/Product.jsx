
import { useContext } from 'react';
import  {ShopContext}  from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductHd from '../components/ProductHd';
import ProductDisplay from '../components/ProductDisplay';

import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product  = all_products.find((e) => e.productid === Number(productId));
  if(!product){
    return <div> Product not Found! </div>
  }
  return (
  <section className='max_padd_cotainer py-28'>
    <div>
      <ProductHd  product ={product}/>
      <ProductDisplay product={product}/>
      
 
    </div>
  </section>
  )
}

export default Product