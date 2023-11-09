import { useEffect } from "react";
import { useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        if (!response.ok) throw new Error(response.statusText)
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data`);
        setIsPending(false);
      }
    }
    fetchData
  }, [url])

  return { data, isPending, error };
}

export { useFetch }
