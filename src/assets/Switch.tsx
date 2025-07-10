import { PropsWithChildren } from 'react'
import ReactSwitch from 'react-switch'

const StyledLabel = ({ children, ...props }: PropsWithChildren<Pick<HTMLLabelElement, 'htmlFor'>>) =>
  <label className={'p-1'}{...props}>{children}</label>

const Container = ({ children }: PropsWithChildren) =>
  <div className={'flex flex-row items-center justify-center p-1'}>{children}</div>

const Text = ({ children }: PropsWithChildren) =>
  <p className={'p-1'}>{children}</p>

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
            <StyledLabel htmlFor={id}>
              <ReactSwitch checked={checked} onChange={onSwitch} />
            </StyledLabel>
            {typeof label !== 'string' && <Text>{label.right}</Text>}
        </Container>
    )
}
