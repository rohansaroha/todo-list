import React from "react";
import { textUpdated, callNoApi } from '../Services/Services.js';
import axios from 'axios';

class Form extends React.Component{
    state = {
        name : "",
        valueNo : []
    }
    handleChange=(e)=>{
        this.setState({
            name : e.target.value
        })
        console.log(this.state.name);
    }
    submitChange = (e)=>{
        e.preventDefault();
        const text = this.state.name;
        callNoApi(text).then((res)=>{
            const arr = [...this.state.valueNo,{ no:this.state.name,data : res.data }]
            this.setState({
                valueNo : arr
            })
            console.log(this.state.valueNo)
            console.log(res.data)
        })
    }
    deleteHandler = (index) => {
        const arr = this.state.valueNo.slice();
        arr.splice(index, 1);
        this.setState({
            valueNo: arr
        });
    }
    deleteHandlerFilter = (number) => {
        // Delete the obj with the given number using filter.
    }
    render() {
        return(
            <form onSubmit={this.submitChange}>
                <input type='text' onChange={this.handleChange}/>
                <button type='submit'>Submit</button>
                <div>{this.state.valueNo.map((res, index)=>{return(<div key={res.no}>
                    {res.no} => {res.data}
                    <button onClick={() => this.deleteHandlerFilter(index)}>Delete</button>
                </div>)})}</div>
            </form>
        )
    }
}
export default Form;