import { PropsWithChildren } from 'react'

const StyledLabel = ({ children, ...props }: PropsWithChildren<Pick<HTMLLabelElement, 'htmlFor'> & { checked: boolean }>) =>
  <label
    className={'w-12 h-6 block rounded-3xl cursor-pointer indent-(-9999px) relative after:absolute after:w-5 after:h-5 after:rounded-2xl after:left-2 after:top-1'}
    {...props}
  >
      {children}
  </label>

//     background: ${({ checked, theme }) => (checked ? theme.switchOnColour : theme.switchOffColour)};
//     position: relative;&:after {
//         content: "";
//         position: absolute;
//         left: ${({ checked }) => (checked ? "7px" : "calc(55% - 3px)")};
//         top: 3px;
//         width: 20px;
//         height: 20px;
//         background: ${({ theme }) => theme.backgroundColour};
//         border-radius: 18px;
//         transition: 0.3s;
//     }
// `

const Container = ({ children }: PropsWithChildren) =>
  <div className={'flex flex-row items-center justify-center'}>{children}</div>

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
