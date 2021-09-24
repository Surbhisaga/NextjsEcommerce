import { useState, useEffect } from 'react'
import Link from 'next/link'
import { storage, db, serverTimeStamp } from '../../firebase';
import Router from 'next/router';
import { useToast } from "@chakra-ui/react"
import { v4 as uuidv4 } from 'uuid';

export default function AddProductForm({ user }) {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [productCurrency, setProductCurrency] = useState('');
    const [productStockQty, setProductStockQty] = useState('');
    const [productSoldQty, setProductSoldQty] = useState('');
    const [productSellingPrice, setProductSellingPrice] = useState('');
    const [featuredImage, setFeaturedImage] = useState(null);
    const [url, setUrl] = useState('');
    const toast = useToast()

    useEffect(() => {
        if (!user) {
            Router.push("/login")
        }
    }, [])

    useEffect(() => {
        if (url) {
            try {
                db.collection('products').add({
                    productName,
                    productPrice,
                    productSellingPrice,
                    productCurrency,
                    productDesc,
                    productSoldQty,
                    productStockQty,
                    featuredImage: url,
                    createdAt: serverTimeStamp()
                })
                toast({
                    title: "Product Data added Successfully",
                    position: "top-right",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                })
                Router.push("/shop-list")
            } catch (error) {
                toast({
                    title: error.message,
                    position: "top-right",
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                })
            }

        }
    }, [url])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!productName || !featuredImage || !productPrice || !productSellingPrice || !productCurrency || !productDesc ||
            !productStockQty || !productSoldQty) {
            toast({
                title: "please add all the Fields.",
                position: "top-right",
                status: "error",
                duration: 4000,
                isClosable: true,
            })
            return
        }
        var uploadTask = storage.ref().child(`featured_image/${uuidv4()}`).put(featuredImage)
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (progress == '100') {
                    toast({
                        title: "Image Upload Successfully",
                        position: "top-right",
                        status: "success",
                        duration: 4000,
                        isClosable: true,
                    })
                }
            },
            (error) => {
                alert(error.message)
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // console.log('File available at', downloadURL);
                    setUrl(downloadURL)
                });
            }
        );

    }
    return (
        <div className="contact-box-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-12" style={{ marginLeft: "190px" }}>
                        <div className="contact-form-right">
                            <h2>Add Product</h2>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                value={productName}
                                                placeholder="Enter Product Name"
                                                className="form-control"
                                                onChange={(e) => setProductName(e.target.value)}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex" }}>
                                        <div className="col-md-5">
                                            <div className="form-group">

                                                <select
                                                    value={productCurrency}
                                                    placeholder="Currency"
                                                    className="form-control"
                                                    onChange={(e) => setProductCurrency(e.target.value)}
                                                >
                                                    <option>Select</option>
                                                    <option>₹</option>
                                                    <option>$</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-5" >
                                            <div className="form-group">
                                                <input
                                                    style={{ width: "100%" }}
                                                    type="number"
                                                    value={productPrice}
                                                    placeholder="Enter Product Price"
                                                    className="form-control"
                                                    onChange={(e) => setProductPrice(e.target.value)}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="number"
                                                    style={{ width: "82%" }}
                                                    value={productSellingPrice}
                                                    placeholder="Enter Product Selling Price"
                                                    className="form-control"
                                                    onChange={(e) => setProductSellingPrice(e.target.value)}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                type="text"
                                                value={productDesc}
                                                placeholder="Enter Product Description"
                                                className="form-control"
                                                onChange={(e) => setProductDesc(e.target.value)}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex" }}>
                                        <div className="col-md-9" >
                                            <div className="form-group">
                                                <input
                                                    type="number"
                                                    value={productStockQty}
                                                    placeholder="Enter Product Stock Qty"
                                                    className="form-control"
                                                    onChange={(e) => setProductStockQty(e.target.value)}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-10" >
                                            <div className="form-group">
                                                <input
                                                    type="number"
                                                    value={productSoldQty}
                                                    placeholder="Enter Product Sold Qty"
                                                    className="form-control"
                                                    onChange={(e) => setProductSoldQty(e.target.value)}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="file"
                                                className="form-control"
                                                onChange={(e) => setFeaturedImage(e.target.files[0])}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="submit-button text-center">
                                            <button
                                                className="btn hvr-hover"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                            <div className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
