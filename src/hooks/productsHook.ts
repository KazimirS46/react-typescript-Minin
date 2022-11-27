import { useState, useEffect } from 'react';
import axios from 'axios';
import { IProduct } from '../models';

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchProducts() {
    try {
      setError('');
      setLoading(true);
      const res = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products?limit=5'
      );
      setProducts(res.data);
      setLoading(false);
    } catch (e: any) {
      const error = e;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error, loading };
}
