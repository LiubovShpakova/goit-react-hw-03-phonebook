import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./Form.module.css";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className={style.label}>
          Name
          <input
            type="text"
            id={this.nameInputId}
            className={style.input}
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="enter contact name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label htmlFor={this.numberInputId} className={style.label}>
          Number
          <input
            type="text"
            id={this.numberInputId}
            className={style.input}
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="enter contact number"
            pattern="(\+?[0-9\s\-\(\)]+)"
            title="Номер телефона должен состоять из цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit" className={style.button}>
          Add contact
        </button>
      </form>
    );
  }
}
export default Form;
Form.propTypes = { onSubmit: PropTypes.func.isRequired };
