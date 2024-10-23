import React from 'react'

import { TEST_ID } from './constants'
import styles from './video.module.css'
import { VideoProps } from './video.types'

/** Video Player
 *
 * @param src video source
 * @param autoPlay option to autoplay the video
 *
 * @returns a video player component
 */

const Player = ({ src, autoPlay = false }: VideoProps) => {
  return (
    <video
      data-testid={TEST_ID}
      className={styles.video}
      src={src}
      controls
      autoPlay={autoPlay}
    />
  )
}

export default Player
