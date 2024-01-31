import {useCallback, useState} from "react";

import axios from "axios";

const useHttp = () => {
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url,
                                            method = 'GET',
                                            data = null,
                                            headers = {
                                              'Content-Type': 'application/json'}) => {

    setLoading(true);

    try {
      const response = await axios.get(url, {method, data, headers});

      setLoading(false);
      return response.data;
    } catch(e) {
      setLoading(false);
      throw e;
    }
  }, []);

  return {loading, request}
}

export default useHttp;
