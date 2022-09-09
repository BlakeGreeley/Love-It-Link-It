import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditLink = (props) => {
    const {id} = useParams();
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
        <div className="container">
            
            {/* HEADER */}

            <div className="header">
                <h1 className="title">Love It Link It</h1>
                <div className='nav-btns'>
                    {/* signout link */} <button className="btn-header">Signout</button>
                    <Link to='/' className='btn-header'>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default EditLink;