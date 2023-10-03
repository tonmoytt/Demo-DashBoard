import { Link } from "react-router-dom";
import image from '../../../assets/download.jpg'


const Navbar = () => {
    return (
        <div className="grid grid-cols-2">
            {/* <div className="grid grid-cols-2"> */}
            {/* <div className="h-96 mt-10 w-32 grid">
                <Link to="/">সোনামুখী ইউনিয়ন</Link>
                <Link to="/bb">ড্যাশ বোর্ড</Link>
            </div> */}


            <div className="h-96 "> 
                <Link to="/">সোনামুখী ইউনিয়ন</Link>
                <br />
                <Link to="/">ড্যাশ বোর্ড</Link>
                <br />
                <Link to="/">ADS</Link>
                <br />
                <Link to="/">ট্যাক্স আদায়</Link>
                <br />
                <Link to="/">হোল্ডিং স্যার্ভিস</Link>
                <br />
                <Link to="/">ট্রেড লাইসেন্স</Link>
            </div>

<div>


            <div className=" justify-between bg-slate-200 px-6 rounded-lg mx-8  mb-8 flex items-center mt-8">
                <button className="btn btn-outline text-xl">ড্যাশ বোর্ড</button>
                <img className="h-20 w-20 rounded-full" src={image} alt="" />

            </div>
            <div className="gap-10">


                <div className="bg-red-200 rounded-lg mb-10 mx-8  ">
                    <p className="p-5 text-2xl">0</p>
                    <p className="pb-3 px-3 text-3xl">আজকের আদায়কৃত কর</p>
                </div>
                <div className="bg-cyan-200 rounded-lg mb-10 mx-8">
                    <p className="p-5 text-2xl">0</p>
                    <p className="pb-3 px-3 text-3xl">গতকালের আদায়কৃত কর</p>
                </div>
                <div className="bg-emerald-200 rounded-lg mb-10 mx-8">
                    <p className="p-5 text-2xl">7233</p>
                    <p className="pb-3 px-3 text-3xl">সর্বমোট খানা</p>
                </div>
                <div className="bg-lime-200 rounded-lg mb-10 mx-8">
                    <p className="p-5 text-2xl">0</p>
                    <p className="pb-3 px-3 text-3xl">সর্বমোট ট্রেড লাইসেন্স</p>
                </div>
                <div className="bg-violet-200 rounded-lg mb-10 mx-8">
                    <p className="p-5 text-2xl">0</p>
                    <p className="pb-3 px-3 text-3xl">2023-24 অর্থ বছর আদায়কৃত কর</p>
                </div>
                <div className="bg-red-300 rounded-lg  mb-10 mx-8">
                    <p className="p-5 text-2xl">6</p>
                    <p className="pb-3 px-3 text-3xl">Total Admin</p>
                </div>

            </div>
            </div>



            {/* </div> */}



        </div>
    );
};

export default Navbar;