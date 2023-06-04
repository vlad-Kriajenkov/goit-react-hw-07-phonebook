import { FiDelete } from 'react-icons/fi';
import {
  ContainerContact,
  TitileContact,
  ListContatct,
  ItemContatct,
  NameContatct,
  NumberContatct,
  Wrapper,
  ButtonDelete,
} from './Contacts.styled';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contacsSlice/slice';
import { useSelector } from "react-redux";

const Contacts = () => {
 
  const { data } = useGetContactsQuery();
  const filter = useSelector((state) => state.filterSlice.filter);
  const [deletContact] = useDeleteContactMutation();
  let visibelContact = [];
  if (filter === undefined) {
    visibelContact = data;
  } else {
    visibelContact = data?.filter(({ name }) => {
      return name.toLowerCase().includes(filter);
    });
  }

  const onHandelClick = id => {
    deletContact(id);
  };
  return (
    <ContainerContact>
      <TitileContact>Results:</TitileContact>
      <ListContatct>
        {visibelContact?.map(({ id, name, phone }) => {
          console.log(id);
          return (
            <ItemContatct key={id}>
              <Wrapper>
                <NameContatct>{name}:</NameContatct>
                <NumberContatct>{phone}</NumberContatct>
              </Wrapper>

              <ButtonDelete type="button" onClick={() => onHandelClick(id)}>
                <FiDelete size="1.3em" />
              </ButtonDelete>
            </ItemContatct>
          );
        })}
      </ListContatct>
    </ContainerContact>
  );
};
export default Contacts;
