import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function run() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    }
    run();
  }, [url]);

  return data;
}
