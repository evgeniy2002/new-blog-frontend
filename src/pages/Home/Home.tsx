import React from 'react';
import { Box, Container, Tab, Tabs, Grid, Paper } from '@mui/material';
import s from './Home.module.scss';
import { Post } from '../../components/Post';
import { styled } from '@mui/material/styles';

const posts = [
  {
    id: 1,
    title: 'Почему Google самая лучшая компания в миреПочему Google самая лучшая компания в мире',
    text: 'В этой статье я расскажу, как я попобывал в Америке, и посетил одну из самых больших команий в мире, а такжеВ этой статье я расскажу, как я попобывал в Америке, и посетил одну из самых больших команий в мире, а также',
    imageUrl:
      'https://games.mail.ru/hotbox/content_files/news/2022/11/21/1aa4bec97d274b75b766b3690507786b.jpg',
    tags: ['Путешествие', 'Спорт'],
  },
  {
    id: 2,
    title: 'Почему Google самая лучшая компания в миреПочему Google самая лучшая компания в мире',
    text: 'В этой статье я расскажу, как я попобывал в Америке, и посетил одну из самых больших команий в мире, а такжеВ этой статье я расскажу, как я попобывал в Америке, и посетил одну из самых больших команий в мире, а также',
    imageUrl: 'https://archakov.im/uploads/1666519086820.jpg',
    tags: ['Путешествие'],
  },
  {
    id: 3,
    title: 'Почему Google самая лучшая компания в мире',
    text: 'В этой статье я расскажу, как я попобывал в Америке, и посетил одну из самых больших команий в мире, а такжеВ этой статье я расскажу, как я попобывал в Америке, и посетил одну из самых больших команий в мире, а также',
    imageUrl: 'https://archakov.im/uploads/1666519583832.jpg',
    tags: ['Путешествие'],
  },
  {
    id: 4,
    title: 'Почему Google самая лучшая компания в мире',
    text: 'В этой статье я расскажу, как я попобывал в Америке, и посетил одну из самых больших команий в мире, а такжеВ этой статье я расскажу, как я попобывал в Америке, и посетил одну из самых больших команий в мире, а также',
    imageUrl: 'https://archakov.im/uploads/1666522161247.jpg',
    tags: ['Путешествие'],
  },
  {
    id: 4,
    title: 'Почему Google самая лучшая компания в мире',
    text: 'В этой статье я расскажу, как я попобывал в Америке, и посетил одну из самых больших команий в мире, а такжеВ этой статье я расскажу, как я попобывал в Америке, и посетил одну из самых больших команий в мире, а также',
    imageUrl: 'https://archakov.im/uploads/1666522213055.jpg',
    tags: ['Путешествие'],
  },
  {
    id: 4,
    title: 'Почему Google самая лучшая компания в мире',
    text: 'В этой статье я расскажу, как я попобывал в Америке, и посетил одну из самых больших команий в мире, а такжеВ этой статье я расскажу, как я попобывал в Америке, и посетил одну из самых больших команий в мире, а также',
    imageUrl:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png',
    tags: ['Путешествие'],
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: '',
  color: theme.palette.text.secondary,
}));
export const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ width: '100%', mt: 4 }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {[posts[0]].map((el) => (
            <Grid item xs={12}>
              <Post
                id={el.id}
                title={el.title}
                text={el.text}
                imageUrl={el.imageUrl}
                tags={el.tags}
              />
            </Grid>
          ))}
          {posts.slice(1).map((el) => (
            <Grid item xs={4}>
              <Post
                id={el.id}
                title={el.title}
                text={el.text}
                imageUrl={el.imageUrl}
                tags={el.tags}
                optional={true}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
    // <Grid container spacing={2}>
    //   <Grid item xs={4}>
    //     {posts.slice(1).map((el) => (
    //       <Post
    //         id={el.id}
    //         title={el.title}
    //         text={el.text}
    //         imageUrl={el.imageUrl}
    //         tags={el.tags}
    //       />
    //     ))}
    //   </Grid>
    // </Grid>
  );
};

{
  /* {[posts[0]].map((el, index) => (
      <Post id={el.id} title={el.title} text={el.text} imageUrl={el.imageUrl} tags={el.tags} />
    ))}
    <div className={s.home_row}>
      {posts.slice(1).map((el, index) => (
        <Post
          id={el.id}
          title={el.title}
          text={el.text}
          imageUrl={el.imageUrl}
          tags={el.tags}
          optional={true}
        />
      ))}
    </div> */
}
{
  /* <Box sx={{ width: '100%' }}>
      <Tabs value={0} aria-label="wrapped label tabs example">
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
    </Box> */
}
{
  /* </Container> */
}
