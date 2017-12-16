import styled from 'styled-components';

import { media } from '../lib/styleUtils';

// import PlayButton from './PlayButton'
import { Grid } from './Layout';

export default () => (
  <ForTheLoveOfMusic>
    <Grid>
      <Left>
        <SectionTitle>For the love of music.</SectionTitle>
        <SectionDescription>
          Imagine a great paragraph that points out how Tunebay is all about
          putting the artist first. How anyone that uploads their music controls
          all their rights and royalties. How you get to set the price of albums
          and how we understand that for many artists music is much more than
          just an art form, its their livelihood.
        </SectionDescription>
      </Left>
      <Right>
        {/* <PlayButton
        size={70}
        onClick={() => console.log('load and play video')}
      /> */}
      </Right>
    </Grid>
  </ForTheLoveOfMusic>
);

const ForTheLoveOfMusic = styled.section`
  background-color: ${props => props.theme.lightestGrey};

  width: 100%;
  height: 95vh;
  padding: 6rem 3rem;
  position: relative;
  margin-bottom: 3rem;

  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);

  ${media.break2`
    clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
    height: 100vh;
  `};
`;

const Left = styled.div`
  align-items: center;
  width: 48%;
  padding-top: 7rem;

  ${media.break2`
    width: 100%;
    padding: 0;
  `};
`;

const SectionTitle = styled.h2`
  padding-bottom: 3rem;
  font-weight: 700;
  font-size: 4.8rem;
`;

const SectionDescription = styled.p`
  line-height: 1.7;
  font-size: 1.8rem;
  ${media.break2`
    display: none;
  `};
`;

const Right = styled.div`
  background-image: url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1650&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.lighterGrey};

  width: 48%;
  top: 3rem;
  bottom: 0;
  right: 0;
  height: 75%;
  border-radius: 6px 0 0 6px;
  padding-left: 12rem; /* Make content look centered */

  background-size: cover;
  position: absolute;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  &:hover {
    cursor: pointer;
  }

  ${media.break2`
    padding-left: 0;
    position: relative;
    width: 100%;
    padding-top: 55%;
  `};
`;
