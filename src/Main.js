import './Main.css'
import MeditationCard from "./MeditationCard.js";

function Main(props){
    const meditations = props.data
    return(
        <main>
            {
                meditations.map((meditation) => <MeditationCard 
                title={meditation.title} 
                embedId={meditation.embedId} 
                start={meditation.start}/>)
            }
        </main>
    )
}

export default Main;