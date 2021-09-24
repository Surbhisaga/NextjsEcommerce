import { useDispatch } from "react-redux";
import { db } from "../../firebase"
import { addToCart } from '../../actions/cart';
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Productpage({ product, user, allComments }) {
    const dispatch = useDispatch();

    const [comment, setComment] = useState(' ');
    const [allCommentsBlog, setAlllComment] = useState(allComments);

    const router = useRouter()
    const { productid } = router.query
    const makeComment = async () => {
        await db.collection('products').doc(productid).collection('comments').add({
            text: comment,
            name: user.displayName,
        })
        const commentQuery = await db.collection('products').doc(productid).collection('comments').get()
        setAlllComment(commentQuery.docs.map(docSnap => docSnap.data()))
    }

    return (
        <div className="shop-detail-box-main">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6">
                        <div id="carousel-example-1" className="single-product-slider carousel slide" data-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={product.featuredImage} alt={product.productName} />
                                </div>
                            </div>
                        </div>

                        {user ?
                            <>
                                <div className="col-md-12 mt-5" style={{ display: "flex" }}>
                                    <div className="col-10 form-group" >
                                        <input
                                            type="text"
                                            value={comment}
                                            placeholder="Add a Comment"
                                            style={{ outline: 0, borderColor: "orange", borderBottom: "1px solid orange", width: "100%", height: "45px" }}
                                            onChange={(e) => setComment(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => makeComment()}
                                        >
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </> :
                            <span style={{fontFamily:"fantasy",wordSpacing:"3px",fontSize:"20px",marginLeft:"70px"}}>
                                <a href="/login">Please login to make comment</a>
                            </span>
                        }
                        <div style={{ marginTop: "18px" }}>
                            <h3>Comments</h3>
                            <hr />
                            {allCommentsBlog.map((item, i) => {
                                return (
                                    <div key={i} style={{ display: "flex", marginTop: "10px" }}>
                                        <b><h4>{item.name}</h4></b>
                                        <span style={{ marginLeft: "35px" }}>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                    <div className="col-xl-7 col-lg-7 col-md-6">
                        <div className="single-product-details">
                            <h2>{product.productName}</h2>
                            <h5>
                                <del>
                                    {product.productCurrency} {product.productPrice}
                                </del>{" "}
                                {product.productCurrency}
                                {product.productSellingPrice}
                            </h5>
                            <p className="available-stock">
                                <span>
                                    More than {product.productStockQty} available /{" "}
                                    <a href="#">{product.productSoldQty} sold </a>
                                </span>

                                <h4>Description:</h4>
                                <p>{product.productDesc}</p>
                                <ul>
                                    <li>
                                        <div className="form-group size-st">
                                            <label className="size-label">Size</label>
                                            <select id="basic" className="selectpicker show-tick form-control">
                                                <option value="0">Size</option>
                                                <option value="0">S</option>
                                                <option value="1">M</option>
                                                <option value="1">L</option>
                                                <option value="1">XL</option>
                                                <option value="1">XXL</option>
                                                <option value="1">3XL</option>
                                                <option value="1">4XL</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-group quantity-box">
                                            <label className="control-label">Quantity</label>
                                            <input
                                                className="form-control"
                                                value="0"
                                                min="0"
                                                max="20"
                                                type="number"
                                            />
                                        </div>
                                    </li>
                                </ul>

                                <div className="price-box-bar">
                                    <div className="cart-and-bay-btn">
                                        <a
                                            className="btn hvr-hover"
                                            data-fancybox-close=""
                                            style={{ color: "white" }}
                                            onClick={() => dispatch(addToCart(product))}
                                        >
                                            Add to cart
                                        </a>
                                    </div>
                                </div>

                                <div className="add-to-btn">
                                    <div className="add-comp">
                                        <a className="btn hvr-hover" href="#">
                                            <i className="fas fa-heart"></i> Add to wishlist
                                        </a>

                                    </div>
                                    <div className="share-bar">
                                        <a className="btn hvr-hover" href="#">
                                            <i className="fab fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a className="btn hvr-hover" href="#">
                                            <i className="fab fa-google-plus" aria-hidden="true"></i>
                                        </a>
                                        <a className="btn hvr-hover" href="#">
                                            <i className="fab fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a className="btn hvr-hover" href="#">
                                            <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                                        </a>
                                        <a className="btn hvr-hover" href="#">
                                            <i className="fab fa-whatsapp" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>

                {/* <FeaturedProducts /> */}
            </div>
        </div>
    )
}


export async function getServerSideProps({ params: { productid } }) {
    const result = await db.collection("products").doc(productid).get()
    const allCommentsSnap = await db.collection('products').doc(productid).collection('comments').get()

    const allComments = allCommentsSnap.docs.map(comDocSnap => comDocSnap.data())
    return {
        props: {
            product: {
                ...result.data(),
                createdAt: result.data().createdAt.toMillis()
            },
            allComments
        },
    }
}
