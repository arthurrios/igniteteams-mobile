import { TextInputProps } from 'react-native'
import { Container } from './styles'
import { useTheme } from 'styled-components/native'

export function Input({ ...props }: TextInputProps) {
  const { COLORS } = useTheme()

  return <Container {...props} placeholderTextColor={COLORS.GRAY_300} />
}
