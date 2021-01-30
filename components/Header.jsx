import React  from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <header className= "header">
                <div className = "logo">
                    <Link  href="/">                                
                        <h2 className ="header__name">To Do</h2>
                    </Link>
                </div>
                
            </header>
            
        </>
    )
}

export default Header
