import {useState} from 'react'

import {
  SearchDiv,
  SearchInput,
  SearchName,
  ListDiv,
  ImgSong,
  SongsDiv,
  SongsNameDiv,
  SongsNameSubDiv,
  DeleteButton,
  SongsNameDivButton,
  Duration,
  Name,
  Genre,
  NoSong,
} from './styledComponents'

const SearchPage = ({initialTracksList}) => {
  const [list, setList] = useState(initialTracksList)

  const callSearch = e => {
    if (e.target.value === '') {
      setList(initialTracksList)
    } else {
      const searchedList = list.filter(eachSongName =>
        eachSongName.name.toLowerCase().includes(e.target.value.toLowerCase()),
      )
      setList(searchedList)
    }
  }

  const callDelete = passedId => {
    const deletedSongs = list.filter(eachSong => eachSong.id !== passedId)
    setList(deletedSongs)
  }

  return (
    <>
      <SearchDiv>
        <SearchName>Songs Playlist</SearchName>
        <SearchInput onChange={callSearch} placeholder="Search" type="search" />
      </SearchDiv>

      {list.length ? (
        <ListDiv>
          <ul>
            {list.map(eachSong => (
              <li key={eachSong.id}>
                <SongsDiv>
                  <SongsNameDiv>
                    <div>
                      <ImgSong src={eachSong.imageUrl} alt="track" />
                    </div>
                    <SongsNameSubDiv>
                      <Name>{eachSong.name}</Name>
                      <Genre>{eachSong.genre}</Genre>
                    </SongsNameSubDiv>
                  </SongsNameDiv>
                  <SongsNameDivButton>
                    <Duration>{eachSong.duration}</Duration>
                    <DeleteButton
                      type="button"
                      data-testid="delete"
                      onClick={() => callDelete(eachSong.id)}
                    >
                      X
                    </DeleteButton>
                  </SongsNameDivButton>
                </SongsDiv>
              </li>
            ))}
          </ul>
        </ListDiv>
      ) : (
        <NoSong>No Songs Found</NoSong>
      )}
    </>
  )
}

export default SearchPage
