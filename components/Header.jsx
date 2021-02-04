import React  from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <header className= "header">
                <div className = "logo">
                    <Link  href="/">                                
                        <h2 className ="header__name">My Tasks</h2>
                    </Link>
                </div>
                
            </header>
            
        </>
    )
}

export default Header
