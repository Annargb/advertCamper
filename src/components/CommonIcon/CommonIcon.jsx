import icons from '../../images/icons.svg';

export const CommonIcon = ({
  name,
  size,
  margin,
  position,
  transform,
  top,
  left,
  right,
  cursor,
}) => {
  return (
    <svg
      style={{
        marginRight: margin,
        width: size,
        height: size,
        position,
        transform,
        top,
        left,
        right,
        cursor,
      }}
    >
      <use href={`${icons}#${name}`} />
    </svg>
  );
};
