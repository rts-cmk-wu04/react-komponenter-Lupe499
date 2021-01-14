// surfing.js
import "./Surfing.css"

function Surfing({ result }) {
    console.log(result)

    return (
        <article className="surfingCard">
            <img src={result.image} className="surfingImage" alt=""/>
            <div className="surfingTextDiv">
                <span className="surfingCategory">{result.category}</span>
                <h1 className="surfingTitle">{result.title}</h1>
                <p className="surfingText">{result.text}</p>
            </div>
        </article>
    )
}

export default Surfing;