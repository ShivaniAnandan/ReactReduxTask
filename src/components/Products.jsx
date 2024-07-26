import React, { useContext, useState } from 'react';
import { addItem,removeItem } from '../redux/ProductSlice';
import {useSelector,useDispatch} from 'react-redux';

const Products = ({ products }) => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // function to add item to cart
  const addToCart = (product) => {
    dispatch(addItem(product));
  };
  
  // function to remove item from cart
  const removeFromCart = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {products.map((item, index) => {
             const isInCart = items.some(cartItem => cartItem.id === item.id);
            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div
                  className="card bg-dark text-white mb-3 ms-3"
                  style={{
                    width: 300,
                    height:450,
                    borderRadius: 10,
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <div className="card-body">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-img-top"
                      style={{
                        height: 150,
                        objectFit: 'cover',
                        borderRadius: '10px 10px 0 0',
                      }}
                    />
                    <h5
                      className="card-title"
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 10,
                      }}
                    >
                      {item.title}
                    </h5>
                    <p
                      style={{
                        fontSize: 20,
                        color: '#ccc',
                        marginBottom: 10,
                      }}
                    >
                      {item.description}
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#fff',
                      }}
                    >
                      Rs. {item.price}
                    </p>
                    {isInCart ? (
                      <button onClick={() => removeFromCart(item.id)} className='btn btn-dark border-white'>Remove from Cart</button>
                    ) : (
                      <button onClick={() => addToCart(item)} className='btn btn-dark border-white'>Add to Cart</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;