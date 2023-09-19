import React, { useState } from 'react'
import styles from './COunter.module.scss'
export const Counter = () => {
  const [state, setState] = useState(0)
  return (
    <div>
      <h1 className={styles.saaa}>{state}</h1>
      <button
        className={styles.btn}
        onClick={() => setState((state) => state + 1)}
      >
        INCREMENT
      </button>
    </div>
  )
}
