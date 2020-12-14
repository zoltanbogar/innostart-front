import React, {useEffect, useState} from 'react';
import ProductType from "../../interfaces/ProductType";
import axios from "axios";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Products from "../../components/Products/Products";

const Second = (props) => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `${process.env.REACT_APP_API_URL}/products?price=0`
            );

            setProducts(result.data.products);
        };
        fetchData();
    }, []);

    return (
        <Auxiliary>
            <Products data={products}/>
        </Auxiliary>
    );
}

export default Second;