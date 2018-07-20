import React from 'react';

const AuthorDetails = ({imgUrl, name, blurb}) => (
    <div className="author-details"> 
        <h1>About the Author</h1>
        <div className="author-image"> </div>
            <img src={imgUrl} alt="author-image"/>
            <p>John Smith's rating</p>
            <p>John Smith's reviews</p>
        <div className="author-info"> 
            <h2>John Smith</h2>
            <p>John Smith's blurb</p>
            <p>John Smoth's other things to show </p>
        </div>
    </div>
);

export default AuthorDetails;