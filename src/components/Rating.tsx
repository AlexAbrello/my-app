import React, {useState} from 'react';
import Stars from "./Stars";

const Rating = () => {

  const [value, setValue] = useState(0)

  const changeStarHandler = (value: number) => {
    setValue(value)
  }

  return (
      <div>
        <Stars selected={value > 0} value={1} callback={changeStarHandler}/>
        <Stars selected={value > 1} value={2} callback={changeStarHandler}/>
        <Stars selected={value > 2} value={3} callback={changeStarHandler}/>
        <Stars selected={value > 3} value={4} callback={changeStarHandler}/>
        <Stars selected={value > 4} value={5} callback={changeStarHandler}/>
      </div>
  );
};

export default Rating;