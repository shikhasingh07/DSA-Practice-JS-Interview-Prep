import React, { useState, useEffect } from "react";

const useQuery = (func, arg =[]) => {
  const [status, setStatus] = useState("");
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setStatus("loading");
    let cancel = false;
    func()
      .then((res) => {
        if (!cancel) {
          setData(res);
          setStatus("success");
        }
      })
      .catch((err) => {
        if (!cancel) setError(err);
      });

    return () => {
      cancel = true;
    };
  }, [...arg]);
return {
  status,
  ...(data !== undefined && { data }),
  ...(error !== undefined && { error }),
};

};

export default useQuery;
