
import React, {useEffect} from 'react';
import GlobalLayout from './pages/_layout'

const DynamicIndex = React.lazy(() => import('./pages/index'));
const DynamicProductIndex = React.lazy(() => import('./pages/products/index'));
const DynamicProductId = React.lazy(() => import('./pages/products/[id]'));


export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true},
      { path: '/products', element: <DynamicProductIndex />, index: true},
      { path: '/products/:id', element: <DynamicProductId />, },
    ]
  }
]

export const pages = [
  { route: './' },
  { route: '/products' },
  { route: '/products/:id' },
]
