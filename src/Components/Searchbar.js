import React from 'react'
import '../assets/css/searchbar.css'
export class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {searchText:'hehe'}

        this.EnterInput = this.EnterInput.bind(this)
    }
    EnterInput(e){
        // dung handle su kien on change
        
        this.setState({searchText:e.target.value})
        // thay vi log cai nay thi lam gi do de no filter ra nha!!!!
        console.log(this.state.searchText)
    }
    render(){
        return (
            <input onChange={this.EnterInput} className="full" type="text" placeholder="Enter your emoji..."/>
        )
    }
}