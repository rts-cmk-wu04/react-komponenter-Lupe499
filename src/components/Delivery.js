// Delivery.js
import "./Delivery.css"

function Delivery({ result }) {
    console.log(result)

    return (
        <section className="deliveryContainer">

            <article className="deliveryCard blue">
                <img src={result.delivery.icon} className="deliveryImage" alt=""/>
                <div className="deliveryTextDiv">
                    <h1 className="deliveryTitle">{result.delivery.title}</h1>
                    <p className="deliveryText">{result.delivery.text}</p>
                </div>
            </article>

            
            <article className="deliveryCard orange">
                <img src={result.parcels.icon} className="deliveryImage" alt=""/>
                <div className="deliveryTextDiv">
                    <h1 className="deliveryTitle">{result.parcels.title}</h1>
                    <p className="deliveryText">{result.parcels.text}</p>
                </div>
            </article>

            
            <article className="deliveryCard turquoise">
                <img src={result.quality.icon} className="deliveryImage" alt=""/>
                <div className="deliveryTextDiv">
                    <h1 className="deliveryTitle">{result.quality.title}</h1>
                    <p className="deliveryText">{result.quality.text}</p>
                </div>
            </article>

            
            <article className="deliveryCard light-blue">
                <img src={result.customer.icon} className="deliveryImage" alt=""/>
                <div className="deliveryTextDiv">
                    <h1 className="deliveryTitle">{result.customer.title}</h1>
                    <p className="deliveryText">{result.customer.text}</p>
                </div>
            </article>

        
        </section>
    )
}

export default Delivery;