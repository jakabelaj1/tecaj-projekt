//library page
import React, {useEffect, useState} from 'react';
import "./library.scss";
import Add from "../add-content/Add.jsx";
const Library = () => {




//new

    const [data, setData] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);



    //old
    return (
        <>
        <div className="Library">
            <h1>Library</h1>

        </div>



            <div>
                <button onClick={openPopup}>Add Series/Movie</button>
                {isPopupOpen && <Add onClose={closePopup} />}
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <h3>{item.name}</h3>
                            <p>Release Date: {item.releaseDate}</p>
                            <img src={item.imageUrl} alt={item.name} />
                        </li>
                    ))}
                </ul>
            </div>


        </>


    )



};

export default Library;