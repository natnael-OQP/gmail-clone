import styled from 'styled-components';

export const EmailSectionContainer = styled.div(({color,selected }) => ({
    display: "flex",
    alignItems: "center",
    padding: "7px 10px",
    minWidth: "200px",
    cursor: "pointer",
    borderBottom: `${selected && `1px solid ${color}`}`,
    color: `${color} `,
    backgroundColor: `${selected ? "whitesmoke" : "#fff"}`,
    borderWidth: `${selected && "2px !important "}`,
    
}));
export const H4 = styled.h4`
    font-size: 1rem;
    text-transform: capitalize;
    font-weight:500;
    letter-spacing:.02rem;
    margin-left: 0.3rem;
`;