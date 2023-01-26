
const Cards = (props) => {
    const { photo, nom, desc, prix } = props

    return (

        <div class="card">
            <div class="card__contImg">
                <img src={photo}alt="tasse de cafe" class="card__img"/>
            </div>
            <div class="card__contText">
                <h4 class="card__pTitle">{nom}</h4>
                <p class="card__title">{desc}</p>
                <p class="card__price">{prix}</p>
            </div>
            <button type="sumbit">Selectionner</button>
        </div>

    )
}

export default Cards
