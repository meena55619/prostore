import ProductList from '@/components/ui/shared/product/product-list';
import sampleData from '@/lib/db/sample-data';

const Homepage = () => {
  

  return <>
  <ProductList
   data={sampleData.products} 
   title='Newest Arrivals' 
  limit={4}/>
  </>;
};

export default Homepage;

