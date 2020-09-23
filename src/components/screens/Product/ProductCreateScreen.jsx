import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
    saveProduct,
    listProducts,
} from '../../../actions/productActions';
import { listCategories } from '../../../actions/categoryActions';
import { listProducttypes } from '../../../actions/productTypeActions';

function ProductCreateScreen(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [categoryId, setCategory] = useState('');
    const [productTypeId, setProductType] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const [uploading, setUploading] = useState(false);
    const productList = useSelector((state) => state.productList);

    const productSave = useSelector((state) => state.productSave);
    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = productSave;

    const productDelete = useSelector((state) => state.productDelete);
    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete,
    } = productDelete;

    const categoryList = useSelector((state) => state.categoryList);
    const { categories } = categoryList;

    const productTypeList = useSelector((state) => state.productTypeList);
    const { productTypes } = productTypeList;

    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(listProducts());
        dispatch(listCategories());
        dispatch(listProducttypes());
        return () => {
            //
        };
    }, [successSave, successDelete]);

    const openModal = (product) => {
        setModalVisible(true);
        setId(product.id);
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImageUrl(product.imageUrl);
        setCategory(product.category);
        setProductType(product.productType);
        setCountInStock(product.countInStock);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveProduct({
                id: id,
                name,
                price,
                imageUrl,
                categoryId,
                productTypeId,
                countInStock,
                description,
            })
        );
    };
    const saveCatHandler = (e) => {
        
        setCategory(e.target.value);
        //debugger
        //dispatch(saveProduct(setCategory));
    }
    const savePTypeHandler = (e) => {
        setProductType(e.target.value);
    }
    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('imageUrl', file);
        setUploading(true);
        axios
            .post('/api/products/photo', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setImageUrl(response.data);
                setUploading(false);
            })
            .catch((err) => {
                console.log(err);
                setUploading(false);
            });
    };
    return (
        <div className="content content-margined">
            <div className="product-header">
                <h3>Products</h3>
                <button className="button primary" onClick={() => openModal({})}>
                    Create Product
        </button>
            </div>
            {modalVisible && (
                <div className="form">
                    <form onSubmit={submitHandler}>
                        <ul className="form-container">
                            <li>
                                <h2>Create Product</h2>
                            </li>
                            <li>
                                {loadingSave && <div>Loading...</div>}
                                {errorSave && <div>{errorSave}</div>}
                            </li>

                            <li>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                ></input>
                            </li>
                            <li>
                                <label htmlFor="price">Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    value={price}
                                    id="price"
                                    onChange={(e) => setPrice(e.target.value)}
                                ></input>
                            </li>
                            <li>
                                <label htmlFor="image">Image</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={imageUrl}
                                    id="image"
                                    onChange={(e) => setImageUrl(e.target.value)}
                                ></input>
                                <input type="file" onChange={uploadFileHandler}></input>
                                {uploading && <div>Uploading...</div>}
                            </li>
                            <li>
                                <label htmlFor="countInStock">CountInStock</label>
                                <input
                                    type="text"
                                    name="countInStock"
                                    value={countInStock}
                                    id="countInStock"
                                    onChange={(e) => setCountInStock(e.target.value)}
                                ></input>
                            </li>
                            <li>
                                <label htmlFor="name">Category</label>

                                <select onChange={saveCatHandler}>

                                    {categories.map((category) => (
                                        <option value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>


                            </li>
                            <li>
                                <label htmlFor="name">ProductType</label>

                                <select onChange={savePTypeHandler}>
                                    {productTypes.map((productType) => (
                                        <option value={productType.id}>
                                            {productType.name}
                                        </option>
                                    ))}
                                </select>


                            </li>
                            <li>
                                <label htmlFor="description">Description</label>
                                <textarea
                                    name="description"
                                    value={description}
                                    id="description"
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </li>
                            <li>
                                <button type="submit" className="button primary">
                                    {id ? 'Update' : 'Create'}
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setModalVisible(false)}
                                    className="button secondary"
                                >
                                    Back
                </button>
                            </li>
                        </ul>
                    </form>
                </div>
            )}
        </div>
    );
}
export default ProductCreateScreen;
