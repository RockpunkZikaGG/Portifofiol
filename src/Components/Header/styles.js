import styled from 'styled-components';

export const Container = styled.div`
    background-color: #00cfff;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
    .Logo h1{
        font-size: 60px;
    }
    .Logo p{

    }
    a{
        line-height: 85px;
        text-decoration: none;
        color: black;
        font-size: 24px;
        padding: 32px 10px;
    }
    a:hover{
        background-color: #00eaff;
    }
    .staticMenu{
        margin-left: 60px;
    }
    /* Teste */
    .SideNav{
      width: 60px;
      position: fixed;
      z-index: 2;
      top: 0;
      left:0;
    }
    .bm-item {
        display: flex;
        text-decoration: none;
        line-height: 35px;
        padding: 10px 0px;
        color: black;
        transition: color 0.2s;
        border: none;
        outline: 0;
        border-bottom: black 1px solid;
    }
    .bm-item:focus {
        background-color:#00eaff;
    }

    .bm-burger-button {
        position: fixed;
        width: 40px;
        height: 35px;
        left: 25px;
        top: 25px;
    }

    .bm-burger-bars {
        border-radius: 10px;
        background: black;
    }

    .bm-cross {
        background: black;
    }

    .bm-menu {
        background: #00cfff;
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
    }
    #DropEt{
        display: none;
        flex-direction: column;
    }
    .Et{
        line-height: 50px;
        text-decoration: none;
        color: black;
    }
    .Et:focus{
        background-color: #00eaff;
    }
    #DropAdm{
        display: none;
        flex-direction: column;
    }
`;