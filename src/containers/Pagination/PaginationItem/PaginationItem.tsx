import React, {Dispatch, SetStateAction} from 'react';

import classes from './PaginationItem.module.css';

const paginationItem = (props: { children: React.ReactNode; clicked: Dispatch<SetStateAction<number>>; currentPage: number; number: number; toPage: number }) => {
    const setPageHandler = () => {
        if (!isReachable || isActive) {
            return false;
        }

        props.clicked(props.toPage);
    }

    const isActive = props.currentPage === props.toPage;
    const isReachable = (!(props.toPage <= 0 || props.toPage > props.number));

    let classNames = [classes.PaginationItem];

    if (isActive) {
        classNames = [...classNames, classes.Active];
    }

    if (!isReachable) {
        classNames = [...classNames, classes.Disabled];
    }

    return (
        <div className={classNames.join(' ')} onClick={() => setPageHandler()}>
            {props.children}
        </div>
    );
}

export default paginationItem;