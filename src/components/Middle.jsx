import bg from '../assets/bg.png';
import bg2 from '../assets/bg-2.png';
const Middle = () => {
  return (
    <>
      <div className=" min-h-screen">
        <img src={bg} alt="Background" className="w-full h-screen " />
        <img src={bg2} alt="Background" className="w-full h-screen " />
      </div>
    </>
  )
}

export default Middle