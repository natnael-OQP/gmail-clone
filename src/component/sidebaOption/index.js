import styled,{css} from 'styled-components/macro';

const Flexy = css`
    display: flex;
    align-items: center;
`;

const HoverColor = css`
    font-weight: 800 !important; ;
    background-color: #fcecec !important;
    color: #c04b37 !important;
`;
export const SidebarOptionWrapper = styled.div`
    ${Flexy}
    height: 30px;
    cursor: pointer;
    padding: 0px 10px;
    color: gray;
    &:hover{
        ${HoverColor};
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        background-color: lightpink;
        P{
            visibility: visible;
            ${HoverColor}
        };
        H4{
            ${HoverColor}
        }

    }
`;

export const H4 = styled.h4`
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
    margin-left: 17px;
    flex: 1;
`;

export const P = styled.p(({selected}) => ({
    color:"gray",
    visibility:selected ? 'visible' : 'hidden'
}));