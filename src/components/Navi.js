import React,{useEffect,useState} from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';
import styled from 'styled-components';


const Navi = () => {
    const[show,setShow] = useState(false);
    const { pathname } = useLocation();
    //사용자가 쓰고 있는 경로 내용
    const [inputValue, setinputValue] = useState("");
    const navi = useNavigate();
    

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
      setinputValue(e.target.value);
      //navi(`/search?q=${e.target.value}`);
    }

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        navi(`/search?q=${inputValue}`);
        setinputValue('');
      }
    }

    console.log('useLocation.search',useLocation().search);
  return (
    <div>
      <NavWrapper show={show}>
        <Logo>
            <img alt="Coupang Play Logo" src= "/images/cplogowhite.svg"
            onClick = {()=>window.location.href="/"}></img>
        </Logo>
        {pathname === "/" ? (<Loginhere>Log-In</Loginhere>) :
        <Input value={inputValue}
               onChange={handleChange} 
               onKeyPress={handleKeyPress}
               className="nav_input" 
               type="text" 
               placeholder="searching"
                />}
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
  `;
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

  //useNavigate 페이지 경로를 넣어서 해당 경로로 이동 하는 걸 도와줌 , 특정 이벤트 실행 -> 동작
  