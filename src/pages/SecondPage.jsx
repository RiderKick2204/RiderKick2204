import { useEffect, useState } from "react";
import '../style/contentEffectPage.css';


//Using useEffect to fetch data from an API
export default function SecondPage() {
    const [type, setType] = useState('posts');
    const [post, setPosts] = useState([]);
    const types = ['posts', 'todos'];

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [type]);

    console.log('re-render');
    return (
        <div className='display: flex'>
            <h2> useEffect </h2>
            {types.map(t => (
                <button key={t} onClick={() => setType(t)}>{t}</button>
            ))}
            <ul className="contentEffectPage">
                {post.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}