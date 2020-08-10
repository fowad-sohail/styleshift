import React from 'react';
import Introduction from '../components/Introduction';
import Motivation from '../components/Motivation';
import Explanation from '../components/Explanation';
import StyleGenerator from '../components/StyleGenerator';

function LandingPage() {
  return (
    <>
      <Introduction />
      <Explanation />
      <Motivation />
      <StyleGenerator />
    </>
  );
}
export default LandingPage;
