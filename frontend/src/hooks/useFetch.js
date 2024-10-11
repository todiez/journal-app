import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Couldn't fetch the data");
        }

        //parsing the response into json
        const data = await response.json();
        setData(data);
        setIsPending(false);
      } catch (error) {
        console.log("Error from Fetch: ", error);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending };
};

export default useFetch;
