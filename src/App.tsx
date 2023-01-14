import React from 'react';
import { Box, Button, Grid, Sheet, Stack, Typography } from '@mui/joy';
import './App.css';

function App() {
  return (
    <Box >
      <Grid container spacing={2}>
        <Grid md={7} lg={9}>
          <Typography level="display1" color='warning'>DISCO</Typography>

          <Box sx={{ height: '100vh' }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              overflow: 'hidden'
            }}>

              <iframe style={{
                width: '100%', height: '100%', overflow: 'hidden',
                alignSelf: 'center', position: 'absolute'
              }} src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL9tY0BWXOZFtwzdsm2-EL-4tiR0EqRPz1&autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay" allowFullScreen frameBorder={0} />
            </div>

          </Box>
        </Grid>

        <Grid md={5} lg={3}>
          <Typography level="display1" color='info'>New Music</Typography>
          <Stack>
            <iframe src="https://open.spotify.com/embed/track/59nOXPmaKlBfGMDeOVGrIK?utm_source=generator" width="100%" height="100" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
            <iframe src="https://open.spotify.com/embed/track/78QR3Wp35dqAhFEc2qAGjE?utm_source=generator" width="100%" height="100" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />


            <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1409836534&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" width="100%" height="100" style={{ marginBottom: 20, borderRadius: 10 }} frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />

            <iframe src="https://open.spotify.com/embed/track/0vjeOZ3Ft5jvAi9SBFJm1j?utm_source=generator" width="100%" height="100" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />

            <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1416717586&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" width="100%" height="100" style={{ marginBottom: 20, borderRadius: 10 }} frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
            <Button color='primary'>
              Suggest New Song
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box >
  )
}

export default App;
