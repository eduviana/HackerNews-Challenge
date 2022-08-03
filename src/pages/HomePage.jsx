import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import Card from '../components/Card'
import Dropdown from '../components/Dropdown'
import Layout from '../components/Layout/Layout'

const HomePage = () => {

  // const {hola} = useContext(PostContext);
  // console.log(hola)

  return (
    <Layout>
      <Dropdown />
      <Card />
   </Layout>
  )
}

export default HomePage