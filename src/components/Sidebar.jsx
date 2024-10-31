import '../style/Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <h2> Hooks </h2>
            <ul>
                <li><Link to="/useState">useState</Link></li>
                <li><Link to="/useEffect">useEffect</Link></li>
                <li><Link to="/useContext">useContext</Link></li>
                <li><Link to="/useRef">useRef</Link></li>
                <li><Link to="/useReducer">useReducer</Link></li>
                <li><Link to="/useMemo">useMemo</Link></li>
            </ul>
        </div>
    );
}
