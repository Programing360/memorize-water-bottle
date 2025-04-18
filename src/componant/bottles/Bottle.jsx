import { useEffect } from "react";
import { useState } from "react";
import Bottles from "../bottle/bottles";
import './bottles.css'
import { addProductToLS, getProductFromLS } from "../utility/localStorage";
import Card from "../card/Card";


const Bottle = () => {

    const [bottle, setBottle] = useState([])
    const [product, setProduct] = useState([])
    console.log(product)
    // get product and save from local storage

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => {
                setBottle(data);
            });
    }, []);

    const handlePriceBtn = (bottle) => {
        const newProduct = [...product, bottle]
        setProduct(newProduct)
        addProductToLS(bottle.id)
    }

    useEffect(() => {
        // console.log(bottle.length)
        if (bottle.length) {
            const storedCart = getProductFromLS()
            // console.log(storedCart)
            const saveCard = []
            for(let id of storedCart){
                // console.log(id)
                // const cardStoredLs = bottle.find(bottle => bottle.id === id)
                const cardStoredLs = bottle.find(bottle => bottle.id === id)
                // setProduct(cardStoredLs)
                console.log(cardStoredLs.id)
                if(cardStoredLs){
                    saveCard.push(cardStoredLs)
                }
            }
           setProduct(saveCard)
        }
    }, [bottle])

    return (
        <div>
            <h2>Memories Water Bottle</h2>
            <h2>Bottle: {bottle.length}</h2>
            {/* <Card product={product}></Card> */}
            <Card product={product}></Card>
            <div className="bottle-container">
                {
                    // bottle.map(bottles => <Bottle key={bottle.id} bottle={bottles}></Bottle>)
                    // bottle.map(bottles => console.log(bottles))
                    bottle.map(bottol => <Bottles
                        key={bottol.id}
                        handlePriceBtn={handlePriceBtn}
                        bottle={bottol}></Bottles>)
                }
            </div>
        </div>
    );
};

export default Bottle;