import React, { Component } from 'react';
import callApi from '../util/CallerApi';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest ,actFetchProductsRequest } from '../actions';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: '',
            name: '',
            price: '',
            productType: '',
            description: ''
        }
    }

    componentWillMount (){
        var { match } = this.props;
        
        if(match){
            var id = match.params.id;
            callApi(`api/product/${id}`, 'GET', null)
                .then(res => {
                    var data = res.data.data;
                    console.log(data);
                    this.setState({
                        image: data.image,
                        name: data.name,
                        price: data.productPrice,
                        productType: data.productTypes,
                        description: data.description
                    })
                    console.log(this.state);
                })
          
        }
        
    }

    onChange = (event) => {

        var target = event.target;
        var name = target.name;
        var value = target.type === 'text' ? target.value : target.files[0];
        this.setState({
            [name]: value
        });
        console.log(value);

    }
    

    onSubmit = (event) => {
        var state = this.state;
        var { image, name, price, productType, description } = this.state;
        var { history } = this.props;
        if (image === null || name === null || price === null || productType === null || description === null) {
            alert("bạn nhập đầy đủ thông tin");
            event.preventDefault();
            
        } else {
            event.preventDefault();
            const fd = new FormData();
            fd.append('image', this.state.image, this.state.image.name);
            fd.append('name', this.state.name);
            fd.append('productType', this.state.productType);
            fd.append('description', this.state.description);
            fd.append('price', this.state.price);

            this.props.AddProduct(fd);
            this.props.fetchAllProducts();
            history.goBack();
            
        }
    }
    render() {
        var {image,name,price,productType,description} = this.state;
        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <form onSubmit={this.onSubmit}>
                    <legend>Form title</legend>
 <                  div className="form-group">
                        <label >ảnh</label>
                        <input type="file"  name="image" onChange={this.onChange} className="form-control" id=""  />
                    </div> 

                    <div className="form-group">
                        <label >Tên</label>
                        <input type="text" value = {name} name="name" onChange={this.onChange} className="form-control" id=""  />
                    </div>

                    <div className="form-group">
                        <label >Giá</label>
                        <input type="text" value = {price} name="price" onChange={this.onChange} className="form-control" id=""  />
                    </div>

                    <div className="form-group">
                        <label >Hãng điện thoại</label>
                        <input type="text" value = {productType} name="productType" onChange={this.onChange} className="form-control" id=""  />
                    </div>
                    <div className="form-group">
                        <label >Miêu tả</label>
                        <input type="text" value = {description} name="description" onChange={this.onChange} className="form-control" id=""  />
                    </div>
                    <button type="submit" className= "btn btn-primary" >Submit</button>
                    <Link to="/ManagerProduct" className="btn btn-danger">Trở lại</Link>
                </form>

            </div>




        )
    }


}


const mapStateToProps = state => {
   return{

   } 
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        
        AddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        }
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);



