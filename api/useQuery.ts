import { Variables } from "graphql-request/dist/types";
import { useEffect, useMemo, useState } from "react";

import { client } from ".";

export default function useQuery<T>(query: string, variables: Variables) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    client
      .request(query, variables)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return useMemo(
    () => ({
      loading,
      data,
      error,
    }),
    [data, error, loading],
  );
}
