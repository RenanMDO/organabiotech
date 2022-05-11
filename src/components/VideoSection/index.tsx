
import { Button } from '../ButtonElements'
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
            <Video controls src='https://video.xx.fbcdn.net/v/t42.1790-2/244687795_3905703306197279_5666907441123267284_n.mp4?_nc_cat=105&ccb=1-6&_nc_sid=985c63&efg=eyJybHIiOjUxNiwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=3eN-3LybeMIAX9xsuZ8&rl=516&vabr=287&_nc_ht=video.fjoi10-1.fna&oh=00_AT_4dVU5Cl1QG3we67CvjDfDB818x32F5QBmTC8O1aPT6A&oe=627BF76B' />
          </VideoRol>
        </VideoWrap>
      </VideoContainer>
    </>
  )
}
