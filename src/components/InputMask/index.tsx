import { useField } from 'formik';
import { InputHTMLAttributes, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import InputMask from 'react-input-mask';

import { Container, ContainerText, Error } from './styles';

interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  mask: string;
}

const TextMask: React.FC<InputMaskProps> = ({
  name,
  mask,
  icon: Icon,
  ...rest
}) => {
  const [field, meta, helpers] = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBluer = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <ContainerText isErrored={!!(meta.touched && meta.error)}>
        {Icon && <Icon size={25} />}
        <InputMask
          id="inputMaks"
          mask={mask}
          onFocus={handleInputFocus}
          onBlur={handleInputBluer}
          {...rest}
          {...field}
        />
      </ContainerText>

      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </Container>
  );
};

export default TextMask;
