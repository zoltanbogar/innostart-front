export const sorters = [
    {
        id: 'sort_price',
        name: 'sort_price',
        title: 'Ár szűréses',
        options: [
            {
                value: 'paid',
                caption: 'Fizetős',
                column: 'price',
                operator: 'DESC'
            },
            {
                value: 'free',
                caption: 'Ingyenes',
                column: 'price',
                operator: 'ASC'
            }
        ]
    },
    {
        id: 'sort_order',
        name: 'sort_order',
        title: 'Sorrend',
        options: [
            {
                value: 'most_purchased',
                caption: 'Legtöbbet megvett',
                column: 'purchased',
                operator: 'DESC'
            },
            {
                value: 'newest',
                caption: 'Legújabb',
                column: 'created_at',
                operator: 'DESC'
            },
            {
                value: 'alphabetical',
                caption: 'ABC sorrend',
                column: 'name',
                operator: 'ASC'
            }
        ]
    }
];
