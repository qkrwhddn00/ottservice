import React,{useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LoginPage from '../pages/Login';

const Navi = () => {
    const[show,setShow] = useState(false);
    const {pathname} = useLocation();
    //사용자가 쓰고 있는 경로 내용
    console.log('pathname',pathname);
    const [search, setSearch] = useState("");

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            console.log(window.scrollY)
            if (window.scrollY >50) {
                setShow(true);
            } else {
                setShow(false);
            }
        })
        return () => {
            window.removeEventListener('scroll',()=>{});
        }
    }, [])

    const handleChange = (e) => {
      setSearch(e.target.value);
      console.log('e.target.value')
    }
  return (
    <div>
      <NavWrapper show={show}>
        <Logo>
            <img alt="Coupang Play Logo" src= "/images/cplogowhite.svg"
            onClick = {()=>window.location.href="/"}></img>
        </Logo>
        {pathname === "/" ? (<Loginhere>Log-In</Loginhere>) :
        <Input value={search}
               onChange={handleChange} 
               className="nav_input" 
               type="text" 
               placeholder="searching"/>}
      </NavWrapper>
    </div>
  )
}

export default Navi

const Loginhere = styled.a`
background-color:rgba(0,0,0, 0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius:5px;
transition: all 0,2s ease 0;

&:hover {
  background-color:#f9f9f9;
  color:black;
  border-color : transparent;
}`;
const Input = styled.input `
position: fixed;
left: 50%;
transform: translate(-50%,0);
background-color: rgba(0,0,0, 0.582);
border-radius: 5px;
color: white;
padding: 5px;
border:none;
`;

const NavWrapper = styled.nav`
  position: fixed: 
  top : 0;
  left:0;
  height : 70px;
  background-color : ${props=> props.show ? "#090b13" :"transparent"};
  display : flex;
  justify-content : space-between;
  align-items : center;
  padding: 0 36px;
  letter-spacing : 16px;
  z-index:3;
  `
const Logo = styled.a`
  padding : 0;
  width : 120px;
  margin-top : 4px;
  max-height : 70px;
  font-size : 0;
  display : inline-block;
  img (
    display : block;
    width: 100%;
  )`
