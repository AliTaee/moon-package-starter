import { render } from '@testing-library/react'
import React from 'react'

import { MOCK_VIDEO_URL, TEST_ID } from './constants'
import Player from './video'

describe('video player tests', () => {
  it('should set src', () => {
    const { getByTestId } = render(<Player src={MOCK_VIDEO_URL} />)
    const videoPlayer = getByTestId(TEST_ID)
    expect(videoPlayer).toHaveAttribute('src', MOCK_VIDEO_URL)
  })

  it('should set autoplay', () => {
    const { getByTestId } = render(<Player src={MOCK_VIDEO_URL} autoPlay />)
    const videoPlayer = getByTestId(TEST_ID)
    expect(videoPlayer).toHaveAttribute('autoplay')
  })
})
