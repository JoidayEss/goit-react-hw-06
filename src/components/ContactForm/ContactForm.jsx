import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleAddContact = (values, { resetForm }) => {
    console.log("Новий контакт", values);

    if (!values.name || values.number) {
      return alert("Please enter name and number");
    }

    const newContact = {
      id: Date.now(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContacts(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleAddContact}
    >
      <Form className={s.form}>
        <div className={s.input}>
          <label className={s.name_label}>Name</label>
          <Field className={s.field} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={s.input}>
          <label className={s.name_label}>Number</label>
          <Field className={s.field} type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
