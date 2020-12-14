import * as React from 'react';
import ProductType from '../../interfaces/ProductType';
import Product from './Product/Product';
import classes from './Products.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Pagination from '../../containers/Pagination/Pagination';
import {Dispatch, SetStateAction} from "react";

const PAGE_LENGTH = 10;

const products = (props: { data: ProductType[]; page?: number; setPage?: Dispatch<SetStateAction<number>>}) => {
    const match = Array.from({length: PAGE_LENGTH}, (_, i) => i + ((props.page - 1) * PAGE_LENGTH));
    const limiter = (product, index) => {
        let condition: boolean = true;
        if (props.page) {
            condition = match.indexOf(index) !== -1;
        }

        if (condition) {
            return <Product
                key={product.id}
                id={product.id}
                name={product.name}
                created_at={product.created_at}
                purchased={product.purchased}
                price={product.price}
            />
        }
    };

    const pagination = ((props.page && props.data.length > 0) ? <Pagination page={props.page} count={props.data.length} length={PAGE_LENGTH} setPage={props.setPage} /> : null);

    return (
        <Auxiliary>
            <div className={classes.Title}>Termékek</div>
            <div className={classes.Products}>
                {props.data.map((product: ProductType, index) => {
                    return limiter(product, index);
                })}
            </div>
            {pagination}
        </Auxiliary>
    );
}

export default products;