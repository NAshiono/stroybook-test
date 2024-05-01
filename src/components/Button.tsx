import styled from '@emotion/styled'
import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button<ButtonProps>({
  padding: '15px',
  margin: 0,
  boxSizing: 'border-box',
  color: '#ececec',
  border: '1px solid #475e52',
  borderRadius: '6px',
  backgroundColor: '#499970',
  fontSize: '16px',
  boxShadow: '1px 1px 20px black',
})

export function Button({ children, ...rest }: ButtonProps) {
  return <StyledButton {...rest}>{children}</StyledButton>
}
