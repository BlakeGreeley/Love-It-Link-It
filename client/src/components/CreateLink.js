import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateLink = ( ) => {
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
                {linkOne, linkOneDescription, linkTwo, linkTwoDescription, linkThree, linkThreeDescription, linkFour, linkFourDescription})
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
                    {/* signout link */} <button className="btn-header">Signout</button>
                    <Link to='/' className='btn-header'>Home</Link>
                </div>
            </div>

            <h2 className='message'>Want to increase your marketing visibility? <br/>
            Adding a link page will give you the boost you have been wanting!</h2>

            <h1 className='form-start'>Enter Page Info:</h1>
        </div>
    )
}

export default CreateLink;