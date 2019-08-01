import React from "react";
import "./Form.css"
class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email: ""
        }

    } // end constructor


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }


    render() {
        console.log(this.state)
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="">
                    First Name:
                    <input type="text" name="firstName" onChange={this.handleChange} />
                </label>
                <label htmlFor="">
                    Last Name:
                    <input type="text" name="lastName" onChange={this.handleChange} />
                </label>
                <label htmlFor="">
                    Phone:
                    <input type="text" name="phone" onChange={this.handleChange} />
                </label>
                <label htmlFor="">
                    Email:
                    <input type="text" name="email" onChange={this.handleChange} />
                </label>
                <input type="submit" name="submit" />

            </form>

        )
    } // end render
}



export default Form;