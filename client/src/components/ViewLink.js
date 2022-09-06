import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';

const ViewLink = () => {
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
    console.log(id);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/link/${id}`)
            .then((response) => {
                console.log(response.data);
                setLinkOne(response.data.linkOne);
                setLinkOneDescription(response.data.setLinkOneDescription);
                setLinkTwo(response.data.linkTwo);
                setLinkTwoDescription(response.data.setLinkTwoDescription);
                setLinkThree(response.data.linkThree);
                setLinkThreeDescription(response.data.setLinkThreeDescription);
                setLinkFour(response.data.linkFour);
                setLinkFourDescription(response.data.setLinkFourDescription);
            })
            .catch((err) => {
                console.log(err.response);
                console.log("error while looking up id", err.response);
            });

    }, []);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/link/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
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

        </div>
    )
}

export default ViewLink;