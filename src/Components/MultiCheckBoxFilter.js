import React, { useState } from 'react'
function MultiCheckBoxFilter(props) {

  const [showToggle, setShowToggle] = useState(true)
  

  return (
    <div>
      {(props.items)  && props.items.length > 1 &&
        <div className="border-b border-gray-200 py-6">
          <h3 className="-my-3 flow-root">
            <button type="button"
            onClick={() => setShowToggle(!showToggle)}
             className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"  >
              <span className="font-medium text-gray-900">{props.title}</span>
              <span className="ml-6 flex items-center">
              { showToggle ?

             
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
              <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd"></path>
            </svg>
            :
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
          </svg>
              
              }
              </span>
            </button>
          </h3>
          {
            showToggle &&
          <div className="pt-6">
            <div className="space-y-4">

              {
                (props.items) &&
                props.items.map((option, key) =>
                  <div className="flex items-center" key={key}>
                    <input 
                    id={option}
                      value={option}
                      type="checkbox"
                      onChange={(event) => {
                        const isChecked = event.target.checked;

                        if (isChecked) {
                          // add to selected array
                          const selected = [...props.selected, option];

                          props.onFilter(selected, props.fieldName);
                        } else {
                          // remove from selected array
                          const selected = props.selected.filter((selectedOption) => {
                            return selectedOption !== option;
                          });

                          props.onFilter(selected, props.fieldName);
                        }
                      }}



                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <label className="ml-3 text-sm text-gray-600 capitalize" htmlFor={option}>
                      {option}
                    </label>
                  </div>
                )
              }
            </div>
          </div>
      }
        </div>
      }
    </div>


  )
}

export default MultiCheckBoxFilter