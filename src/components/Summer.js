// summer.js
import "./Summer.css"
function Summer({ result }) {
    console.log(result)

    return (
        <article className="summerCard">
            <img src={result.background} className="summerImage" alt=""/>
            <div className="logoDiv">
                <img src={result.logo} alt=""/>
                <p>{result.logo_text}</p>
                <i className="fas fa-heart"></i>
            </div>
            <div className="summerTextDiv">
                <h1 className="summerTitle">{result.title}</h1>
                <p className="summerText">{result.text}</p>
            </div>
        </article>
    )
}

export default Summer;