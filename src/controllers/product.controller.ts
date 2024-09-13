import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import ProductService from "../models/Product.service";
import { AdminRequest, ExtendedRequest } from "../libs/types/member";
import { T } from "../libs/types/comments";
import { ProductInput, ProductInquiry } from "../libs/types/product";
import { ProductCategory } from "../libs/enums/product.enum";
import { Types } from "mongoose";
const productService = new ProductService();

const productController: T = {};

/*SPA*/

productController.getProducts = async (req: Request, res: Response) => {
  try {
    console.log("getProducts");
    const { page, limit, order, productCategory, search } = req.query;
    const inquiry: ProductInquiry = {
      order: String(order),
      page: Number(page),
      limit: Number(limit),
    };
    console.log("inquiry shakli:", inquiry);
    
    if (productCategory)
      inquiry.productCategory = productCategory as ProductCategory;
    if (search) inquiry.search = String(search);
    const result = await productService.getProducts(inquiry);
    
    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
productController.getProduct = async (
  req: ExtendedRequest | any,
  res: Response
) => {
  try {
    console.log("getProduct");
    const { id } = req.params;
    console.log("request malumotlar", req.params);
    const memberId = req.member?._id ?? null;
    console.log("user ID: ", memberId);

    const result = await productService.getProduct(memberId, id);
    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
/*BSSR*/
``;
productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    const data = await productService.getAllProducts();
    if (data.length === 0) {
      res.render("products", { message: "No data found", products: [] });
    } else {
      res.render("products", { products: data });
    }
  } catch (err) {
    console.log("Error, getAllProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProduct = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("createNewProduct");
    // console.log("Requested product files: ", req.files);
    // console.log("req.body:", req.body);
    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);
    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {
      return ele.path;
    });
    await productService.createNewProduct(data);
    res.send(
      `<script>alert("Product succesfully created in DataBase");
            window.location.replace('/admin/product/all')</script>`
    );

    // console.log("Bizning Datamiz", data);
  } catch (err) {
    console.log("Error, createNewProduct", err);
    const message = err instanceof Errors ? err.message : Message.CREATE_FAILED;
    res.send(
      `<script>alert("${message}");
            window.location.replace('/admin/product/all')</script>`
    );
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await productService.updateChosenProduct(id, req.body);
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error, updateChosenProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;
