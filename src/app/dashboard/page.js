'use client'
import { useEffect, useState } from 'react'
import styles from '../dashboard/style.module.css'
import { GetToken } from '../storage/Storage'
import { jwtDecode } from 'jwt-decode'
import { SerachApi } from '../Api/Api'
export default function Dashboard () {
  const [show, setShow] = useState(false)
  const [searchData, setSearchData] = useState()
  // const User = jwtDecode(GetToken())
  async function SearchCall(e) {
    const res = await SerachApi(e.target.value)
    setSearchData(res)
    setShow(true)
    if (!searchData) {
      setShow(false)
    }else{setShow(true)}
  }
  return (
    <>
      {/* navbar */}
      <section className={styles.head}>
        <nav className=''>
          <input type='search' placeholder='Search' onChange={SearchCall}></input>
          <ul>
            <li>WebStore</li>
            <li>Home</li>
            <li>About</li>
            <li>Logout</li>
          </ul>
          {show ? <div className={styles.drop}>

          </div> : false}
        </nav>
      </section>

      {/* productDetails */}
      <section>
        <div></div>
      </section>
    </>

  )
}