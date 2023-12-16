import React, { useState } from 'react'

function TableHead({ columns, onSorting }){

  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    onSorting(accessor, sortOrder);
  };


  return (
    <div className="table-row  min-w-full">
         {columns.map(({ label, accessor, sortable }) => {





    return <div  key={accessor} className="relative table-cell h-12 overflow-hidden align-top whitespace-nowrap">
        <div className="w-full h-full px-3 py-1 text-left text-xs leading-4 font-medium  uppercase tracking-wider flex items-center focus:outline-none lg:border-b 
        lg:border-secondary-200 cursor-pointer" onClick={sortable ? () => handleSortingChange(accessor) : null}>
        {label}




{
  sortable && sortField === accessor && order === "desc" &&
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
  </svg> 
         }
   {
   sortable && sortField === accessor && order === "asc" &&
   
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
   <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
 </svg>
 
  
}



        </div>
    </div>
 })}
</div>




     
    );
}
export default TableHead;