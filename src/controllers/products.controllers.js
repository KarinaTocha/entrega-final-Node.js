import * as productService from "../services/products.services.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProductsService();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
};

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productService.getProductByIdService(id);

        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: "Producto no encontrado" });
        }

    } catch (error) {
        res.status(500).json({ error: "Error al obtener producto" });
    }
};

export const addProduct = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await productService.addProductService(product);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: "Error al crear producto" });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;

        await productService.deleteProductService(id);

        res.sendStatus(200);

    } catch (error) {
        res.status(500).json({ error: "Error al eliminar producto" });
    }
};

export const editProduct = async (req, res) => {
    try{
        const id = req.params.id
        const product = req.body
        if (id && product){
            const newProduct = await productService.editProductService(id, product)
            res.status(200).json(newProduct);
        }else{
            res.status(400).json(error)
        }
    }catch(error){
        res.status(500).send()
    }
};