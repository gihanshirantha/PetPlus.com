import React,{useRef,useEffect} from 'react'
import './header.css'
import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/image/1.png'
import NavLink from 'react-bootstrap/esm/NavLink';
const nav_link=[
  {
    path:'#', display:'Home'
  },
  {
    path:'#', display:'About'
  },
  {
    path:'#', display:'Services'
  },
  {
    path:'#',display:'Contsct'
  }
]
const Header = () => {
    
      const headerRef=useRef(null)

      const stickyHeaderFunc=()=>{



        window.addEventListener('scroll',()=>{
          if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
            headerRef.current.classList.add('sticky_header')
          }
          else{
            headerRef.current.classList.remove('sticky_header')
      
          }
        })
      }
      
      useEffect(()=>{
        stickyHeaderFunc()
        return window.removeEventListener('scroll',stickyHeaderFunc)
      })
      
  return (
    <div ref={headerRef}>
       <Navbar  data-bs-theme="light"className='nav_Bar d-flex  gap-5 ' >
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" width={170} />
          </Navbar.Brand>
          <Nav className="menu me-auto  nav_items gap-4 mt-2 ">
            {nav_link.map((item,index)=>(<NavLink key={index} to={item.path}
            className={navClass=>navClass.isActive?"active_link":""}>{item.display}</NavLink>))}
          </Nav>
          <Button className='btn contactus_btn'>Contact Us</Button>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header