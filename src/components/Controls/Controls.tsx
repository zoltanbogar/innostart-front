import * as React from 'react';
import Search from './Search/Search';
import Filters from './Filters/Filters';
import Sorter from './Sorter/Sorter';

import classes from './Controls.module.css';
import {sorters} from '../../configs/sorter';

const controls = props => {
    const setWhereConditionHandler = (column: string, value: string | number, operator: string = '') => {
        const criteria = {
            where: {
                [column]: {
                    value: value,
                    operator: operator
                }
            }
        };

        props.criteriaHandler(prevCriteria => {
            return {...prevCriteria, ...criteria};
        });
    };

    const setOrderConditionHandler = (column: string, operator: string = 'ASC') => {
        const criteria = {
            order: {
                [column]: operator
            }
        };

        props.criteriaHandler(prevCriteria => {
            return {...prevCriteria, ...criteria};
        });
    };

    return (
        <div className={classes.Controls}>
            <div>
                <Filters clicked={setWhereConditionHandler}/>
            </div>
            <Search changed={setWhereConditionHandler.bind(this)}/>
            <div className={classes.Sorters}>
                {sorters.map(sorter => {
                    return <Sorter
                        title={sorter.title}
                        name={sorter.name}
                        id={sorter.name}
                        options={sorter.options}
                        key={sorter.id}
                        changed={setOrderConditionHandler.bind(this)}
                    />
                })}
            </div>
        </div>
    );
}

export default controls;