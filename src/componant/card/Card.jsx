import './card.css'
const Card = ({product}) => {
    console.log(product)
    return (
        <div >
            <h3>Cart:{product.length}</h3>
            <div className="card-set">
            {
                product.map(proImg => <img key={proImg.seller} src={proImg.img}></img>)
            }
            </div>
        </div>
    );
};

export default Card;