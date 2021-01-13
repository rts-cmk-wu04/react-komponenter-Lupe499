// surfing.js
import "./Surfing.css"

function Surfing({ result }) {
    console.log(result)

    return (
        <article className="surfingCard">
            <img src={result.image} className="surfingImage" alt=""/>
            <div className="textDiv">
                <span className="category">{result.category}</span>
                <h1 className="title">{result.title}</h1>
                <p className="text">{result.text}</p>
            </div>
        </article>
    )
}

export default Surfing;