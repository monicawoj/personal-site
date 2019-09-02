import React from "react";
import PropTypes from "prop-types";
import Animation from "components/Animation";
import Layout from "components/Layout";

const AnimationPage = () => <Animation />;

export default () => {
  return (
    <Layout>
      <AnimationPage />
    </Layout>
  );
};

AnimationPage.propTypes = {
  home: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};
