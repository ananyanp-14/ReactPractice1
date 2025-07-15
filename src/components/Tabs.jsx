export default function Tabs({children,buttons,ButtonsContainer='menu'})
{
    // const ButtonsConatiner=buttonsContainer;//capital case
    return   <>
        <ButtonsContainer>
        {buttons}
        </ButtonsContainer>
        {children}
        </>
    
}