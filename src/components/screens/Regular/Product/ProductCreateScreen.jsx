import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
    saveProduct,
    listProducts,
} from '../../../../actions/Regular/productActions';
import { listCategories } from '../../../../actions/Regular/categoryActions';
import { listProducttypes } from '../../../../actions/Regular/productTypeActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { listSubCategories } from '../../../../actions/Regular/subCategoryActions';

function ProductCreateScreen(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [productCode, setProductCode] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [categoryId, setCategory] = useState('');
    const [subCategoryId, setSubCategory] = useState('');
    const [productTypeId, setProductType] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');



    const productSave = useSelector((state) => state.productSave);
    const {

        success: successSave,

    } = productSave;

    const productDelete = useSelector((state) => state.productDelete);
    const {

        success: successDelete,

    } = productDelete;

    const categoryList = useSelector((state) => state.categoryList);
    const { categories } = categoryList;

    const subCategoryList = useSelector((state) => state.subCategoryList);
    const { subCategories } = subCategoryList;

    const productTypeList = useSelector((state) => state.productTypeList);
    const { productTypes } = productTypeList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        dispatch(listCategories());
        dispatch(listSubCategories());
        dispatch(listProducttypes());
        return () => {
            //
        };
    }, [successSave, successDelete]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveProduct({
                name,
                price,
                productCode,
                imageUrl,
                categoryId,
                subCategoryId,
                productTypeId,
                countInStock,
                description,
            })
        );
    };
    const saveCatHandler = (e) => {
        setCategory(e.target.value);
    }
    const saveSubCatHandler = (e) => {
        setCategory(e.target.value);
    }
    const savePTypeHandler = (e) => {
        setProductType(e.target.value);
    }
    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('imageUrl', file);

        axios
            .post('/api/products/savephoto', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setImageUrl(response.data);

            })
            .catch((err) => {
                console.log(err);

            });
    };
    return (
        <div className="content content-margined">
            {categories && productTypes && (

                <div className="container">

                    <Form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter Product Name"
                                        size="lg"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input type="text"
                                        name="price"
                                        id="price"
                                        placeholder="Enter Product Price"
                                        size="lg"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="countInStock">In Stock</Label>
                                    <Input
                                        type="text"
                                        name="countInStock"
                                        id="countInStock"
                                        placeholder="Enter Count in Stock"
                                        size="lg"
                                        value={countInStock}
                                        onChange={(e) => setCountInStock(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="countInStock">Product Code</Label>
                                    <Input
                                        type="text"
                                        name="productCode"
                                        id="productCode"
                                        placeholder="Enter Product Code"
                                        size="lg"
                                        value={productCode}
                                        onChange={(e) => setProductCode(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-lg-4">
                                <FormGroup>
                                    <Label for="exampleSelect">Product Type</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        onChange={savePTypeHandler}
                                    >
                                        <option>Select ProductType</option>
                                        {productTypes.map((productType) => (

                                            <option value={productType.id}>
                                                {productType.name}
                                            </option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </div>
                            <div className="col col-lg-4">
                                <FormGroup>
                                    <Label for="exampleSelect">Category</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        onChange={saveCatHandler}
                                    >
                                        <option>Select Category</option>
                                        {categories.map((category) => (
                                            <option value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </div>
                            <div className="col col-lg-4">
                                <FormGroup>
                                    <Label for="exampleSelect">SubCategory</Label>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        size="lg"
                                        onChange={saveSubCatHandler}
                                    >
                                        <option>Select SubCategory</option>
                                        {subCategories.map((subCategory) => (
                                            <option value={subCategory.id}>
                                                {subCategory.name}
                                            </option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="image">Image Name</Label>
                                    <Input type="text"
                                        name="image"
                                        id="image"
                                        placeholder="Image Name"
                                        size="lg"
                                        value={imageUrl}
                                        onChange={(e) => setImageUrl(e.target.value)}
                                    />
                                    <Input
                                        type="file"
                                        onChange={uploadFileHandler}
                                    />
                                </FormGroup>
                            </div>
                        </div>



                        <div className="row">
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="exampleText">Description</Label>
                                    <Input
                                        type="textarea"
                                        name="text"
                                        id="exampleText"
                                        placeholder="Enter Product Discription"
                                        size="lg"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>

                        <Button variant="primary" type="submit">
                            Submit
                       </Button>

                    </Form>

                </div>

            )
            }
        </div >
    );
}
export default ProductCreateScreen;
