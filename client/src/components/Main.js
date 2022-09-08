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

            {/* HEADER */}
            <div className="header">
                <h1 className="title">Love It Link It</h1>
                {/* signout link */} <button type="submit" link to='/new' className="btn-header">Signout</button>
            </div>

            <h2 className="message">Welcome, </h2>

            <div className="content">
                <div className="left-content">
                    <h2 className="label">Explore Current Linked Pages:</h2>
                    
                    {/* TABLE WITH ALL THE CURRENT LINKED PAGES */}
                    <div className="table">
                        <thead>
                            <tr>
                                <th>Name </th>
                                <th>First Link </th>
                                <th>Expand </th>
                            </tr>
                        </thead>

                        <tbody>
                            {allLinks.map((link, index) => {
                                return (
                                    <tr key = {link._id}>
                                        <td>{link._id}</td>
                                        <td><a href='{link.linkOne}'>{link.linkOne}</a></td>
                                        <td><Link to ={`/view/${link._id}`} className="btn-action">Expand</Link></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </div>
                </div>

                <div className="right-content">
                    {/* WHERE CREATE BOX IS LOCATED THAT REDIRECTS TO CREATE PAGE */}
                    <div className="create-box">
                        <h3>Add a Linked Page</h3>
                        <Link to ="/new" className="btn-body">Create</Link>
                    </div>

                    {/* BOX ABOUT THE COMPANY AND ABOUT THE ENGINEER THAT CODED IT */}
                    <div className="about-box">
                        <h3 className="label">About Us:</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;