import React from 'react'
import './input.css'

const CustomInput = ({ ...props }) => {
  // constructor({ name, id, required, type, label }) {
  //   super();
  //   this.name = name;
  //   this.id = id;
  //   this.required = required;
  //   this.type = type;
  //   this.label = label;
  //   this.state = {
  //     inputfield: "",
  //     content: false,
  //   };
  // }

  // checkContent = (event) => {
  //   if (event.target.value === "") {
  //     this.setState({ content: false });
  //   } else {
  //     this.setState({ content: true });
  //   }
  // };

  return (
    <div className='input'>
      <input
        name={props.name}
        id={props.id}
        required={props.required}
        type={props.type}
        className={
          props.type === 'date'
            ? `form-control CustomInput date`
            : `form-control CustomInput`
        }
        onChange={props.onChange}
      ></input>
      <label className={props.content ? 'label labelAlways' : 'label'}>
        {props.label}
      </label>
    </div>
  )
}

export default CustomInput
