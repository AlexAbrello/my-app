
type StarsType = {
  selected: boolean
  value: 1 | 2 | 3 | 4 | 5
  callback: (value: number) => void
}
const Stars = ({selected, value, callback}: StarsType) => {

  const changeStar = () => {
    callback(value)
  }

  return selected
      ? <span onClick={changeStar}><b>star </b></span>
      : <span onClick={changeStar}>star </span>
};

export default Stars;