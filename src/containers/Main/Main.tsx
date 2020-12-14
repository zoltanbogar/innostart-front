import React, {useState, useEffect} from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Products from '../../components/Products/Products';
import Controls from '../../components/Controls/Controls';

import ProductType from '../../interfaces/ProductType';

const Main = (props) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<Boolean>(false);
    const [criteria, setCriteria] = useState<object>({});
    const [page, setPage] = useState<number>(1);

    const queryfyCriteria = () => {
        let query = '';
        if ("where" in criteria) {
            query += Object.keys(criteria["where"]).map(key => `&${key}=${criteria["where"][key]["value"]},${criteria["where"][key]["operator"]}`);
        }
        if ("order" in criteria) {
            query += Object.keys(criteria["order"]).map(col => `&order=${col},${criteria["order"][col]}`);
        }
        if (query !== '') {
            query = `?${query.substring(1)}`;
        }
        return query;
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const query = queryfyCriteria();
            const result = await axios(
                `${process.env.REACT_APP_API_URL}/products${query}`
            );

            setProducts(result.data.products);
        };
        fetchData().finally(() => setLoading(false));
    }, [criteria]);


    let spinner = null;

    if (loading) {
        spinner = <Spinner/>
    }

    return (
        <Auxiliary>
            <Controls criteriaHandler={setCriteria.bind(this)} currentCriteria={criteria}/>
            <Products data={products} page={page} setPage={setPage}/>
            {spinner}
        </Auxiliary>
    );
}

export default withErrorHandler(Main, axios);