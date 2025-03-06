import {useEffect, useState} from 'react';
import './App.css';
import BusinessCard from './components/BusinessCard';

// Import contacts from JSON file
import contacts from './data/contacts.json';

function App() {

  const [contactList, setContactList] = useState(contacts);
  const [newContact, setNewContact] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.clear()
    //console.log('This loads only once on component mount');
  }, []);

  useEffect(() => {
    //console.log('This loads every time the contactList changes');
  }, [contactList]);

  function clearError() {
    setError("")
  }

  useEffect(() => {
    console.log(error);
    setTimeout(clearError, 5000);
  }, [error]);

  const onSort = (sortType) => {
    const sorted = [...contactList].sort((a, b) => a[sortType].localeCompare(b[sortType]));
    setContactList(sorted);
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const checkIsValid = () => {

    if(!newContact.name)
    {setError("Please input a name.")
      setIsValid(false)}
    else if(!newContact.position)
    {setError("Please input a position.")
      setIsValid(false)}
    else if(!newContact.email)
    {setError("Please input an email address.")
      setIsValid(false)}
    else if(validateEmail(newContact.email))
    {setError("Please input a valid email address.")
      setIsValid(false)}
    else if(!newContact.phone)
    {setError("Please input a phone number.")
      setIsValid(false)}
    else if(!newContact.website)
    {setError("Please input a website.")
      setIsValid(false)}
    else {
      setIsValid(true)
    }
  }

  const onAddContact = () => {
    checkIsValid()
    if(isValid)
    {
      const newContactList = [...contactList, newContact];
      setContactList(newContactList);
    }
  }

  const onFieldChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.id]: e.target.value
    });
    //checkIsValid();
  }

  // TODO: BONUS: implement a timer that hides the error message after 5 seconds  

  // TODO: BOSS LEVEL: implement a search bar that filters the contacts by name
  const onSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <div className="app">
        <div className="new-contact-container">
          <h2>Add a new contact</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" id="name" value={newContact?.name} onChange={onFieldChange} />
            <input type="text" placeholder="Position" id="position" value={newContact?.position} onChange={onFieldChange} />
            <input type="text" placeholder="Company" id="company" value={newContact?.company} onChange={onFieldChange} />
            <input type="text" placeholder="Email" id="email" value={newContact?.email} onChange={onFieldChange} />
            <input type="text" placeholder="Phone" id="phone" value={newContact?.phone} onChange={onFieldChange} />
            <input type="text" placeholder="Website" id="website" value={newContact?.website} onChange={onFieldChange} />
            <button onClick={()=>onAddContact()}>Add Contact</button>
          </form>
          <div className="error">{error}</div>
          <div className="search">
            <input type="text" placeholder="Search Term" id="searchTerm" value={searchTerm?.value} onChange={onSearchChange} />
          </div>
          <div className="button-container">
            <button onClick={() => onSort('name')}>Sort by Name</button>
            <button onClick={() => onSort('position')}>Sort by position</button>
          </div>
        </div>
        <div className="card-container">
          {contactList.map((contact, index) => (
            <BusinessCard key={index} contact={contact} searchTerm={searchTerm} />
          )) }
        </div>
      </div>
    </>
  );
}

export default App;
