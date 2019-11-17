import React, { Component } from 'react';   
import { Link } from 'react-router-dom';


class ProductItem extends Component {

    onDelete = (id)=>{
        if(confirm('Bạn có chắc muốn xóa ?')){//eslint-disable-line
            this.props.onDelete(id);
        }
        
    };

    render() {
        var { index, product } = this.props;
        return (


            <tr>
                <td>{index+1}</td>
                <td>
                    
                    <img  src={product.image} className="img-responsive img" alt="Image" />
                    
                </td>
                <td>{product.name}</td>
                <td>{product.productPrice}</td>
                <td>{product.description}</td>
                <td>


                    <button onClick = {() => this.onDelete(product.id)} type="button" className="btn btn-success">Xóa</button>

                    <Link  to = {`/addProduct/${product.id}/edit`} className="btn btn-danger">Sửa</Link>
                </td>
            </tr>




        )
    }


}



export default ProductItem;



