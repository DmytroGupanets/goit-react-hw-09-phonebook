import ContactForm from "../components/contactForm/ContactForm";
import ContactsList from "../components/contactsList/ContactsList";
import Filter from "../components/filter/Filter";

const PhonebookPage = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default PhonebookPage;
