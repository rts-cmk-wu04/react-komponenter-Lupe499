// surfing.js
import "./Outdoor.css"

function Outdoor({ result }) {
    console.log(result)

    return (
        <article className="outdoorCard">
            <img src={result.main_image} className="outdoorImage" alt=""/>
            <div className="outdoorTextDiv">
                <button>{result.button_text}</button>
                <div className="textCentering">
                    <h1 className="outdoorTitle">{result.title}</h1>
                    <p className="outdoorText">{result.text}</p>
                </div>
                <div className="imageDiv">
                    <img src={result.secondary_images.image1} alt=""/>
                    <img src={result.secondary_images.image2} alt=""/>
                    <img src={result.secondary_images.image3} alt=""/>
                </div>
            </div>
        </article>
    )
}

export default Outdoor;