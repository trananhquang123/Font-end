import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';
import callApi from '../util/CallerApi';
import { Link } from 'react-router-dom';
import {  actFetchProductsRequest ,actDeleteProductsRequest} from './../actions/index';
import { connect } from 'react-redux';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount = () => {

        this.props.fetchAllProducts();

    }
    onDelete = (id) => {
        this.props.DeleteProduct(id);
    }

    

    render() {

        var { products } = this.props;
        
        return (
            <div className="container" >

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                        <Link to="/addProduct" className="btn btn-info mr-10">
                            Them San Pham
                    </Link>


                        <ProductList>
                            {this.showProduct(products)}
                        </ProductList>
                    </div>
                </div>

            </div>

        )
    }

    showProduct(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete = {this.onDelete}
                    />
                )
            })
        }
        return result;
    }

}


const mapStateToProps = state => {
    return {
        products: state.Product
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        DeleteProduct: (id) => {
            dispatch(actDeleteProductsRequest(id));
        }
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);

