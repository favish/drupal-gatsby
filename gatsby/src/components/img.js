import React from 'react'

import Img from 'gatsby-image'

const NonStretchedImage = props => {

  let normalizedProps = props;
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
      },
    }
  }

  return <Img {...normalizedProps} />

};

export default NonStretchedImage;