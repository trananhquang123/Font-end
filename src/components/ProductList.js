import React, { Component } from 'react';
import ProductItem from './ProductItem';


class ProductList extends Component {

    render() {

        return (
            
            <div className="panel panel-primary mr-10">
            <div className="panel-heading">
                <h3 className="panel-title">Danh Sach San Pham</h3>
            </div>
            <div className="panel-body">

                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ảnh</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Miêu tả</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>

            </div>
        </div>




        )
    }


}



export default ProductList;



