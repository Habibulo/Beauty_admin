import { ProductCategory, ProductSize, ProductStatus, ProductVolume } from "../enums/product.enum";
import {ObjectId} from "mongoose"

export interface Product {
    _id: ObjectId,
    productStatus: ProductStatus,
    productCategory: ProductCategory,
    productName: string,
    productPrice: number,
    productLeftCount: number,
    productSize: ProductSize,
    productVolume: Number
    productDesc?: string
    productImages: string[],
    productViews: number,
    createdAt: Date,
    updatedAt: Date
}

export interface ProductInput {
    productStatus?: ProductStatus,
    productCategory: ProductCategory,
    productName: string,
    productPrice: number,
    productLeftCount: number,
    productSize?: ProductSize,
    productVolume?: Number
    productDesc?: string
    productImages: string[],
    productViews?: number,
} 

export interface ProductUpdateInput {
    _id: ObjectId,
    productStatus?: ProductStatus,
    productCategory?: ProductCategory,
    productName?: string,
    productPrice?: number,
    productLeftCount?: number,
    productSize?: ProductSize,
    productVolume?: Number
    productDesc?: string
    productImages?: string[],
    productViews?: number,
}

export interface ProductInquiry {
    order: string
    page: number
    limit: number
    productCategory?: ProductCategory,
    search?: string
} 