import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Components/Card';

function Rentals() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'http://localhost:5000/api/books'
        );
        // Convert the nested object into an array of objects
        // console.log(response);
        const dataArray = response.data.data.filter(book => book.rented === true);

        setPosts(dataArray);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadPost();
  }, []);

  return (
    <>
    <div className="Store">
      {loading ? (
        <h4>Loading...</h4>
      ) : error ? (
        <h4>Error: {error}</h4>
      ) : (
        posts.map((item, index) => (
          <div key={index}>
            <Card title={item.title} author={item.authors} rating={item.average_rating} />
            {/* Render other data fields here */}
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default Rentals;
