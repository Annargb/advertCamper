import icons from '../../images/icons.svg';

export const CommonIcon = ({ name, size, margin }) => {
  return (
    <svg style={{ marginRight: margin, width: size, height: size }}>
      <use href={`${icons}#${name}`} />
    </svg>
  );
};
