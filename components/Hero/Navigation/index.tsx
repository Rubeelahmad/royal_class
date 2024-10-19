import React from 'react'
import styles from './Navigation.module.scss'
import Link from 'next/link'
import RightDropDownIcon from '../icons/RightDropDownIcon'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul>
        <li><Link href='#'>Wamoens Fashion</Link> <div className={styles.rightDropDown}><RightDropDownIcon/></div></li>
        <li><Link href='#'>Mens Fashion</Link><div className={styles.rightDropDown}><RightDropDownIcon/></div></li>
        <li><Link href='#'>Electronics</Link></li>
        <li><Link href='#'>Home & Lifestyle</Link></li>
        <li><Link href='#'>Medicine</Link></li>
        <li><Link href='#'>Sports & Outdoor</Link></li>
        <li><Link href='#'>Babys & Toys</Link></li>
        <li><Link href='#'>Health & Beauty</Link></li>

      </ul>
    </div>
  )
}

export default Navigation
