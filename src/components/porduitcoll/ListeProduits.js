import CardProduit from "./CardsProduit"

const ListeProduit= (props) => {
    const { listeproduit} = props
    
    // const cards = listeFormateurs.map(formateur => 
    //     <FormateurCard key={formateur.id} lastname={formateur.lastname} firstname={formateur.firstname} birthdate={formateur.birthdate} avatar={formateur.avatar} gender={formateur.gender}/>
    // )

    return (
        <div >
            { listeproduit.map(produit => 
                <CardProduit  nom={produit.nom} prix={produit.prix} desc={produit.desc} photo={produit.photo} />
            ) }
            {/* { cards } */}

            {/* <FormateurCard lastname="Beurive" firstname="Aude" birthdate="16/10/1989" avatar="./assets/images/aude.png" gender="female" /> */}
        </div>
    )
    
}

export default ListeProduit