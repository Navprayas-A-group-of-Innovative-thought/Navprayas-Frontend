import React, { useState, Component } from 'react';
import './input.css';

class CustomInput extends Component{
    constructor({ name, id, required, type, label }){
        super();
        this.name = name;
        this.id = id;
        this.required = required;
        this.type = type;
        this.label = label;
        this.state = {
            inputfield : '',
            content: false,
        }
    }

    checkContent = (event) => {
        if(event.target.value === ''){
            this.setState({ content: false })
        }
        else {
            this.setState({ content: true })
        }
    }


    render(){
        return(
            <div className="input">
                <input name={this.name}
                        id={this.id}
                        required={this.required}
                        type={this.type}
                        className={this.type === 'date' ?`form-control CustomInput date` : `form-control CustomInput`}
                        onChange={this.checkContent}
                >
                </input>
                <label className={this.state.content ? 'label labelAlways' : 'label'}>{this.label}</label>
            </div>
        );
    }

};

export default CustomInput;