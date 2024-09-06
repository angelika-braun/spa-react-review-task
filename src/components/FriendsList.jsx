import { useState, useEffect } from 'react';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setFriends(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Lade...</div>;
  }

  if (error) {
    return <div>Fehler: {error}</div>;
  }

  return (
    <div>
      <h2>Freunde</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>
            {friend.name} ({friend.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;