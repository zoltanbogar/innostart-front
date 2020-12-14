interface ProductType {
    id: number,
    price: number,
    purchased: number,
    created_at: DateObject,
    name: string
}

interface DateObject {
    date: string,
    timezone_type: number,
    timezone: string
}

export default ProductType;