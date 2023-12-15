import React, { useState } from 'react'

function SearchBar(props) {
  const [formData, setFormData] = useState({
    query: "",
    searchtype: "area",
    placeholder: "Search By Area",
    inputType: "text"
  });
  const onInputChange = (e) => {
    const { name, value } = e.target;
    let input_type = "text";
    let placeholder = "Search By Area";
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === 'searchtype') {
      if (value === 'area'){
      input_type = "text";
    }
      else if(value === 'client') {
        input_type = "text";
        placeholder = "Client Name/Phone/Email";
      } else {
        input_type = "date";
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        inputType: input_type,
        placeholder: placeholder,
        query: "",
      }));
    }
  };




  const handleSearchClick = (e) => {

    e.preventDefault();
    let area = formData.searchtype === 'area' ? formData.query : null;
    let service_date = formData.searchtype === 'date' ? formData.query : null;
    let client_details = formData.searchtype === 'client' ? formData.query : null;
    props.onSearch(area, service_date, client_details);
  }
  const handleClearClick = (e) => {
    setFormData({
      query: "",
      searchtype: "area",
      inputType: "text"
    })
    props.onSearch('', '');

  }

  return (

    <div className='w-full'>


      <form onSubmit={handleSearchClick}>
        <div className="flex flex-col md:flex-row gap-4 max-auto">



          <select
            onChange={onInputChange}
            value={formData.searchtype}
            // defaultValue={'area'}
            name="searchtype"
            className="border  h-10 border-gray-300 bg-gray-50 px-3 rounded-lg  
             text-base
            focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            >
            <option value="area">Area</option>
            <option value="date">Service Date</option>
             <option value="client">Client Name/Phone/Email</option> 
          </select>





          <input
            onChange={onInputChange}
            value={formData.query}
            name="query"
            type={formData.inputType}
            placeholder={formData.placeholder}
            autoComplete="off"
            className="border  h-10 border-gray-300 bg-gray-50 px-3 rounded-lg  text-base 
            focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
             />
         


          <button type="button"
          id="search"
          onClick={handleSearchClick}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500
           hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          <svg className="w-4 h-4 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
            </button>




          <button 
           type="button"
           id="search"
           onClick={handleClearClick}
          className="relative inline-flex items-center justify-center p-0.5 
            overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Clear
  </span>
</button>





        </div>
      </form>

    </div>

  )
}

export default SearchBar