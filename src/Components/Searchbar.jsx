import '../assets/css/Searchbar.css'
export function Searchbar(props){
    return (
        <div className="search-cont">
            <h1>Simple Weather App</h1>
            <input className="searchbar" type="text" placeholder="Enter a city name" onKeyDown={props.onKeyDown}/>
        </div>
    )
}