import logo from './logo.svg';
import './App.scss';
import { Children } from 'react';
import { render } from '@testing-library/react';
import Card from './Components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({name}){
  return (
    <header style={{display: 'flex', justifyContent: 'space-around'}}>
      <h3>Kodemia MX</h3>
        <h3>Home</h3>
        <h3>About</h3>
      {name !== null ? <h3>{name}</h3>: null}
      </header>
  )
}

function Footer(){
  return (
    <footer class="footer">Kodemia 2022. Hecho con amor por Bryan</footer>
  )
}

function Layout(props){
  console.log(props)
  const children = props.children
  return(
    <div id="layout">
      <Header name={props.name}/>
      {children}
      <Footer />
      </div>
  )
}

function PageTitle(props){
  return(
    <h2>{props.children}</h2>
  )
}

function App() {
  const name = 'Bryan Rodríguez'
  const age = '30'
  const renderifAgeisNotNull = age && 'true'
  const ageCopy = 'Tengo ${age} de edad'
  console.log(renderifAgeisNotNull)
  return (
    <div className="App">
      <Layout
        name={name}
        lastName='Rodríguez'
          >
      <main className="App-header">
      <PageTitle>Hola, soy {name}</PageTitle>
      <PageTitle>Esta es mi bio</PageTitle>
      <PageTitle>Título adicional</PageTitle>
      <Card />
      {age !== null ? <h5>{ageCopy}</h5>: null}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hola, soy Bryan y esta es mi primera app de React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vryahn
        </a>
      </main>
      </Layout>
    </div>
  );
}

export default App;
