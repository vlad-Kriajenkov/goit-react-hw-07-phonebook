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

const Contacts = () => {
  const { data } = useGetContactsQuery();
  const [deletContact] = useDeleteContactMutation();
  const onHandelClick = id => {
    deletContact(id);
  };
  return (
    <ContainerContact>
      <TitileContact>Results:</TitileContact>
      <ListContatct>
        {data?.map(({ id, name, phone }) => {
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
