<ul className='nav'>
    {navigation.map((item, index) => (
        <a href={item.href} key={index}><li>{item.name}</li></a>
    ))}
</ul>