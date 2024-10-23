import type { Meta, StoryObj } from '@storybook/react'

import { MOCK_VIDEO_URL } from './constants'
import Player from './video'
import type { VideoProps } from './video.types'

const meta: Meta<VideoProps> = {
  title: 'Components/Video',
  component: Player,
}

export default meta
type Story = StoryObj<VideoProps>

export const Default: Story = {
  args: {
    src: MOCK_VIDEO_URL,
  },
}

export const AutoPlay: Story = {
  args: {
    src: MOCK_VIDEO_URL,
    autoPlay: true,
  },
}
