import Header from "../Header/Header";

const Home = () =>{
return(
    <div className="bg-glaucous h-screen">
    <Header/>
    <div className=" bg-glaucous flex items-center justify-center text-white p-6">
    <input
    type="text"
    placeholder="Search fishes here"
    className="p-3 rounded-full lg:w-1/2 w-4/5 outline-none"
    />
    </div>
    <div>
<div className="bg-powder-blue rounded-3xl w-4/5 p-5 mx-auto">
    <p className="text-2xl">Top 5 fishes</p>
    <ul type='none'>
<li className="text-2xl">Rohu</li>
<li className="text-2xl">Hilsa</li>
<li className="text-2xl">Calsa</li>
<li className="text-2xl">Rohu</li>
<li className="text-2xl">Rohu</li>
</ul>
</div>
   
   
 
 </div>

    </div>
)
}

export default Home;