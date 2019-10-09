import Styled from 'styled-components';

const StyledNavbar = Styled.nav`
    width:100vw;
    background-color: #6d7fcc!important;
    justify-content: space-between;
    display: flex;
    align-items:center;
    position: relative;
    flex-wrap: wrap;
    background: #fff;
    border: none;
    border-radius: 0;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.1);
    a {
        color: #fff
    }
    @media (min-width: 768px) {
        display: none;
    }
`;

const NavbarButton = Styled.button`
    .btn:not(:disabled):not(.disabled)
    {
        cursor: pointer;
    }
    margin: 10px;    
    -webkit-appearance: button;    
    display: inline-block!important;
    color: #fff
    background-color: #343a40;
    border-color: #343a40;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    svg
    {
        :not(:root)
        {
            overflow:visible;
        }
        width: .875em;
        display:inline-block;
        font-size: inherit;
        height: 1em;
        vertical-align: -.125em;
    }
`;

const LinkList = Styled.ul`
    list-style:none;
    width:100vw;
    margin: 0;
    padding: 0;
    li
    {
        width:100%;
        margin: 0;
        align-items: center;
        a {
            text-decoration: none;
            display: block;
            padding: 1em 0;
            margin-left 10px;
        }
    }
    li:hover{
        background:#fff;
        a{
            color: #7386D5;
        }
    }
`;

export { StyledNavbar, NavbarButton, LinkList };
