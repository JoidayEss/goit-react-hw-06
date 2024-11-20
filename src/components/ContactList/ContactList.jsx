import { useDispatch, useSelector } from "react-redux";
import { deleteContacts, selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name?.toLowerCase().includes(filter?.toLowerCase() || "")
  );

  const handleDelete = (contactId) => {
    dispatch(deleteContacts(contactId));
  };
  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              onDelete={() => handleDelete(contact.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
