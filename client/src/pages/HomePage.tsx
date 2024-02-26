import landingimage from "../assets/landing.png"
import appdownloadimage from "../assets/appDownload.png"

 const HomePage = () =>{
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-12 flex felx-col gap-4 text-center -mt-16">
            <h1 className="text-4xl font-bold tracking-tight text-red-500">
            "Bringing the world to your doorstep, one bite at a  time.
            </h1>
            <span className="text-xl">
            Fast food, faster delivery b/c hunger waits for no one.
            </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
              <img src={landingimage} />
          <div className="flex flex-col justify-center items-center text-center gap-5">
            <span className="font-bold text-4xl tracking-tighter leading-none">
              Fast Food Made Easy
            </span>
            <span>
              Download the HUFD app for faster ordering
            </span>
            <img src={appdownloadimage}/>
          </div>
        </div>
    </div>
  )
}
export default HomePage;