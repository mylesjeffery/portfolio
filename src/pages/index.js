import React from 'react'

import { Layout, Head, Howdy, Posts } from '../components'

export default function Home() {
  // const [filter, setFilter] = useState([])

  // function addTag(tag) {
  //   const newFilter = [...filter]
  //   newFilter.push(tag)
  //   setFilter(newFilter)
  // }
  // function removeTag(tag) {
  //   let newFilter = [...filter]
  //   newFilter = newFilter.filter(t => t !== tag)
  //   setFilter(newFilter)
  // }

  return (
    <Layout>
      <Head title="Home" />
      <Howdy />
      {/* <Tags
        filter={filter}
        setFilter={setFilter}
        addTag={addTag}
        removeTag={removeTag}
      /> */}
      <Posts />
    </Layout>
  )
}
