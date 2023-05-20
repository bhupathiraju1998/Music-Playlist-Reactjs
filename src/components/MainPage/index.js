import {BgContainer, EdImage, NameStyle, ProfStyle} from './styledComponents'

import SearchPage from '../SearchPage'

const MainPage = ({initialTracksList}) => (
  <BgContainer>
    <EdImage>
      <NameStyle>Ed Sheeran</NameStyle>
      <ProfStyle>Singer</ProfStyle>
    </EdImage>
    <SearchPage initialTracksList={initialTracksList} />
  </BgContainer>
)

export default MainPage
