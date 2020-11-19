import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import '../css/form.css'


class Forms extends React.Component{
    state = {
        text : '',
        arr :[]
    }
    handlechange = (e)=>{
        const arr = this.state.arr.filter(()=>{
            
        })
        this.setState({
            text : e.target.value
        })
    }

    handleText =(e)=> {
        e.preventDefault();
        const text = this.state.text;
        this.setState({
            arr : [...this.state.arr,text]
        })
    }

    printText = ()=>{
        return(this.state.arr.map((res,ind)=>{
            return (
                <div className='todo-box' key = {ind}>
                    <Checkbox/>
                    <div>{res}</div>
                </div>
            )
        }))
    }
    deleteAllHandler = (ind)=>{
        this.setState({
            arr : [],
            text : ''
        })
    }

    render() {
        return(
            <div className='main'>
                    <div className="card">
                        <div className="todo">
                            <h1 className='styling'>TO DO</h1>
                        </div>
                        <div className="todo-list">
                            <form onSubmit={this.handleText}>
                                <input type='text' onChange={this.handlechange}/>
                                <button type='submit'>Submit</button>
                                <div>{this.printText()}</div>
                                <button onClick={()=>{this.deleteAllHandler()}}>Delete All</button>
                            </form>
                        </div>
                    </div>
            </div>

        )
    }
}

export default Forms;
