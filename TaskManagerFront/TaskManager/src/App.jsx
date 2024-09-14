import './App.css'
import logo from "./assets/admlogo.png"
import logo2 from "./assets/tareas.png"
import user from "./assets/user-interface.png"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <div className="navegacion" id='home'>
    <nav>
    <div className='contenedor-imagen'><img src={logo} alt="" /></div>
    <h3>Task Manager</h3>
    <ul class="menu">
        <li class="menu-item"><a href="#home">Home</a></li>
        <li class="menu-item"><a href="#register">Registro</a></li>
        <li class="menu-item"><a href="#">Inicio Sesion</a></li>
    </ul>
    </nav>
    </div>
    <section >
      <div className="contenedor-img"><img src={logo2} alt="" /></div>
      <div className="text">

        <p className='text-item'>El Administrador de Tareas es una aplicación intuitiva y eficiente diseñada para ayudarte a gestionar tus tareas diarias de manera organizada.</p>
        <p className='text-item'>Esta herramienta permite a los usuarios crear, editar y eliminar tareas con facilidad, así como establecer prioridades y fechas de vencimiento.</p>
        <p className='text-item'>Con una interfaz amigable y funcionalidades clave, el Administrador de Tareas busca mejorar la productividad y ayudar a los usuarios a mantenerse al tanto de sus responsabilidades.</p>
      </div>
    </section>
    <section id='register'>
      <div className="contenedor-imagen"><img src={user} alt="" /></div>
      <div className="inputs">
    <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
      
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel className='mb-3' controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel></div>
    </section>
    </>
  )
}

export default App
