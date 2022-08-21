import styled from "styled-components";
 export const Cart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & .cart-items {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        margin-top: 4rem;
        background-color: #f8f9fa;
        box-shadow: 0px 0px 15px 5px #fec5bb;
        border-radius: 14px;
        font-size: 1.5rem;
        padding: 2rem;
        overflow: scroll;
        overflow-x: hidden;
        overflow-y: overlay;
      }
    & .cart-item {
        display: flex;
        align-items: center;
        margin-bottom: 3rem;
      }
    & .cart-header {
        font-size: 2rem;
        font-weight: 800;
    }
    & .cart-item-img {
        border-radius: 50%;
        object-fit: cover;
        width: 70px;
        height: 70px;
        margin: 0rem 2rem 0 0;
    }
    & .cart-total {
        display: inline-block;
        font-weight: 800;
    }
    & .cart-total-hide {
        display: none;
    }
    & .cart-checkout {
        border: none;
        background-color: #fec5bb;
        border-radius: 14px;
        padding: 1rem;
        margin-top: 2rem;
        cursor: pointer;
        font-size: 1.5rem;
        transition:200ms ease-in-out;
    }
    & .cart-checkout:hover, .cart-gohome:hover{
        background-color: #ff8fa3;
    }
    & .cart-done {
        display: block;
        border: none;
        background-color: #ff8fa3;
        color: #fff;
        border-radius: 14px;
        padding: 1rem;
        margin-top: 2rem;
        cursor: pointer;
        font-size: 1rem;
        transition:200ms ease-in-out;
    }
    & .cart-gohome {
        border: none;
        background-color: white;
        border-radius: 14px;
        padding: 1rem;
        margin-top: 2rem;
        cursor: pointer;
        font-size: 1rem;
        transition:200ms ease-in-out;
    }    
`;
