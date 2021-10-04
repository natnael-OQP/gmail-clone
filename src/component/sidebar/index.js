import styled from 'styled-components';
import { Button } from '@material-ui/core'

export const SidebarContainer = styled.div`
    flex:.2;
    box-sizing: border-box;
    border-right: 2px solid whitesmoke ;
`;
export const Btn = styled(Button)`
    margin-top: 15px !important;
    margin-left: 10px !important;
    margin-bottom: 15px !important;
    text-transform:capitalize !important;
    color: gray !important;
    padding: 10px 15px !important;
    border-radius: 20px !important;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px !important;
    transition: all 0.4s ease-in-out !important;
    &:hover{
        transform: translateY(-2px) !important;
        color: #000 !important;
        background-color: #fff !important;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px !important;
    }
`;