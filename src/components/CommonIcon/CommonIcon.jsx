import icons from '../../images/icons.svg';

export const CommonIcon = ({
  name,
  width,
  size,
  height,
  margin,
  marginB,
  position,
  transform,
  top,
  left,
  right,
  cursor,
  fill,
}) => {
  return (
    <svg
      style={{
        marginRight: margin,
        width: size || width,
        height: size || height,
        marginBottom: marginB,
        position,
        transform,
        top,
        left,
        right,
        cursor,
        fill,
      }}
    >
      <use href={`${icons}#${name}`} />
    </svg>
  );
};
