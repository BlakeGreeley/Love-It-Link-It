import { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

const Main = () => {
    const [allLinks, setAllLinks] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/link')
            .then((response) => {
                console.log(response.data);
                setAllLinks(response.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    return (
        <div className="container">
            <div className="header">
                <h1 className="title">Love It Link It</h1>
                {/* signout link */}
            </div>
        </div>
    )
}

export default Main;