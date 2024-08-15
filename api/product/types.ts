import Category from "../category/model";

export interface IProduct {
    _id: string | undefined;
    name: string;
    description: string;
    price: Number;
    stock: Number;
    category: typeof Category
    image: string
}