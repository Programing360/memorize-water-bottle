import './Bottle.css'
const Bottles = ({ bottle, handlePriceBtn }) => {
    const { name, img, price
    } = bottle
    // console.log(bottle)
    // console.log(name)
    return (
        <div className="bottles">
            <img src={img} alt="" />
            <h3>name: {name}</h3>
            <p>Prize: {price
            }</p>
            <button onClick={() => handlePriceBtn(bottle)}>Purches</button>
        </div>
    );
};

export default Bottles;