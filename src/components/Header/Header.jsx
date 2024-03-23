import * as c from './Header.styled';
export const Header = () => {
  return (
    <c.HeaderContainer>
      <c.Navigation>
        <c.StyledLink to="/">Home</c.StyledLink>
        <c.StyledLink to="/catalog">Catalog</c.StyledLink>
        <c.StyledLink to="/favorites">Favorite</c.StyledLink>
      </c.Navigation>
    </c.HeaderContainer>
  );
};
