import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * A custom hook that takes in an input (resourceName) and returns an output (resources).
 *
 * Creating custom hooks is not necessary, but good for code reusability.
 * Now this hook/method `useResource` can be used by components other than just `ResourceList`.
 *
 * To understand the nasty syntax below, refer these take aways from the React course:
 *
 * - useEffect (roughly equals) = componentDidMount + componentDidUpdate
 * - The mysterious second argument (array) of useEffect:
 *   - useEffect gets called whenever the array’s value changes
 *   - useEffect does not get called whenever the array’s value remains the same
 *   - useEffect gets always called whenever second arg is missing
 * - useEffect's first argument (callback) must not be async; that's why the async IIFE syntax
 */
const useResource = (resourceName) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(response.data);
    })(resourceName);
  }, [resourceName]);

  return resources;
};

export default useResource;
