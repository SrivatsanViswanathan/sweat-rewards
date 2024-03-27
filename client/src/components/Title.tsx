import Wrapper from '../css/Title';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
    </Wrapper>
  );
};

export default Title;
