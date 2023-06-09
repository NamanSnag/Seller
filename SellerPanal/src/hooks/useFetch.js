import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api" + url);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);
  return { data };
};

export default useFetch;
