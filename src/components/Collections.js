// Collections.js
import "./Collections.css"

function Collections({ result }) {
    console.log(result)

    return (
        <section className="collectionSection">

            <article className="collectionCard">
                    <h2 className="collection">{result.collection1.collection}</h2>
                    <img className="backgroundImage" src={result.collection1.background_image} alt=""/>
                    <img className="profileImage" src={result.collection1.profile_image} alt=""/>
                
                <div className="collectionTextDiv">
                    <h1 className="collectionTitle">{result.collection1.title}</h1>
                    <p className="collectionText">{result.collection1.author}</p>
                </div>
            </article>

            
            <article className="collectionCard">
                    <h2 className="collection">{result.collection2.collection}</h2>
                    <img className="backgroundImage" src={result.collection2.background_image} alt=""/>
                    <img className="profileImage" src={result.collection2.profile_image} alt=""/>
                
                <div className="collectionTextDiv">
                    <h1 className="collectionTitle">{result.collection2.title}</h1>
                    <p className="collectionText">{result.collection2.author}</p>
                </div>
            </article>

            <article className="collectionCard">
                    <h2 className="collection">{result.collection3.collection}</h2>
                    <img className="backgroundImage" src={result.collection3.background_image} alt=""/>
                    <img className="profileImage" src={result.collection3.profile_image} alt=""/>
                
                <div className="collectionTextDiv">
                    <h1 className="collectionTitle">{result.collection3.title}</h1>
                    <p className="collectionText">{result.collection3.author}</p>
                </div>
            </article>


        </section>
    )
}

export default Collections;