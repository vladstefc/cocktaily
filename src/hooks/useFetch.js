import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((jsonRes) => {
        setData(jsonRes);
        console.log(data);
      });
  }, [url]);

  return data;
}
