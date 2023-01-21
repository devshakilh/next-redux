import styles from '../styles/Home.module.css'
import CarrousulHome from '../Components/HomeComponents/CarrosulHome'

import CategoryHome from '../Components/HomeComponents/CategotyHome'

export default function Home() {
  return (
    <div className='pb-4  bg-black' >



      <CarrousulHome />


      {/* Extra home section started =========--------- */}

      <div className='w-[1280px] mx-auto bg-gray-700'>
        <div className="card lg:card-side shadow-xl  my-6">
          <div className='grid  grid-cols-1  lg:w-1/2 lg:grid-cols-2'>
            <div >
              <figure><img className='lg:h-72  lg:w-64 h-96 w-96 my-4  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLiQNzLdOwFW3uSnpApNSdL-53QY-Uz9loGA&usqp=CAU" alt="Album" /></figure>
              <figure><img className='lg:h-72 mb-4 lg:w-64 h-96 w-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokB5Cfh7j005XxYIp_laGQ3XgbQyH2NN5-w&usqp=CAU" alt="Album" /></figure>
            </div>
            <div>
              <figure><img className='my-4 lg:h-72 lg:w-64 h-96 w-96 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9_v_ZUVXWAPqmjrt1bMy2M7jQxN7N_uyDw&usqp=CAU" alt="Album" /></figure>
              <figure><img className='lg:h-72 lg:w-64 h-96 w-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2R28U89dTiZfkOvAFn9831Vy8vOwDIrWO2w&usqp=CAUs" alt="Album" /></figure>
            </div>
          </div>

          <div className="card-body text-white content-center lg:w-1/2">
            <h1 className="text-5xl font-bold ">Non-Frost MobilePhone!</h1>
            <p className="py-6">Direct Hot MobilePhone
              Welcomehref an experience of freshness. WALTON Direct Cool Refrigerators are equipped with 100% copper condensers and Nano technologyhref take care of your evolving needs and at the same time, maintain the quality of the food that you preserve</p>
            <p className="py-6">When you have Walton refrigerator & freezer in your home you are safe from goinghref market every day that keeps you free from extra burden. You can keep all your foods and stuffs fresh for long. Our energy-saving, </p>

          </div>
        </div>
      </div>

      {/* extra home section end --------------=============== */}

      <CategoryHome />
    </div>
  )
}