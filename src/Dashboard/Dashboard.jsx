import React from 'react'
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function Dashboard() {
    const[projects, setProjects] = useState([]);

    function fetchData() {
        fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects")
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error("Error fetching data:", error));
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log(projects);
    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ProjectName</th>
                        <th>Details</th>
                        <th>Department</th>
                        <th>StartDate</th>
                        <th>EndDate</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={project.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{project.ProjectName}</td>
                            <td>{project.Details}</td>
                            <td>{project.Department}</td>
                            <td>{project.startDate}</td>
                            <td>{project.endDate}</td>
                            <td>{project.status}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Dashboard