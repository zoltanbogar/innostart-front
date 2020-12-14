import * as React from 'react';
import ProductType from '../../../interfaces/ProductType';
import classes from './Product.module.css';

const product = (props: { name: ProductType["name"]; id: ProductType["id"]; price: ProductType["price"]; purchased: ProductType["purchased"]; created_at: ProductType["created_at"]; }) => {
    const stringDate = props.created_at.date.slice(0, -10);

    return (
        <div className={classes.Product}>
            <div className={classes.Header}>
                {props.name}
            </div>
            <div className={classes.Body}>
                <div>
                    <span>Azonosító</span>
                    {props.id}
                </div>
                <div>
                    <span>Ár</span>
                    {props.price}
                </div>
                <div>
                    <span>Vásárlások száma</span>
                    {props.purchased}
                </div>
                <div>
                    <span>Létrehozva</span>
                    {stringDate}
                </div>
            </div>
        </div>
    );
}

export default product;