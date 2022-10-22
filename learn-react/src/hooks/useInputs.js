//custom Hook

import { useState, useCallback } from "react";

function useInputs(initialState) {
  const [inputs, setInputs] = useState(initialState);
  const handleInput = useCallback((e) => {
    const { name, value } = e.target;

    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }, []);

  const reset = useCallback(() => setInputs(initialState), [initialState]);

  return [inputs, handleInput, reset];
}

export default useInputs;
