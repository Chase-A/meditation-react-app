import './MeditationCard.css'

import Flower from './images/flower.svg'
import Star from './images/star-empty.svg'
import Dots from './images/dots.svg'
import Link from './images/link.svg'
import PlayBtn from './images/play-btn.svg'

function MeditationCard(){
    return(
        <div className="card-container">
            <div className="image-container">
                <img className="image-background" src={require("./images/background.jpg")} alt="placeholder"></img>
                <img className="image-logo" src={Flower} alt="placeholder"></img>
            </div>
        
            <div className="card-text-container">
                <div className="card-left">
                    <h3 className='card-title'>Negative Emotion Processing</h3>
                    <p className='card-desc'>While in comfortable meditation position, hold middle finger in between eyebrows without touching.</p>
                    <img className='link-icon' src={Link}></img>
                </div>
                <div className="card-right">
                    <img className='dots' src={Dots} ></img>
                    <img src={PlayBtn}></img>
                </div>
            </div>
        </div>
    )
}


export default MeditationCard;