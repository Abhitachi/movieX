import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { getApiConfiguration, getGenres } from './redux/homeSlice'
import { fetchDataFromApi } from './utils/api'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import PageNotFound from './pages/404/PageNotFound'
import Deatils from './pages/details/Deatils'
import Explore from './pages/explore/Explore'
import Home from './pages/home/Home'
import SearchResult from './pages/searchResult/SearchResult'


function App() {
  console.log("here");

  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home)
  // console.log(url)
  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {

      const url = {
        backdrop: res?.images.secure_base_url + "original",
        poster: res?.images.secure_base_url + "original",
        profile: res?.images.secure_base_url + "original"
      }

      dispatch(getApiConfiguration(url))
      // console.log(res)
    })
  }
  useEffect(() => {
    fetchApiConfig()
    generesCall()
  }, [])

  const generesCall = async () => {
    let promises = [];
    let endPoint = ["tv", "movie"]
    let allGeneres = {}

    endPoint.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises)

    data.map(({ genres }) => {
      return genres.map((item) => (allGeneres[item.id] = item))
    });

    dispatch(getGenres(allGeneres))



  }



  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Deatils />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
