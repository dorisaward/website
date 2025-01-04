import styled from 'styled-components'

const StyledLabel = styled.label<{ checked: boolean }>`  
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 25px;
    background: ${({ checked, theme }) => (checked ? theme.switchOnColour : theme.switchOffColour)};
    display: block;
    border-radius: 20px;
    position: relative;&:after {
        content: "";
        position: absolute;
        left: ${({ checked }) => (checked ? "7px" : "calc(55% - 3px)")};
        top: 3px;
        width: 20px;
        height: 20px;
        background: ${({ theme }) => theme.backgroundColour};
        border-radius: 18px;
        transition: 0.3s;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Text = styled.p`
    padding: ${({ theme }) => theme.padding}
`

type SwitchProps = {
    checked: boolean,
    onSwitch: () => void,
    label: { left: string, right: string } | string
}

export const Switch = ({ checked, onSwitch, label }: SwitchProps) => {
    const id = typeof label === 'string' ? label : (label.left + label.right)
    return (
        <Container key={'switch' + id}>
            {typeof label !== 'string' ? <Text>{label.left}</Text> : <Text>{label}</Text>}
            <StyledLabel htmlFor={id} checked={checked}>
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={onSwitch}
                />
            </StyledLabel>
            {typeof label !== 'string' && <Text>{label.right}</Text>}
        </Container>
    )
}
