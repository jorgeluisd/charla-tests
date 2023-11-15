import { useEffect, useState } from 'react';

export const useFetchData = (url: string) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, [url]);

  return data;
}
