import React from 'react';
import ProductList from './components/ProductList';
import './index.css';

const App = () => {
  const products = [
    { id: 1, name: 'Laptop', price: '$999', description: 'High-performance laptop for professionals.', image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=055e' },
    { id: 2, name: 'Smartphone', price: '$699', description: 'A sleek smartphone with the latest features.', image: 'https://i5.walmartimages.com/seo/Open-Box-Samsung-Galaxy-S23-5G-S911U1-128GB-Phantom-Black-Factory-Unlocked-Smartphone_43826517-44cf-48ce-a4cd-a14e1bfafcaf.700ddf82b17b5ff97e8488f1c4d0735b.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF' },
    { id: 3, name: 'Headphones', price: '$199', description: 'Noise-cancelling headphones for music lovers.', image: 'https://products.shureweb.eu/shure_product_db/product_main_images/files/c25/16a/40-/original/ce632827adec4e1842caa762f10e643d.webp' },
    { id: 4, name: 'Smartwatch', price: '$249', description: 'A smartwatch to keep you connected on the go.', image: 'https://i5.walmartimages.com/asr/7ca3f94c-041d-444e-9a75-657a42ceda22.a2f1ae761bb9fd3b2fe18b9b5d611cb7.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF' },  
];  

  return (
    <div>
      <h1>Product Showcase</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;