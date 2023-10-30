import { TextInput, TextInputProps } from 'react-native'
import { Container } from './styles'
import { useTheme } from 'styled-components/native'

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...props }: Props) {
  const { COLORS } = useTheme()

  return (
    <Container
      {...props}
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
    />
  )
}
