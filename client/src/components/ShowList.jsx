import { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Link } from '@reach/router';
    
    
const ShowList = props => {

    const [all, setAll] = useState([]);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(10);
    const [description, setDescription] = useState("");


    const handelClick = (e) => {
        // console.log('test')
        axios.post('http://localhost:8000/api/products/new', {title, price, description})
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
    };


    useEffect( () => {
        getAll();
    }, []);

    function getAll() {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res);
                setAll(res.data);
            }).catch(err => console.error(err));
    }

    const remove = _id => {
        axios.delete("http://localhost:8000/api/products/" + _id)
            .then(res => {
                console.log(res);
                getAll();
            }).catch(err => console.error(err));
    };

    return (
        <div className="container mt-5">
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
            <div className="row justify-content-center">
                <ul className="text-center list-group list-group-flush"><h1>All Products:</h1>
                    {
                        all.map(product => 
                            <li key={product._id} className="list-group-item"> 
                                <Link to={`/view/${product._id}`} className="text-dark">{product.title}</Link> 
                                <Link to={`/edit/${product._id}`} className="btn btn-outline-info btn-sm ml-2">Edit</Link>
                                <button className="btn btn-outline-danger btn-sm ml-2" onClick={e => remove(product._id)}>Remove</button>
                            </li>
                        )
                    }
                </ul>

            </div>
        </div>
    );
};
export default ShowList;
