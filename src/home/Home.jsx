import Header from "../Header/Header";

const Home = () =>{
return(
    <div className="bg-glaucous">
    <Header/>
    <div className=" bg-glaucous flex items-center justify-center text-white p-6">
    <input
    type="text"
    placeholder="Search fishes here"
    className="p-3 rounded-full w-1/3 outline-none"
    />
    </div>
    <div>
<div className="bg-powder-blue rounded-3xl w-fit p-5">
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