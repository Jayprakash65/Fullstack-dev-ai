import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

function Student() {
    const params = useParams();
    const navigate = useNavigate();

    const allowedUsernames = ['rohit', 'virat', 'rahul', 'dhoni', 'jay'];

    useEffect(() => {
        if (!allowedUsernames.includes(params.username)) {
            navigate('/404');
        }
    }, [params.username, navigate]);  // Dependencies added for safety

    return (
        <div>This page belongs to {params.username}</div>
    );
}

export default Student;
