import React, { useState, FormEvent } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState<string>("");
  const [texts, setTexts] = useState<Array<string>>([]);

  /****Inputs */
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  /****Add Value */
  const addValue = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /***Verify if the element is not empty */
    if (value) {
      /*****Find Element and verify if exists in the array*/
      const item = texts.find((element) => element === value);
      if (!item) {
        const textsArray: Array<string> = [...texts];
        textsArray.push(value);
        setTexts(textsArray);
        setValue("");
      }
    }
  };

  const deleteValue = (value: string): void => {
    const result = texts.filter((item) => item !== value);
    setTexts(result);
  };

  return (
    <div className="App">
      <section>
        <form onSubmit={addValue}>
          <input value={value} onChange={handleChange} type="text"></input>
          <button type="submit"> Add value</button>
        </form>
        <ul className="ul-app">
          {texts.map((el) => (
            <li key={el}>
              {el}
              <button onClick={() => deleteValue(el)}>Delete Value</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
