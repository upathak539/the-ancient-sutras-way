/* eslint-disable react/no-unescaped-entities */
import Panchang from './components/Panchang';
export default  function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center p-[10px] mt-[220px] font-semibold text-sm font-Courgette text-white ">
        <h2>Welcome Seeker! Here you can feed your soul with the vibes of spiritual realm by watching interesting videos , reading blogs and knowing about today's panchang.</h2>
        <Panchang/>
      </div>
    </>

  )
}
