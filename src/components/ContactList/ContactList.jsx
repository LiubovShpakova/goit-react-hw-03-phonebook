import PropTypes from "prop-types";
import style from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={style.contact__container}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={style.contact_list} key={id}>
            {name}: {number}
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={style.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
