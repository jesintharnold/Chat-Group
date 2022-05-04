import bottle from '../../../Assets/bottle.svg'
export const List=()=>{
return (
  <div className="w-full h-full">
  {/* ADD ITEM  */}
  <div className="bg-shop-bottle-bg w-full h-40 rounded-3xl items-center justify-evenly flex flex-row">
  <img src={bottle} alt="Bottle" className='block h-[105%] -translate-y-5 flex-shrink-0'/>
  <div className='block float-right'>
  <span className='font-quick text-left block text-2xl my-4 text-white'>Didn’t find what you<br></br> need?</span>
  <button className='bg-white text-black text-xl px-4 py-2 rounded-lg' >Add item</button>
  </div>
  </div>
 

<div className='w-full px-4'>

  {/* Shopping edit  */}
  <div className='flex flex-row justify-between text-2xl w-full mt-6 mb-9'>
    <span className='block font-bold'>Shopping list</span>
    <span class="material-icons block cursor-pointer">edit</span>
  </div>

  {/* Invidual Category heading */}
  <div className='text-lg text-caert'>Fruit and vegetables</div>

  {/* Invidual Items */}
  <div className='w-full flex flex-row flex-nowrap flex-shrink-0 my-3 items-center justify-between'>
  
  <span className='block text-xl font-semibold text-black opacity-80'>Acocado</span>
  
  <span className='flex items-center gap-4 font-extrabold group'>
    <span class="material-icons px-1 py-1 text-white bg-red-600 rounded-md hidden group-hover:block cursor-pointer">delete_outline</span>
    <span class="material-icons text-white bg-shop-orange rounded-full hidden group-hover:block cursor-pointer">remove</span>
    <span className='px-2 py-1 block border-2 border-shop-orange text-shop-orange font-extrabold rounded-xl'>1 pcs</span>
    <span class="material-icons text-white bg-shop-orange rounded-full hidden group-hover:block cursor-pointer">add</span>
  </span>
  </div>


</div >


  </div>
);
};