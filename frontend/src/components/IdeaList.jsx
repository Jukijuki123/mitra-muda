import { useEffect, useState } from 'react';
import axios from 'axios';

function IdeasList() {
const [ideas, setIdeas] = useState([]);

useEffect(() => {
    axios.get('http://localhost:8000/api/ideas')
    .then(response => {
        console.log('Data dari API:', response.data);
        setIdeas(response.data);
    })
    .catch(error => {
        console.error('Ada masalah saat mengambil data:', error);
    });
}, []);

return (
    <div>
    <h2>Daftar Ide</h2>
    {ideas.map(idea => (
        <div key={idea.id}>
        <h3>{idea.title}</h3>
        <p>{idea.description}</p>
        </div>
    ))}
    </div>
);
}

export default IdeasList;