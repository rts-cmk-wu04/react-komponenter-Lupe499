// news.js
import "./News.css"
function News({ result }) {
    console.log(result)

    return (
        <article className="newsCard">
            <div className="newsDiv">
                <h2>Latest News</h2>
            </div>
            <div className="newsContentDiv">
                <img src={result.nature.image} alt=""/>
                <div className="textDiv">
                    <h1 className="newsTitle greenh1">{result.nature.title}</h1>
                    <p className="newsText">{result.nature.text}</p>
                </div>

            </div>

            <div className="newsContentDiv">
                <img src={result.animal.image} alt=""/>
                <div className="textDiv">
                    <h1 className="newsTitle blueh1">{result.animal.title}</h1>
                    <p className="newsText">{result.animal.text}</p>
                </div>
  
            </div>

            <div className="newsContentDiv">
                <img src={result.technology.image} alt=""/>
                <div className="textDiv">
                    <h1 className="newsTitle yellowh1">{result.technology.title}</h1>
                    <p className="newsText">{result.technology.text}</p>
                </div>

            </div>

            <div className="newsContentDiv">
                <img src={result.explore.image} alt=""/>
                <div className="textDiv">
                    <h1 className="newsTitle redh1">{result.explore.title}</h1>
                    <p className="newsText">{result.explore.text}</p>
                </div>

            </div>

            <div className="newsContentDiv">
                <img src={result.zoo.image} alt=""/>
                <div className="textDiv">
                    <h1 className="newsTitle lightblueh1">{result.zoo.title}</h1>
                    <p className="newsText">{result.zoo.text}</p>
                </div>

            </div>
        </article>
    )
}

export default News;