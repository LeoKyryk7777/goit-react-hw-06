import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.addcontacts.items);
  const filter = useSelector((state) => state.filter.filter);

  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={css.contactsList}>
      {filteredData.map((contact) => (
        <div className={css.contactItem} key={contact.id}>
          <Contact data={contact} />
        </div>
      ))}
    </div>
  );
}
