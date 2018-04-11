import styled, { withProps } from '../../lib/theme';

interface Props {
  color: string;
  spacing?: string;
}

export default withProps<Props>()(styled.a)`
  color: ${props => (props.color ? props.color : props.theme.black)};
  padding-left: ${props => (props.spacing ? props.spacing : '3rem')};

  font-size: 1.3rem;
  font-weight: 700;
  line-height: 3rem;

  text-transform: uppercase;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;
