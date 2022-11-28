import Link from 'next/link'
import React from 'react'
import headerStyles from '../styles/Header.module.css'
const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>Header</h1>
        <ul>
            <li>
                <Link href = "/about">About</Link>
            </li>
            <li>
            <Link href = "/product">Product</Link>

            </li>
            <li>
            <Link href = "/user">User</Link>

            </li>
        </ul>
    </div>
  )
}

export default Header