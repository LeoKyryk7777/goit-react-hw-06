import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import css from "./index.module.css";

export default function App() {
  return (
    <div className={css.pageContainer}>
      <h1 className={css.title}>Phonebook </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
