import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter'
import ContactForm from './components/ContactForm/ContactForm'
import './App.scss'
import { getLoading } from './redux/contacts/contacts-selectors'
import { useSelector } from 'react-redux'

function App() {
  const loading = useSelector(getLoading)
  return (
    <div className="AppRoot">
      {loading && <h2>Загружаем...</h2>}
      <h1 className="AppTitle">Phonebook</h1>
      <ContactForm />
      <h2 className="AppTitle">Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  )
}
export default App
