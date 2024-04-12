function Header(props){
    return (
        <section className='Section'>
            
            <h1>
                {props.name}
            </h1>
             <p>
                {props.age}
            </p>
            <h2>
                {props.Weight}
            </h2> 
        </section>
    )
}
export default Header;