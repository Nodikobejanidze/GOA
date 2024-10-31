import React from 'react'

const Header = () => {
    const headerArr = [
        {
            link: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/462311351_1257654005658821_8947440992384563949_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9fiFWHW7YuwQ7kNvgGTXDbW&_nc_ht=scontent.ftbs6-2.fna&_nc_gid=AaNPywMqaGjqioiPLGOiBOj&oh=00_AYAgXcQYFIyNZbp1jQipHqADTe9slX3fZKwTqhvl3C5MnQ&oe=67219E91",
            name: "Nodiko"
        },   
        {
            link: "#",
            name: "contacts"
        },
        {
            link: "#",
            name: "FAPQS"
        },
        {
            link: "#",
            name: "FeedBack"

        },
    ]
    
    return (
        <div className='bg-slate-500'>
            {/* container */}
            <div className="container text-[2rem] flex justify-between">
            <h2>Group 6</h2>
            <ul className='sm:flex hidden gap-2 '>
                {headerArr.map((item, index) => (
                    <a href={item.link} target='_blank'><li key={index}>{item.name}</li></a>
                    ))
                    }
                </ul>
                <span className='sm:hidden block'>GOA</span>
            </div>
        </div>

    )
}

export default Header
