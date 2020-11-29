import '../assets/css/Main.css'
import { CharityList } from './CharityList'
export function Main(props){
    console.log(props)
    return (
        <div className="main-area">
            <CharityList projects={props.projects}/>
        </div>
    )
}