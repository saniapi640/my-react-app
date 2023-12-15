import React, { useState, useEffect } from 'react'
import Loader from '../Components/Loader';
import PropertyCard from '../Components/PropertyCard';
import SearchBar from '../Components/SearchBar';
import MultiCheckBoxFilter from '../Components/MultiCheckBoxFilter';
import TableHead from '../Components/TableHead';
import axios from '../api/Axios';
const BASE_URL = '/properties';
function Home() {
    const [selectedAreas, setSelectedAreas] = useState([]);
    const [selectedPriorities, setSelectedPriorities] = useState([]);
    const [selectedBehaviours, setSelectedBehaviours] = useState([]);
    const [selectedDurations, setSelectedDurations] = useState([]);
    const [selectedDates, setSelectedDates] = useState([]);

    const tableColumns = [
        { label: "Date", accessor: "service_date", sortable: true, sortbyOrder: "desc" },
        { label: "Client", accessor: "address", sortable: true },
        { label: "Priority", accessor: "priority", sortable: true },
        { label: "Duration", accessor: "service_duration", sortable: true },
        { label: "Behaviour", accessor: "behaviour", sortable: true },
        { label: "Action", accessor: "action", sortable: false },
       ];
      

    const [properties, setProperties] = useState(null);
    const [filteredProperties, setFilteredProperties] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const getPropertyListingData = async (area, service_date, client_details) => {
        try {
            setProperties(null);
            setFilteredProperties(null);
            setLoading(true);
            setError(false);
            await axios.get(BASE_URL, {
                params: {
                    area: area,
                    service_date: service_date,
                    client_details: client_details
                }
            })
                .then(response => {
                    setProperties(response.data);
                    setFilteredProperties(response.data);
                    setLoading(false);
                    setError(false);
                })
                .catch(() => {
                    setProperties(null);
                    setFilteredProperties(null);
                    setLoading(false);
                    setError(true);
                })
        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        let newproperties = properties;
       if(newproperties){
        setFilteredProperties(newproperties);
        if (selectedAreas.length !== 0) {
            newproperties = newproperties.filter((item) => (selectedAreas.includes(item.area)));
           }
        

        if (selectedPriorities.length !== 0) {
            newproperties = newproperties.filter((item) => (selectedPriorities.includes(item.priority)));
        }
        if (selectedBehaviours.length !== 0) {
            newproperties = newproperties.filter((item) => (selectedBehaviours.includes(item.behaviour)));
        }
        if (selectedDurations.length !== 0) {
            newproperties = newproperties.filter((item) => (selectedDurations.includes(item.service_duration)));
        }
        if (selectedDates.length !== 0) {
            console.log(selectedDates);
            newproperties = newproperties.filter((item) => (selectedDates.includes(item.service_date)));
        }
        setFilteredProperties(newproperties);
    }

    }, [selectedAreas, selectedPriorities, selectedBehaviours, selectedDurations, selectedDates, properties])


    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
          const sorted = [...filteredProperties].sort((a, b) => {
            if (a[sortField] === null) return 1;
            if (b[sortField] === null) return -1;
            if (a[sortField] === null && b[sortField] === null) return 0;
            return (
              a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                numeric: true,
              }) * (sortOrder === "asc" ? 1 : -1)
            );
          });
          setFilteredProperties(sorted);
        }
      };



    return (

        <div>
            <div className='mt-6 mb-8 text-center'>
                <div className="md:inline-block border p-4 rounded-lg bg-white border-gray-200 shadow-lg ">
                    <SearchBar onSearch={getPropertyListingData}></SearchBar>
                    {(error) &&
                        <div className="w-full text-lg font-bold text-red-600 py-4 mt-3">Error!. Something Wrong</div>
                    }
                    {(filteredProperties) && filteredProperties.length === 0 &&
                        <div className="w-full text-lg font-bold text-purple-700 py-4 mt-3" >
                            No Details Found!</div>}


                </div>
            </div>


            {(loading) && <div className='w-full' ><Loader /></div>}






            {(properties) && properties.length !== 0 &&
                <div className="w-full flex flex-col sm:flex-row gap-4">
                    <div className="lg:w-2/12 md:w-4/12 w-full bg-white
                      border p-4 rounded-lg  border-gray-200 shadow-lg">

                        <div>
                            <form>

                            <MultiCheckBoxFilter items={
                                    properties
                                        .map((item) => item.service_date)
                                        .filter((value, index, self) => self.indexOf(value) === index)
                                }
                                    selected={selectedDates}
                                    title="Recommended Dates"
                                    onFilter={(selectedDates) => {
                                        setSelectedDates(selectedDates);
                                    }}
                                ></MultiCheckBoxFilter>


                                <MultiCheckBoxFilter items={
                                    properties
                                        .map((item) => item.area)
                                        .filter((value, index, self) => self.indexOf(value) === index)
                                }
                                    selected={selectedAreas}
                                    title="Area"
                                    onFilter={(selectedAreas) => {
                                        setSelectedAreas(selectedAreas);
                                    }}
                                ></MultiCheckBoxFilter>

                                <MultiCheckBoxFilter items={
                                    properties
                                        .map((item) => item.priority)
                                        .filter((value, index, self) => self.indexOf(value) === index)
                                }
                                    selected={selectedPriorities}
                                    title="Priority"
                                    onFilter={(selectedPriorities) => {
                                        setSelectedPriorities(selectedPriorities);
                                    }}
                                ></MultiCheckBoxFilter>

<MultiCheckBoxFilter items={
                                    properties
                                        .map((item) => item.behaviour)
                                        .filter((value, index, self) => self.indexOf(value) === index)
                                }
                                    selected={selectedBehaviours}
                                    title="Behaviour"
                                    onFilter={(selectedBehaviours) => {
                                        setSelectedBehaviours(selectedBehaviours);
                                    }}
                                ></MultiCheckBoxFilter>


<MultiCheckBoxFilter items={
                                    properties
                                        .map((item) => item.service_duration)
                                        .filter((value, index, self) => self.indexOf(value) === index)
                                }
                                    selected={selectedDurations}
                                    title="Duration"
                                    onFilter={(selectedDurations) => {
                                        setSelectedDurations(selectedDurations);
                                    }}
                                ></MultiCheckBoxFilter>





                            </form>
                        </div>

                    </div>

                    <div className="lg:w-10/12 md:w-8/12 w-full  bg-white
border p-4 rounded-lg  border-gray-200 shadow-lg">

                        <div className="table  min-w-full">
                        <TableHead columns={tableColumns} onSorting={handleSorting} />
                           

                            {
                                (filteredProperties) &&
                                filteredProperties.map((property, key) =>
                                    <PropertyCard
                                        property={property} key={property.id} />
                                )
                            }

                        </div>

                    </div>

                </div>
            }














        </div>
    )
}

export default Home