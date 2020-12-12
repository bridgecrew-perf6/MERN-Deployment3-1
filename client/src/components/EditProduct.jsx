import { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { navigate } from '@reach/router';
    
    
const EditProduct = props => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(10);
    const [description, setDescription] = useState("");


    useEffect( () => {
        console.log(props._id);
        axios.get("http://localhost:8000/api/products/"+ props._id)
            .then(res => {
            console.log(res);
            setTitle(res.data.product.title);
            setPrice(res.data.product.price);
            setDescription(res.data.product.description);
            }).catch(err => console.error(err));
    }, [props._id]);

    const update = e => {
        e.preventDefault();
        const rest = {title, price, description};
        axios.put("http://localhost:8000/api/products/"+ props._id, rest)
            .then(res => {
                console.log(res);
                navigate("/");
            }).catch(err => {
                console.error(err);
            });
    }

    return (
        <div className="container mt-5 ">
            <form className='centered align-center' onSubmit={update}>
                <h1 className="mb-3">Update</h1>
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
                <input type="submit" value="Update Product" className="btn btn-info"/>
            </form>
        </div>
    );
};
export default EditProduct;
