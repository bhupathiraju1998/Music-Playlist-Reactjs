import styled from 'styled-components'

export const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px 10px 15px;
`
export const SearchInput = styled.input`
  color: #cbd5e1;
  background-color: transparent;
  border-color: #cbd5e1;
  width: 250px;
  height: 30px;
  border-radius: 7px;
`

export const SearchName = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-weight: 500;
`
export const ListDiv = styled.div`
  padding: 10px 15px 10px 15px;
  border-color: #ffffff;
  display: flex;
  flex-flow: column;
  height: 45%;
  overflow-y: scroll;
`
export const SongsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0px 5px 0px;
`
export const SongsNameDiv = styled.div`
  display: flex;
  flex-direction: row;
`

export const ImgSong = styled.img`
  height: 150px;
  width: 150px;
`
export const SongsNameSubDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  font-family: Roboto;
`
export const Genre = styled.p`
  color: #3b82f6;
  font-size: 24px;
  font-weight: 900;
  font-family: Roboto;
`
export const DeleteButton = styled.button`
  height: 40px;
  width: 40px;
  cursor: pointer;
  background-color: transparent;
  color: #ffffff;
  border: none;
  margin-top: 5px;
`
export const SongsNameDivButton = styled.div`
  display: flex;
  flex-direction: row;
`
export const Duration = styled.p`
  height: 40px;
  width: 40px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  font-family: Roboto;
  margin: 10px;
`
export const NoSong = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  font-family: Roboto;
`
