import React from 'react';
import { Container, Typography, Toolbar, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import style from './Header.module.scss';
import logo from '../../assets/image/pencil.svg';
import SearchIcon from '@mui/icons-material/Search';
const pages = [
  { id: 1, title: 'Статьи', link: 'articles' },
  { id: 2, title: 'Заметки', link: 'notes' },
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  backgroundColor: alpha('#EBEBEF', 0.6),
  '&:hover': {
    backgroundColor: alpha('#EBEBEF', 0.4),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

export const Header: React.FC = () => {
  const [catalogId, setCatalogId] = React.useState<null | number>(0);
  const [themeSite, setThemeSite] = React.useState<boolean>(true);

  const handleCatalogId = (id: number) => {
    setCatalogId(id);
  };

  const handleTheme = () => {
    setThemeSite(!themeSite);
  };
  React.useEffect(() => {
    ibg();
  }, []);

  const ibg = React.useCallback(() => {
    let ibg = document.querySelectorAll<HTMLElement>('.ibg');
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector<HTMLElement>('img')) {
        ibg[i].style.backgroundImage =
          'url(' + ibg[i].querySelector<HTMLElement>('img')?.getAttribute('src') + ')';
      }
    }
  }, []);
  return (
    <div className={style.root}>
      <Container maxWidth="lg">
        <Toolbar>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <a href="/" className={style.logo}>
            <img src={logo} alt="logo" />
          </a>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              padding: 1.5,
              letterSpacing: '0rem',
              fontSize: 25,
              fontWeight: 700,
              display: { xs: 'none', md: 'block' },
              color: '#001A34',
              textDecoration: 'none',
            }}>
            g4rfiEld Blog
          </Typography>
          <nav className={style.nav}>
            <ul className={style.nav_list}>
              {pages.map((el, index) => (
                <li
                  onClick={() => handleCatalogId(index)}
                  className={
                    catalogId === index
                      ? style.nav_list_item + ' ' + style.active
                      : style.nav_list_item
                  }>
                  <a href="#">{el.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <Search sx={{ ml: 'auto' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <div className={style.header_listTheme}>
            {themeSite ? (
              <svg
                onClick={handleTheme}
                className={style.header_listTheme_sunIcon}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 0C10.3315 0 10.6495 0.131696 10.8839 0.366116C11.1183 0.600537 11.25 0.918479 11.25 1.25V2.5C11.25 2.83152 11.1183 3.14946 10.8839 3.38388C10.6495 3.6183 10.3315 3.75 10 3.75C9.66848 3.75 9.35054 3.6183 9.11612 3.38388C8.8817 3.14946 8.75 2.83152 8.75 2.5V1.25C8.75 0.918479 8.8817 0.600537 9.11612 0.366116C9.35054 0.131696 9.66848 0 10 0V0ZM15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10V10ZM14.42 16.1875L15.3038 17.0712C15.5395 17.2989 15.8553 17.4249 16.183 17.4221C16.5107 17.4192 16.8243 17.2878 17.056 17.056C17.2878 16.8243 17.4192 16.5107 17.4221 16.183C17.4249 15.8553 17.2989 15.5395 17.0712 15.3038L16.1875 14.42C15.9517 14.1923 15.636 14.0663 15.3082 14.0692C14.9805 14.072 14.667 14.2035 14.4352 14.4352C14.2035 14.667 14.072 14.9805 14.0692 15.3082C14.0663 15.636 14.1923 15.9517 14.42 16.1875V16.1875ZM17.07 2.92875C17.3043 3.16316 17.436 3.48105 17.436 3.8125C17.436 4.14396 17.3043 4.46184 17.07 4.69625L16.1875 5.58C16.0722 5.69939 15.9343 5.79462 15.7818 5.86013C15.6293 5.92564 15.4652 5.96012 15.2993 5.96156C15.1333 5.96301 14.9687 5.93138 14.8151 5.86853C14.6614 5.80568 14.5219 5.71286 14.4045 5.59549C14.2871 5.47813 14.1943 5.33856 14.1315 5.18494C14.0686 5.03132 14.037 4.86672 14.0384 4.70075C14.0399 4.53477 14.0744 4.37075 14.1399 4.21824C14.2054 4.06574 14.3006 3.92781 14.42 3.8125L15.3038 2.92875C15.5382 2.69441 15.856 2.56277 16.1875 2.56277C16.519 2.56277 16.8368 2.69441 17.0712 2.92875H17.07ZM18.75 11.25C19.0815 11.25 19.3995 11.1183 19.6339 10.8839C19.8683 10.6495 20 10.3315 20 10C20 9.66848 19.8683 9.35054 19.6339 9.11612C19.3995 8.8817 19.0815 8.75 18.75 8.75H17.5C17.1685 8.75 16.8505 8.8817 16.6161 9.11612C16.3817 9.35054 16.25 9.66848 16.25 10C16.25 10.3315 16.3817 10.6495 16.6161 10.8839C16.8505 11.1183 17.1685 11.25 17.5 11.25H18.75ZM10 16.25C10.3315 16.25 10.6495 16.3817 10.8839 16.6161C11.1183 16.8505 11.25 17.1685 11.25 17.5V18.75C11.25 19.0815 11.1183 19.3995 10.8839 19.6339C10.6495 19.8683 10.3315 20 10 20C9.66848 20 9.35054 19.8683 9.11612 19.6339C8.8817 19.3995 8.75 19.0815 8.75 18.75V17.5C8.75 17.1685 8.8817 16.8505 9.11612 16.6161C9.35054 16.3817 9.66848 16.25 10 16.25V16.25ZM3.8125 5.58C3.92856 5.69614 4.06635 5.78828 4.21802 5.85116C4.36968 5.91405 4.53225 5.94645 4.69643 5.9465C4.86062 5.94656 5.02321 5.91428 5.17492 5.8515C5.32663 5.78872 5.46449 5.69668 5.58062 5.58062C5.69676 5.46457 5.7889 5.32678 5.85179 5.17511C5.91467 5.02344 5.94707 4.86088 5.94713 4.69669C5.94719 4.53251 5.91491 4.36992 5.85213 4.21821C5.78935 4.0665 5.69731 3.92864 5.58125 3.8125L4.69625 2.92875C4.4605 2.70105 4.14474 2.57506 3.817 2.57791C3.48925 2.58076 3.17574 2.71222 2.94398 2.94398C2.71222 3.17574 2.58076 3.48925 2.57791 3.817C2.57506 4.14474 2.70105 4.4605 2.92875 4.69625L3.8125 5.58V5.58ZM5.58 16.1875L4.69625 17.0712C4.4605 17.2989 4.14474 17.4249 3.817 17.4221C3.48925 17.4192 3.17574 17.2878 2.94398 17.056C2.71222 16.8243 2.58076 16.5107 2.57791 16.183C2.57506 15.8553 2.70105 15.5395 2.92875 15.3038L3.8125 14.42C4.04825 14.1923 4.36401 14.0663 4.69175 14.0692C5.0195 14.072 5.33301 14.2035 5.56477 14.4352C5.79653 14.667 5.92799 14.9805 5.93084 15.3082C5.93369 15.636 5.8077 15.9517 5.58 16.1875V16.1875ZM2.5 11.25C2.83152 11.25 3.14946 11.1183 3.38388 10.8839C3.6183 10.6495 3.75 10.3315 3.75 10C3.75 9.66848 3.6183 9.35054 3.38388 9.11612C3.14946 8.8817 2.83152 8.75 2.5 8.75H1.25C0.918479 8.75 0.600537 8.8817 0.366116 9.11612C0.131696 9.35054 0 9.66848 0 10C0 10.3315 0.131696 10.6495 0.366116 10.8839C0.600537 11.1183 0.918479 11.25 1.25 11.25H2.5Z"></path>
              </svg>
            ) : (
              <svg
                onClick={handleTheme}
                className={style.header_listTheme_moonIcon}
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 4L10.4546 2.54546L9.00001 2L10.4546 1.45454L11 0L11.5454 1.45454L13 2L11.5454 2.54546L11 4ZM7.7096 18.9999H7.63453C6.60389 18.9921 5.58521 18.7786 4.63819 18.3721C3.69117 17.9655 2.83473 17.3741 2.11903 16.6323C0.791879 15.2127 0.0374844 13.3517 0.00135155 11.4085C-0.0346592 9.46524 0.650033 7.57751 1.92359 6.10959C2.74415 5.18987 3.77552 4.48314 4.92933 4.05014C5.06397 3.99832 5.2107 3.98636 5.35194 4.01569C5.49317 4.04501 5.62293 4.11437 5.72584 4.2155C5.82118 4.3127 5.88831 4.43397 5.92005 4.56635C5.95179 4.69872 5.94703 4.83725 5.90614 4.96712C2.54054 9.25972 3.73914 14.5764 9.17518 15.0273C9.73524 15.0738 10.1951 15.07 10.5 15C11.9806 14.66 12.5357 14.1503 13.0108 13.7141C13.3042 13.4446 13.5671 13.2031 13.999 13.0471C14.1337 12.9997 14.2789 12.9916 14.418 13.0238C14.557 13.056 14.684 13.127 14.7841 13.2288C14.8842 13.3305 14.9533 13.4586 14.9832 13.5981C15.0132 13.7376 15.0028 13.8828 14.9534 14.0167C14.5696 15.0417 13.9699 15.9722 13.1951 16.7451C12.4743 17.4638 11.6187 18.0331 10.6773 18.42C9.73597 18.807 8.72743 19.0041 7.7096 18.9999ZM9.54542 9.45454L10.5 12L11.4546 9.45454L14 8.5L11.4546 7.54546L10.5 5L9.54542 7.54546L7.00001 8.5L9.54542 9.45454ZM17.091 10.9091L17.5 12L17.9091 10.9091L19 10.5L17.9091 10.0909L17.5 9L17.091 10.0909L16 10.5L17.091 10.9091Z"></path>
              </svg>
            )}
          </div>
          {/* <Box
            sx={{
              mr: 0,
              display: 'flex',
              // alignItems: 'center',
              // textAlign: 'center',

              justifyContent: 'flex-end',
            }}>
            <Link
              underline="hover"
              href="#"
              sx={{ mr: 2.5, textDecoration: 'none', color: 'inherit', fontSize: '20px' }}>
              Статьи
            </Link>
            <Link href="#" sx={{ textDecoration: 'none', color: 'inherit', fontSize: '20px' }}>
              Заметки
            </Link>
          </Box> */}
          {/* <ul className={style.list}>
            {pages.map((item, index) => (
              <li
                className={index === catalogId ? style.active + ' ' + style.list_li : style.list_li}
                onClick={() => handleState(index)}>
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul> */}
          {/* <div className={style.buttons}>
            <a href="/login">
              <Button
                sx={{
                  mr: 1,
                  fontSize: 14,
                }}
                variant="outlined">
                Войти
              </Button>
            </a>
            <a href="/register">
              <Button variant="contained">Создать аккаунт</Button>
            </a>
          </div> */}
        </Toolbar>
      </Container>
    </div>
  );
};