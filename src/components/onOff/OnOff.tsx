import style from './OnOff.module.css'


type OnOffType = {
  value: boolean
  button: () => void
}
export const OnOff = (props: OnOffType) => {

  const btn = () => {
    props.button()
  }

  return (
      <div className={style.body}>
        {props.value && <>
            <div className={`${style.square} ${style.green}`}></div>
            <div className={style.square}></div>
            <div className={`${style.round} ${style.green}`}></div>
        </>
        }
        {!props.value && <>
            <div className={`${style.square}`}></div>
            <div className={`${style.square} ${style.red}`}></div>
            <div className={`${style.round} ${style.red}`}></div>
        </>
        }
        <button onClick={btn}>Switch</button>
      </div>
  )
}