import PropTypes from 'prop-types'
import './card.css'
const Card = ({product, handleRemoveCard}) => {
    // console.log(product)
    return (
        <div >
            <h3>Cart:{product.length}</h3>
            <div className="card-set">
            {
                product.map(proImg => <div key={proImg.index}> <img src={proImg.img} alt='product'></img>
                <button onClick={() => handleRemoveCard(proImg.id)}>Remove</button>
                </div>)
            }
            </div>
        </div>
    );
};
Card.propTypes = {
    product : PropTypes.array.isRequired,
    handleRemoveCard: PropTypes.func.isRequired
}
export default Card;