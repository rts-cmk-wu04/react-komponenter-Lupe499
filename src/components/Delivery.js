// Delivery.js
import "./Delivery.css"

function Delivery({ result }) {
    console.log(result)

    return (
        <section className="deliveryContainer">

            <article className="deliveryCard blue">
                <img src={result.delivery.icon} className="deliveryImage" alt=""/>
                <div className="textDiv">
                    <h1 className="title">{result.delivery.title}</h1>
                    <p className="text">{result.delivery.text}</p>
                </div>
            </article>

            
            <article className="deliveryCard orange">
                <img src={result.parcels.icon} className="deliveryImage" alt=""/>
                <div className="textDiv">
                    <h1 className="title">{result.parcels.title}</h1>
                    <p className="text">{result.parcels.text}</p>
                </div>
            </article>

            
            <article className="deliveryCard turquoise">
                <img src={result.quality.icon} className="deliveryImage" alt=""/>
                <div className="textDiv">
                    <h1 className="title">{result.quality.title}</h1>
                    <p className="text">{result.quality.text}</p>
                </div>
            </article>

            
            <article className="deliveryCard light-blue">
                <img src={result.customer.icon} className="deliveryImage" alt=""/>
                <div className="textDiv">
                    <h1 className="title">{result.customer.title}</h1>
                    <p className="text">{result.customer.text}</p>
                </div>
            </article>

        
        </section>
    )
}

export default Delivery;