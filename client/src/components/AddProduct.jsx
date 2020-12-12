import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
    
    
const AddProduct = props => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(10);
    const [description, setDescription] = useState("");


    const handelClick = (e) => {
        // console.log('test')
        axios.post('http://localhost:8000/api/products/new', {title, price, description})
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
    };

    return (
        <div className="container mt-5 ">
            <form className='centered align-center' onSubmit={handelClick}>
                <h1 className="mb-3">Product Manager</h1>
                <div className="form-group row  ml-3 rounded border col-sm-4 bg-light">
                    <label className="col-sm-12 col-form-label text-muted">Title 
                        <input type="text" className='ml-3 rounded border ' onChange={e => setTitle(e.target.value)} value={title}/>
                    </label>
                </div>
                <div className="form-group row  ml-3 rounded border col-sm-4 bg-light" >
                    <label className="col-sm-12 col-form-label text-muted">Price
                        <input type="number" min='10' className='ml-3 rounded border ' onChange={e => setPrice(e.target.value)} value={price}/>
                    </label>
                </div>
                <div className="form-group row  ml-3 rounded border  col-sm-4 bg-light" >
                    <label className="col-sm-12 col-form-label text-muted">Description
                        <input type="text" className='ml-3 rounded border ' onChange={e => setDescription(e.target.value)} value={description}/>
                    </label>
                </div>
                <input type="submit" value="Create" className="btn btn-info"/>
            </form>
        </div>
    );
};
export default AddProduct;
