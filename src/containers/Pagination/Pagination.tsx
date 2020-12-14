import React, {Dispatch, SetStateAction} from 'react';

import classes from './Pagination.module.css';
import PaginationItem from './PaginationItem/PaginationItem';

const pagination = (props: { page: number; count: number; length: number; setPage: Dispatch<SetStateAction<number>> }) => {
    let numberOfPages = Math.floor(props.count / props.length);
    if (props.count % props.length > 0) {
        ++numberOfPages;
    }
    const arrPages = [...Array(numberOfPages).keys()];

    return (
        <div className={classes.Pagination}>
            <PaginationItem clicked={props.setPage} currentPage={props.page} toPage={props.page - 1}
                            number={numberOfPages}>Előző oldal</PaginationItem>
            {arrPages.map(page => {
                return <PaginationItem key={page} clicked={props.setPage} currentPage={props.page} toPage={page + 1}
                                       number={numberOfPages}>{page + 1}</PaginationItem>;
            })}
            <PaginationItem clicked={props.setPage} currentPage={props.page} toPage={props.page + 1}
                            number={numberOfPages}>Következő oldal</PaginationItem>
        </div>
    );
}

export default pagination;