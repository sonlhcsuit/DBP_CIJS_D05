import '../assets/css/CharityList.css'
import { Charity } from './Charity'

export function CharityList(props) {
    return (
        <div className="charity-list-area">
            {props.projects.map(project => {
                return (
                    <Charity {...project}/>

                )
            })}
        </div>
    )
}