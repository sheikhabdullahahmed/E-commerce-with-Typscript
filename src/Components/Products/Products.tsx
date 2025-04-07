import  { useState, useEffect } from 'react';

interface FurnitureItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

function FurnitureApp() {
  const [furniture, setFurniture] = useState<FurnitureItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://furniture-api.fly.dev')
      .then(response => {
        if (!response.ok) throw new Error('Fetch failed');
        console.log(response)
        return response.json();
      })
      .then(data => {
        setFurniture(data.map((item: any) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          image: item.image,
        })));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching furniture:', error);
        setFurniture([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading furniture...</p>;

  return (
    <div>
      <h1>Furniture List</h1>
      <ul>
        {Array.isArray(furniture) ? (
          furniture.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <img src={item.image} alt={item.name} width="100" />
            </li>
          ))
        ) : (
          <p>No furniture data available</p>
        )}
      </ul>
    </div>
  );
}

export default FurnitureApp;