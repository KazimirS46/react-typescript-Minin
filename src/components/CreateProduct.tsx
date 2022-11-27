import React, { useState } from 'react';
import axios from 'axios';
import { IProduct } from '../models';

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 18,
  },
};

export function CreateProduct() {
  const [value, setValue] = useState('');

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    productData.title = value;
    const response = await axios.post<IProduct>(
      'https://fakestoreapi.com/products',
      productData
    );
  };

  const changeHandler = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />
      <button type="submit" className="py-2 px-4 border bg-yellow-400">
        Create
      </button>
    </form>
  );
}
