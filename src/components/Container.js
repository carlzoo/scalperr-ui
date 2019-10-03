import Styled from 'styled-components';

const Container = Styled.div`
    @media (min-width: 992px)
    {
        max-width: 960px;
    }

    @media (min-width: 768px)
    {
        max-width: 720px;
    }

    @media (min-width: 576px)
    {
        max-width: 540px;
    }

    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin: auto;
`;

const ContainerFluid = Styled.div`
    @media (max-width: 768px)
    {
        padding-right:15px;
        padding-left: 15px;
        width: 100%;
        margin: auto;
    }
`;

export {Container, ContainerFluid};