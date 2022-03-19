import React, {useState} from 'react'
import { BiHomeCircle, BiCameraMovie, BiSearch } from 'react-icons/bi'
import { RiMovie2Line } from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search/" + search);
        setSearch("");
    }
  return (
    <div className="container-fluid nav py-1 shadow">
        <div className="container">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
                <FormStyle onSubmit={handleSubmit}>
                    <BiSearch />
                    <input 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    type="text" placeholder="Search..." />
                </FormStyle>
                <div className="d-flex align-items-center">
                    <NLink to="/" className="ms-3 d-flex align-items-center">
                        <BiHomeCircle />
                        <h6 className="m-0">Home</h6>
                    </NLink>
                    <NLink to="/movies" className="ms-3 d-flex align-items-center">
                        <BiCameraMovie />
                        <h6 className="m-0">Movie</h6>
                    </NLink>
                    <NLink to="/tvshow" className="ms-3 d-flex align-items-center">
                        <RiMovie2Line />
                        <h6 className="m-0">TV shows</h6>
                    </NLink>
                    
                    <NLink to="/signin" className="ms-3 d-flex align-items-center">
                        <h6 className="m-0">Sign In</h6>
                    </NLink>
                </div>
            </div>
        </div>
    </div>
  )
}

const FormStyle = styled.form`
    background: #313131;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    width: 250px;
    input {
        background: transparent;
        border: none;
        outline: none;
        margin-left: .5rem;
        color: white;
    }
    svg {
        color: white;
    }
`

const NLink = styled(NavLink)`
    padding: .5rem 1rem;
    border-radius: 1rem;
    text-decoration: none;
    color: black;
    &.active, :hover {
        background: #313131;
        color: #fafafa;
        transition: .5s linear;
    }
`

export default Nav