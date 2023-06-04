import { useAddContactMutation } from 'redux/contacsSlice/slice';
import {
  Form,
  ContainerPhoneBook,
  Labe,
  TitlePhoneBook,
  Input,
  Button,
} from './Phonebook.styled';
 
 

export default function Phonebook() {
  const [addContact] = useAddContactMutation();

  const handelSubmit = async e => {
    e.preventDefault();
    const form = e.target;
 
    try {
      await addContact({
        name: form.elements.name.value,
        phone: form.elements.number.value,
      });
      form.reset();
      } catch (error) {
        console.log(error);
    }
  };

  return (
    <ContainerPhoneBook>
      <TitlePhoneBook>Phonebook</TitlePhoneBook>
      <Form action="" onSubmit={handelSubmit}>
        <Labe>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Labe>
        <Labe>
          Phone
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Labe>
    
        <Button type="submit">Add contact</Button>
      </Form>
    </ContainerPhoneBook>
  );
}
