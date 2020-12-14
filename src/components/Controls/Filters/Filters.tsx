import * as React from 'react';

import Filter from './Filter/Filter';
import {filtersCfg} from '../../../configs/filter';

const filters = props => {
    return (
        <div>
            {filtersCfg.map(filter => <Filter key={filter.id} caption={filter.caption} clicked={() => props.clicked(filter.column, filter.value, filter.operator)}/>)}
        </div>
    )
}

export default filters;