import styled from "styled-components";

export const Section = styled.section`
    background-color: #d8e2dc;
    padding: 1rem;
    border-radius: 14px;
    width: 350px;
    height: 450px;
    margin-bottom: 1.5rem;
    display: grid;
    align-items: center;
    grid-template-areas: "img info" "img info" "desc desc" "price price" "btn    btn";

    & .dogs-info {
        grid-area: info;
    }
    & .dogs-img-container {
        grid-area: img;
        width: 150px;
        height: 150px;
        overflow: hidden;
    }
    & .dogs-desc {
        grid-area: desc;
    }
    & .dogs-price {
        font-weight: 700;
        margin: 1rem 0 1rem 0;
        grid-area: price;
    }
    & .dogs-btn {
        padding: 0.35rem;
        border-radius: 14px;
        cursor: pointer;
        background-color: #e8e8e4;
        grid-area: btn;
        border: none;
        font-size: 1.25rem;
        transition: 100ms ease-in-out;
    }
    & .dogs-btn-disabled {
        padding: 0.35rem;
        border-radius: 14px;
        background-color: #94d2bd;
        grid-area: btn;
        border: none;
        font-size: 1.25rem;
        transition: 100ms ease-in-out;
    }
    & .dogs-btn:hover {
        background-color: #0a9396;
        color: white;
    }
    
    & .dogs-img {
        width: 100%;
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 50%;
    }

`;