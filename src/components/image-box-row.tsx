import { Box, Columns, Image } from 'react-bulma-components'
import React, { ReactElement } from 'react'

interface ImageBoxRowProps extends React.HTMLAttributes<HTMLDivElement> {
  isImageOnLeft?: boolean
  image: ReactElement<typeof Image>
  box: ReactElement<typeof Box>
}

export default function ImageBoxRow({
  isImageOnLeft,
  image,
  box,
}: ImageBoxRowProps): ReactElement {
  const imageColumnSize = 'one-third'

  return (
    <Columns className='is-vcentered'>
      {isImageOnLeft && (
        <Columns.Column size={imageColumnSize}>{image}</Columns.Column>
      )}
      <Columns.Column>{box}</Columns.Column>
      {!isImageOnLeft && (
        <Columns.Column size={imageColumnSize}>{image}</Columns.Column>
      )}
    </Columns>
  )
}

ImageBoxRow.defaultProps = {
  isImageOnLeft: true,
}
