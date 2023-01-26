

const Navigation = (props) => {
    const {nav} = props
return(
    <header>
    <div><img src='./assets/image/logoPause.png'></img></div>
    <nav>
        <ul>
           <li><a href="#">acceuil</a> </li>
           <li><a href="#">carte</a> </li>
           <li><a href="#">contact</a> </li>
        </ul>
    </nav>
    </header>
)

}

export default Navigation

// const Navigation = (props) => {
//     const { acceuil, carte, contact } = props;

//     console.log(props);

//     return (
//           <nav>
//         <ul>
//            <li><a href="#">{acceuil}</a></li>
//            <li><a href="#">{carte}</a></li>
//            <li><a href="#">{contact}</a></li>
//         </ul>
//     </nav>
//     )
// }
// export default Navigation