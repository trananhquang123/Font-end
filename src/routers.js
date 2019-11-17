import React from 'react';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import ProductListPage from './pages/ProductListPage';
import ProductActionPage from './pages/ProductActionPage';

const routers = [
    {
        path :'/',
        exact : true,
        component :()=> <Home />
    },
    {
        path :'/ManagerProduct',
        exact:false,
        component : ({ match }) => <ProductListPage match ={match} />
    },
    {
        path: '/addProduct/:id/edit',
        exact: false,
        component: ({history, match}) => <ProductActionPage history = {history} match = {match} />
    },
    {
        path: '/addProduct',
        exact: false,
        component: ({history}) => <ProductActionPage history = {history} />
    },
    {
        path: '',
        exact: false,
        component: () => <NotFoundPage />
    }
];

export default routers;