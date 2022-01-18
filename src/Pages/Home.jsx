import React from 'react';

//Components
import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';

const Home = () => {
    return ( 
        <>
            <Header />
            {
                [1,2,3,4,5,6,7,8,9,10,11,12].map( card => (
                    <ProductCard key={card} />
                ))
            }
        </>
    );
}
 
export default Home;