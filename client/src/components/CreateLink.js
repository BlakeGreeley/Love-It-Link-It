import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateLink = ( ) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/link", 
                {name, linkOne, linkOneDescription, linkTwo, linkTwoDescription, linkThree, linkThreeDescription, linkFour, linkFourDescription})
            .then((response) => {
                console.log(response);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };


    return (
        <div className='container'>
            
            {/* HEADER */}

            <div className="header">
                <h1 className="title">Love It Link It</h1>
                <div className='nav-btns'>
                    <Link to='/home' className='btn-header'>Home</Link>
                    <Link to='/' className='btn-header'>Signout</Link>
                </div>
            </div>

            {/* TEXT BEFORE FORMS */}

            <h2 className='message'>Want to increase your marketing visibility? <br/>
            Adding a link page will give you the boost you have been wanting!</h2>

            <h1 className='description'>Enter Page Info:</h1>

            {/* FORM */}

            <div className='form'>
                <form onSubmit={handleSubmit} className='inputs'>
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

                    <button className='btn' type="submit" link to = '/'>
                        Add Page
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateLink;