import { Link } from "react-router-dom";
import image from '../../../assets/download.jpg'




const Dashboard = () => {
    return (
        <div className="bg-blend-screen">
            <div className=" mt-6 navbar bg-base-100 bg-green-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <div className=" bg-white text-black">
                                <Link className=" bg-red-100 px-3 rounded-lg text-lg mb-4 text-sky-300" to="/">সোনামুখী ইউনিয়ন</Link>
                                <hr className="mt-2" />
                                <br />
                                <Link className=" px-3 rounded-lg text-lg mb-4 text-yellow-300" to="/">ড্যাশ বোর্ড</Link>
                                <hr className="mt-2" />
                                <br />
                                <Link className=" px-3 rounded-lg text-lg mb-4 text-yellow-300" to="/">ADS</Link>
                                <hr className="mt-2" />

                                <br />
                                <Link className=" px-3 rounded-lg text-lg mb-4 text-yellow-300" to="/">ট্যাক্স আদায়</Link>
                                <hr className="mt-2" />
                                <br />
                                <Link className=" px-3 rounded-lg text-lg mb-4 text-yellow-300" to="/">হোল্ডিং স্যার্ভিস</Link>
                                <hr className="mt-2" />
                                <br />
                                <Link className=" px-3 rounded-lg text-lg mb-4 text-yellow-300" to="/">ট্রেড লাইসেন্স</Link>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    {/* <a className="btn btn-ghost normal-case text-xl">ড্যাশ বোর্ড</a> */}
                    <button className="btn btn-outline text-xl">ড্যাশ বোর্ড</button>
                </div>
                <div className="navbar-end mr-6">
                    <input className="rounded-lg" type="text" name="" id="" />
                    <button className="btn btn-ghost btn-circle mr-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <img className="h-14 w-14 rounded-full" src={image} alt="" />

                        </div>
                    </button>
                </div>
            </div>

            <div>


                {/* <div className=" justify-between bg-slate-200 px-6 rounde-lg mx-8  mb-8 flex items-center mt-8">
                    <button className="btn btn-outline text-xl">ড্যাশ বোর্ড</button>
                    <img className="h-20 w-20 rounded-full" src={image} alt="" d/>

                </div> */}
                <div className="gap-10">


                    <div className="bg-red-200 rounded- mt-20 mb-10 mx-8  ">
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
            <div>
                <h1 className="text-xl py-10 text-center font font-semibold">2023© all right reserv by sonamukhiunion</h1>
            </div>
        </div>
    );
};

export default Dashboard;