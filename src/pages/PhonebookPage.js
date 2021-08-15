import ContactForm from "../components/contactForm/ContactForm";
import ContactsList from "../components/contactsList/ContactsList";
import Filter from "../components/filter/Filter";

const PhonebookPage = () => {
  return (
    <section className="phonebookSection">
      <ContactForm />
      <div className="phonebookRightWrapper">
        <Filter />
        <ContactsList />
      </div>
    </section>
  );
};

export default PhonebookPage;
