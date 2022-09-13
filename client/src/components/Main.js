import { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

const Main = () => {
    const [allLinks, setAllLinks] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
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
                <Link type="submit" link to='/' className="btn-header">Signout</Link>
            </div>

            <h2 className='message'>Want to increase your marketing visibility? </h2>
            <h2 className='message'>Adding a link page will give you the boost you have been wanting!</h2>

            <div className="content">
                <div className="left-content">
                    <h2 className="label">Explore Current Linked Pages:</h2>
                    
                    {/* TABLE WITH ALL THE CURRENT LINKED PAGES */}
                    <div className="table">
                        <thead>
                            <tr>
                                <th>Name </th>
                                <th>First Link </th>
                                <th>Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {allLinks.map((link, index) => {
                                return (
                                    <tr key = {link._id}>
                                        <td>{link.name}</td>
                                        <td><a href='{link.linkOne}'>{link.linkOne}</a></td>
                                        <td>
                                            <Link to ={`/view/${link._id}`} className="btn-body">Expand</Link>
                                            <Link to = {`/edit/${link._id}`} className='btn-body'>Edit</Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </div>
                </div>

                <div className="right-content">
                    {/* WHERE CREATE BOX IS LOCATED THAT REDIRECTS TO CREATE PAGE */}
                    <div className="create-box">
                        <h3 className="description">Add a Linked Page:</h3>
                        <Link to ="/new" className="btn-create">Create</Link>
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