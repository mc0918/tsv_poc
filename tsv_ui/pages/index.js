import { useDispatch } from 'react-redux'

import Clock from '../components/clock'
import Counter from '../components/counter'
import { Header } from '../components/header'
import { tick } from '../lib/slices/clockSlice'
import useInterval from '../lib/useInterval'

const IndexPage = () => {
  // const dispatch = useDispatch()
  // // Tick the time every second
  // useInterval(() => {
  //   dispatch(tick({ light: true, lastUpdate: Date.now() }))
  // }, 1000)

  return (
    <>
      <Header />
      {/* <Clock /> */}
      <Counter />
    </>
  )
}

export default IndexPage
