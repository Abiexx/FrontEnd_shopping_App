import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/AuthContext';
import productService from '../../services/productService';
import AddProductForm from '../AddProductForm';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

// Mock the useAuth hook
jest.mock('../../store/AuthContext', () => ({
  useAuth: jest.fn(() => ({ currentUser: { accessToken: 'fake-token' } })),
}));

// Mock the productService module
jest.mock('../../services/productService', () => ({
  postProduct: jest.fn(() => Promise.resolve({ data: { id: 1, ...product } })),
}));

describe('AddProductForm', () => {
  const product = {
    product_name: 'Test Product',
    product_price: '10.99',
    product_description: 'This is a test product',
    imageUrl: 'https://example.com/test-product.jpg',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the form fields', () => {
    const { getByLabelText } = render(<AddProductForm />);
    expect(getByLabelText('Product Name')).toBeInTheDocument();
    expect(getByLabelText('Product Price')).toBeInTheDocument();
    expect(getByLabelText('Product Description')).toBeInTheDocument();
    expect(getByLabelText('Image URL')).toBeInTheDocument();
  });

  it('should update the product state when input values change', () => {
    const { getByLabelText } = render(<AddProductForm />);
    fireEvent.change(getByLabelText('Product Name'), {
      target: { value: product.product_name },
    });
    fireEvent.change(getByLabelText('Product Price'), {
      target: { value: product.product_price },
    });
    fireEvent.change(getByLabelText('Product Description'), {
      target: { value: product.product_description },
    });
    fireEvent.change(getByLabelText('Image URL'), {
      target: { value: product.imageUrl },
    });
    expect(getByLabelText('Product Name')).toHaveValue(product.product_name);
    expect(getByLabelText('Product Price')).toHaveValue(product.product_price);
    expect(getByLabelText('Product Description')).toHaveValue(product.product_description);
    expect(getByLabelText('Image URL')).toHaveValue(product.imageUrl);
  });

  it('should call the productService.postProduct method with the product data on form submission', async () => {
    const { getByRole } = render(<AddProductForm />);
    fireEvent.change(getByRole('textbox', { name: 'Product Name' }), {
      target: { value: product.product_name },
    });
    fireEvent.change(getByRole('spinbutton', { name: 'Product Price' }), {
      target: { value: product.product_price },
    });
    fireEvent.change(getByRole('textbox', { name: 'Product Description' }), {
      target: { value: product.product_description },
    });
    fireEvent.change(getByRole('textbox', { name: 'Image URL' }), {
      target: { value: product.imageUrl },
    });
    fireEvent.submit(getByRole('button', { name: 'Add Product' }));
    await waitFor(() => expect(productService.postProduct).toHaveBeenCalledWith(
      'fake-token',
      expect.objectContaining(product)
    ));
  });

  it('should navigate to the Products page after successful form submission', async () => {
    useNavigate.mockReturnValue(jest.fn());
    const { getByRole } = render(<AddProductForm />);
    fireEvent.submit(getByRole('button', { name: 'Add Product'}));
await waitFor(() => expect(useNavigate).toHaveBeenCalledWith('/Products', expect.any(Object)));
});
});