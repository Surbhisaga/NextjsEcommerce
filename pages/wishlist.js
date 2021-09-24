import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cart';
import { deleteProductwishlist } from '../actions/wishlist';

export default function wishlist() {
    const wishlistProducts = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="wishlist-box-main">
                {wishlistProducts.length> 1 && (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-main table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Images</th>
                                                <th>Product Name</th>
                                                <th>Unit Price </th>
                                                <th>Stock</th>
                                                <th>Add Item</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wishlistProducts.map((product) => {
                                                return (
                                                    <tr key={product.id}>
                                                        <td className="thumbnail-img">
                                                            <a href="#">
                                                                <img className="img-fluid" src={`images/${product.featured_image}`} alt="" />
                                                            </a>
                                                        </td>
                                                        <td className="name-pr">
                                                            <a href="#">
                                                                {product.name}
                                                            </a>
                                                        </td>
                                                        <td className="price-pr">
                                                            <p>{product.currency} {product.selling_price}</p>
                                                        </td>
                                                        <td className="quantity-box">In Stock</td>
                                                        <td className="add-pr">
                                                            <a className="btn hvr-hover" onClick={() => dispatch(addToCart(product))}>
                                                                Add to Cart
                                                            </a>
                                                        </td>
                                                        <td className="remove-pr">
                                                            <a
                                                                role="button"
                                                                onClick={dispatch.bind(
                                                                    null,
                                                                    deleteProductwishlist(product.id)
                                                                )}
                                                            >
                                                                <i className="fas fa-times"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                )}

            </div>
        </div>
    )
}
	