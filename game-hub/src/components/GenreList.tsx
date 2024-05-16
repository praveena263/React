import  useGenres from '../hoooks/useGenres'
// import useData from '../hoooks/useData'


const GenreList = () => {
    const {data} =useGenres()
    // const {data} =useData<Genre>('/genres')
  return (
<ul>
    {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
</ul>  )
}

export default GenreList