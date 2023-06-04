 
import Phonebook from "components/Phonebook/Phonebook";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";
import { useState } from "react";
 

export default function App() {
  const [filterName, setFilterName] = useState()
  const hadelFilter =(filter)=> {
    setFilterName(filter)
  }
  return (
    <div>
      <Phonebook />
      <Filter hadelFilter={hadelFilter} />
      <Contacts  filterName={filterName}/>
    </div>
  );
}
