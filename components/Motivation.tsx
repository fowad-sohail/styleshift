import React from 'react';
import { Box, Typography } from '@material-ui/core';

function Motivation() {
  return (
    <Box
      justifyContent='flex-end'
      style={{ backgroundColor: '#8aa2f2', height: '500px' }}
    >
      <div className='d-flex flex-row-reverse'>
        <h2 className='display-4 font-weight-bold pt-5 mb-2 mx-5'>
          Why StyleShift?
        </h2>
      </div>
      <Typography className='mx-5'>
        So back in the fall semester of 2019, I took a Deep Learning
        specialization course offered by Andrew Ng and Coursera. Late in the
        semester, I implemented neural style transfer in a Jupyter Notebook. I
        was fascinated by this application of CNNs. But a Jupyter Notebook
        wasn't practical. I wanted an easier and more user-friendly interface to
        interact with the model I had just developed. Now, in the Summer of
        2020, with some free time on my hands, it's time to make this idea a
        reality.
      </Typography>
    </Box>
  );
}

export default Motivation;

{
  /* <Grid id='top-row' container>
<Grid item xs={12}>
  <h2 className='display-4 font-weight-bold pt-5 mb-2 mx-5'>
    Why StyleShift?
  </h2>
</Grid>
</Grid>
<hr />
<Grid id='bottom-row' container>
<Grid item xs={12}>
  <Typography className='mx-5'>
    So back in the fall semester of 2019, I took a Deep Learning
    specialization course offered by Andrew Ng and Coursera. This was
    part of an “Engineering Clinic” course that engineering majors had
    to take every semester. It's a project based class except it
    focuses on a topic that the student chooses. Late in the semester,
    I worked through an example of implementing neural style transfer
    using a convolutional neural network. I've always had a penchant
    of making things practical. I had spent several weeks learning how
    to train AI models and getting accuracy metrics. That was all well
    and good, but who cares if no one can actually use it? I had a
    background in web development, and I was fascinated on how to port
    a model to the browser. But, I was in the middle of a 17 credit
    semester and working part time, so this thought sat on the back
    burner for a while. Now, we're in the middle of Summer 2020 - I've
    learned a ton more about web development and I'm ready to take
    this idea that's been in the back of my mind for many months and
    make it reality.
  </Typography>{' '}
</Grid>
</Grid> */
}
