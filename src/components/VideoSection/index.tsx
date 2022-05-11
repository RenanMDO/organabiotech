
import { VideoContainer, VideoWrap, Video, TextVideo, VideoRol } from './VideoElements'

export function VideoSection() {
  return (
    <>
      <VideoContainer>
        <VideoWrap>
          <TextVideo>
            Conheça um pouco mais sobre a Organa!
          </TextVideo>
          <VideoRol>
            <Video controls src={require('../../assets/videos/organa.mp4')} />
          </VideoRol>
        </VideoWrap>
      </VideoContainer>
    </>
  )
}
