import { useData } from "context/DataContext";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const {state: {categories}} = useData();
    const navigate = useNavigate();


    return (
        <div className="content-container">
            <h1 className="header">Categories</h1>
            <ul className="videos-list">
                {categories.map(({_id, thumbnail, category}) => (
                    <li key={_id} onClick={() => navigate(`videos/${category}`)}>
                        <div>
                            <img src={thumbnail} alt={category} />
                        </div>
                        <h2>{category}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export {Home}