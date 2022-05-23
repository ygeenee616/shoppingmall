import { Schema } from 'mongoose';

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    madeBy: {
        type: String,
        required: true
    }
}, {
    collection: 'products',
    timestamps: true,
});

export { ProductSchema };