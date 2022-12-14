import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditLink = (props) => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [linkOne, setLinkOne] = useState("");
    const [linkOneDescription, setLinkOneDescription] = useState("");
    const [linkTwo, setLinkTwo] = useState("");
    const [linkTwoDescription, setLinkTwoDescription] = useState("");
    const [linkThree, setLinkThree] = useState("");
    const [linkThreeDescription, setLinkThreeDescription] = useState("");
    const [linkFour, setLinkFour] = useState("");
    const [linkFourDescription, setLinkFourDescription] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    const [linkNotFoundError, setLinkNotFoundError] = useState("");
    console.log(id);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/link/${id}`)
            .then((response) => {
                console.log(response.data);
                setName(response.data.name);
                setLinkOne(response.data.linkOne);
                setLinkOneDescription(response.data.linkOneDescription);
                setLinkTwo(response.data.linkTwo);
                setLinkTwoDescription(response.data.linkTwoDescription);
                setLinkThree(response.data.linkThree);
                setLinkThreeDescription(response.data.linkThreeDescription);
                setLinkFour(response.data.linkFour);
                setLinkFourDescription(response.data.linkFourDescription);
            })
            .catch((err) => {
                console.log(err.response);
                setLinkNotFoundError('Pet was not found with id');
            });

    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/link/${id}`,
            {name, linkOne, linkOneDescription, linkTwo, linkTwoDescription, linkThree, linkThreeDescription, linkFour, linkFourDescription})
            .then((response) => {
                console.log(response);
                navigate('/home');
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };

    return (
        <div className="container">
            
            {/* HEADER */}

            <div className="header">
                <h1 className="title">Love It Link It</h1>
                <div className='nav-btns'>
                <Link to='/home' className='btn-header'>Home</Link>
                    <Link to='/' className='btn-header'>Signout</Link>
                </div>
            </div>

            <h1 className="description2">Edit your linked page</h1>

            {/* FORM */}

            <div className='form'>
                <form onSubmit={submitHandler} className='inputs'>

                    <div className='inputs'>
                        <label htmlFor='name'>Name for page: </label>
                        <input
                            type="text"
                            className='form-input'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        {errors.name ? <p>{errors.name.message}</p> : null}
                    </div>

                    <div className='inputs'>
                        <label htmlFor='linkOne'>First Link: </label>
                        <input
                            type="text"
                            className='form-input'
                            onChange={(e) => setLinkOne(e.target.value)}
                            value={linkOne}
                        />
                        {errors.linkOne ? <p>{errors.linkOne.message}</p> : null}
                    </div>

                    <div className='inputs'>
                        <label htmlFor='linkOneDescription'>Name for First Link: </label>
                        <input
                            type="text"
                            className='form-input'
                            onChange={(e) => setLinkOneDescription(e.target.value)}
                            value={linkOneDescription}
                        />
                        {errors.linkOneDescription ? <p>{errors.linkOneDescription.message}</p> : null}
                    </div>

                    <div className='inputs'>
                        <label htmlFor='linkTwo'>Second Link: </label>
                        <input
                            type="text"
                            className='form-input'
                            onChange={(e) => setLinkTwo(e.target.value)}
                            value={linkTwo}
                        />
                        {errors.linkTwo ? <p>{errors.linkTwo.message}</p> : null}
                    </div>

                    <div className='inputs'>
                        <label htmlFor='linkTwoDescription'>Name for Second Link: </label>
                        <input
                            type="text"
                            className='form-input'
                            onChange={(e) => setLinkTwoDescription(e.target.value)}
                            value={linkTwoDescription}
                        />
                        {errors.linkTwoDescription ? <p>{errors.linkTwoDescription.message}</p> : null}
                    </div>

                    <div className='inputs'>
                        <label htmlFor='linkThree'>Third Link: </label>
                        <input
                            type="text"
                            className='form-input'
                            onChange={(e) => setLinkThree(e.target.value)}
                            value={linkThree}
                        />
                        {errors.linkThree ? <p>{errors.linkThree.message}</p> : null}
                    </div>

                    <div className='inputs'>
                        <label htmlFor='linkThreeDescription'>Name for Third Link: </label>
                        <input
                            type="text"
                            className='form-input'
                            onChange={(e) => setLinkThreeDescription(e.target.value)}
                            value={linkThreeDescription}
                        />
                        {errors.linkThreeDescription ? <p>{errors.linkThreeDescription.message}</p> : null}
                    </div>

                    <div className='inputs'>
                        <label htmlFor='linkFour'>Fourth Link: </label>
                        <input
                            type="text"
                            className='form-input'
                            onChange={(e) => setLinkFour(e.target.value)}
                            value={linkFour}
                        />
                        {errors.linkFour ? <p>{errors.linkFour.message}</p> : null}
                    </div>

                    <div className='inputs'>
                        <label htmlFor='linkFourDescription'>Name for Fourth Link: </label>
                        <input
                            type="text"
                            className='form-input'
                            onChange={(e) => setLinkFourDescription(e.target.value)}
                            value={linkFourDescription}
                        />
                        {errors.linkFourDescription ? <p>{errors.linkFourDescription.message}</p> : null}
                    </div>

                    {/* BUTTON TO SUBMIT FORM */}

                    <button className='btn-create' type="submit" link to = '/'>
                        Edit Page
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditLink;