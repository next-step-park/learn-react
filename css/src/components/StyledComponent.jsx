import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    display: flex;
    background: transparent;
    border-radius: 3px;
    border: 2px solid #3c5b69;
    color: #b9eaff;
    margin: 0.1em;
    padding: 0.25em 1em;
    ${(props) =>
        props.primary &&
        css`
            background: #009cd5;
            color: white;
        `}
`;
export default function StyledComponent() {
    return (
        <>
            <Container>
                <Button>Button3</Button>
                <Button primary>Button4</Button>
            </Container>
        </>
    );
}
