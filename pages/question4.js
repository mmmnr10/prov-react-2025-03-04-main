// 4. Hämta posts från API (3p)
// Hämta posts från: https://jsonplaceholder.typicode.com/posts
// Spara posts i context.
// Skapa en länk till sidan /posts och visa listan med posts där.
// för varje post ska `title`och `body` visas.

import { useEffect, useState } from "react";

function useFetchData(url) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function getUsers() {
    const response = await fetch(url);
    const theData = await response.json();
    setIsLoading(false);
    setData(theData);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return { data, isLoading };
}

function App() {
  const { data, isLoading } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
