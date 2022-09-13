import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';

const ViewLink = () => {
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
    const [allLinks, setAllLinks] = useState([]);
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
                console.log("error while looking up id", err.response);
            });

    }, []);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/link/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/home");
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
                    <Link to='/home' className='btn-header'>Home</Link>
                    <Link to='/' className='btn-header'>Signout</Link>
                </div>
            </div>

            {/* TITLE */}

            <h2 className='description'>{name} Page</h2>

            <div className='view-table'>
                
                <div className='form'>
                    <div className='inputs'>
                        <h3 className='page-title'>Link One: </h3>
                         <h3><a href='${linkOne}'>{linkOne}</a></h3> {/* idea */}
                    </div>

                    <div className='inputs'>
                        <h3 className='page-title'>Link One Description: </h3>
                        <h3>{linkOneDescription}</h3>
                    </div>

                    <div className='inputs'>
                        <h3 className='page-title'>Link Two: </h3>
                        <h3><a href ='${linkTwo}'>{linkTwo}</a></h3>
                    </div>

                    <div className='inputs'>
                        <h3 className='page-title'>Link Two Description: </h3>
                        <h3>{linkTwoDescription}</h3>
                    </div>

                    <div className='inputs'>
                        <h3 className='page-title'>Link Three: </h3>
                        <h3><a href ='${linkThree}'>{linkThree}</a></h3>
                    </div>

                    <div className='inputs'>
                        <h3 className='page-title'>Link Three Description: </h3>
                        <h3>{linkThreeDescription}</h3>
                    </div>

                    <div className='inputs'>
                        <h3 className='page-title'>Link Four: </h3>
                        <h3><a href ='${linkFour}'>{linkFour}</a></h3>
                    </div>

                    <div className='inputs'>
                        <h3 className='page-title'>Link Four Description: </h3>
                        <h3>{linkFourDescription}</h3>
                    </div>

                    <div className='actions'>
                        <Link onClick = {() => deleteHandler(Link._id)} className="btn-body" navigate to = '/home'>
                            Delete Page
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewLink;