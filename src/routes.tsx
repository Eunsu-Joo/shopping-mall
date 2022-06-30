
import React from 'react';
import GlobalLayout from './pages/_layout'

const DynamicHome = React.lazy(() => import('./pages/index'));
const DynamicCart = React.lazy(() => import('./pages/cart/index'));
const DynamicProducts = React.lazy(() => import('./pages/products/index'));
const DynamicProductId = React.lazy(() => import('./pages/products/[id]'));


export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <DynamicHome />, index: true},
      { path: '/cart', element: <DynamicCart />, index: true},
      { path: '/products', element: <DynamicProducts />, index: true},
      { path: '/products/:id', element: <DynamicProductId />, },
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/cart' },
  { route: '/products' },
  { route: '/products/:id' },
]
