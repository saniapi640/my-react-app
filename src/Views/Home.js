import React, { useState, useEffect } from 'react'
import Loader from '../Components/Loader';
import PropertyCard from '../Components/PropertyCard';
import SearchBar from '../Components/SearchBar';
import MultiCheckBoxFilter from '../Components/MultiCheckBoxFilter';
import TableHead from '../Components/TableHead';
import axios from '../api/Axios';
import dayjs from "dayjs"
const BASE_URL = '/properties';
function Home() {
    const [selectedAreas, setSelectedAreas] = useState([]);
    const [selectedPriorities, setSelectedPriorities] = useState([]);
    const [selectedBehaviours, setSelectedBehaviours] = useState([]);
    const [selectedDurations, setSelectedDurations] = useState([]);
    const [selectedDates, setSelectedDates] = useState([]);
    const [sortField, setSortField] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const tableColumns = [
        { label: "Date", accessor: "service_date", sortable: true, sortable_accessor: "service_date" },
        { label: "Client", accessor: "address", sortable: true , sortable_accessor: "address"},
        { label: "Priority", accessor: "priority", sortable: true, sortable_accessor: "score" },
        { label: "Duration", accessor: "service_duration", sortable: true , sortable_accessor: "service_duration"},
        { label: "Behaviour", accessor: "behaviour", sortable: true , sortable_accessor: "behaviour"},
        { label: "Price", accessor: "price", sortable: true, sortable_accessor: "price" },
        { label: "Action", accessor: "action", sortable: false, sortable_accessor: "action" },
    ];


    const [properties, setProperties] = useState(null);
    const [filteredProperties, setFilteredProperties] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSwitch = (itemVal, itemType) => {
        if (itemType === 'duration') {
            switch (itemVal) {
                case 1:
                    return itemVal + ' hour';
                case 4:
                    return 'half day';
                case 8:
                    return 'full day';
                default:
                    return itemVal + ' hours';
            }
        }

    }

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


                    const datas = eval(response.data);
                    const filter_datas = datas.map((item) => {
                        return {
                            ...item,
                            service_duration: handleSwitch(item.service_duration, 'duration'),
                            service_date: dayjs(item.service_date).format("MMM DD, YYYY")
                        };

                    });;




                    setProperties(filter_datas);
                    setFilteredProperties(filter_datas);
                    setLoading(false);
                    setError(false);
                })
                .catch((error) => {
                    console.log(error);
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
        if (newproperties) {
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
                newproperties = newproperties.filter((item) => (selectedDates.includes(item.service_date)));
            }

            if (sortField) {
                newproperties = [...newproperties].sort((a, b) => {
                 if (a[sortField] === null) return 1;
                 if (b[sortField] === null) return -1;
                 if (a[sortField] === null && b[sortField] === null) return 0;
                 return (
                  a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                   numeric: true,
                  }) * (sortOrder === "asc" ? 1 : -1)
                 );
                });
            }

         
           
            

            setFilteredProperties(newproperties);
        }

    }, [selectedAreas, selectedPriorities, selectedBehaviours, selectedDurations, selectedDates, properties, sortField, sortOrder])


    const handleSorting = (sortField, sortOrder) => {
        setSortField(sortField)
        setSortOrder(sortOrder)
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
                    <div className="lg:w-3/12 md:w-4/12 w-full bg-white
                      border p-4 rounded-lg  border-gray-200 shadow-lg">

                        <div>
                            <form>

                                <MultiCheckBoxFilter items={
                                    properties
                                        .sort((a, b) =>
                                            a.service_date > b.service_date ? 1 : -1,
                                        )
                                        .map((item) => item.service_date)
                                        .filter((value, index, self) => self.indexOf(value) === index)
                                }
                                    allitems={properties}
                                    selected={selectedDates}
                                    showPriority = "1"
                                    title="Recommended Dates"
                                    slug="service_date"
                                    onFilter={(selectedDates) => {
                                        setSelectedDates(selectedDates);
                                    }}
                                ></MultiCheckBoxFilter>


                                <MultiCheckBoxFilter items={
                                    properties
                                    .sort((a, b) =>
                                    a.area > b.area ? 1 : -1,
                                )
                                        .map((item) => item.area)
                                        .filter((value, index, self) => self.indexOf(value) === index)
                                }
                                allitems={
                                    properties.reduce((acc, cur) => {
                                        const existingItem = acc.find(item => cur.property_id === item.property_id);
                                        if(existingItem) {
                                           existingItem.count++;
                                        }
                                        else {
                                           acc.push({...cur, count: 1});    
                                        }
                                        return acc;
                                     }, [])
                                }



                                slug="area"
                                showPriority = "1"
                                    selected={selectedAreas}
                                    title="Area"
                                    onFilter={(selectedAreas) => {
                                        setSelectedAreas(selectedAreas);
                                    }}
                                ></MultiCheckBoxFilter>

                                <MultiCheckBoxFilter items={
                                    properties
                                    .sort((a, b) =>
                                    a.priority > b.priority ? 1 : -1,
                                )
                                        .map((item) => item.priority)
                                        .filter((value, index, self) => self.indexOf(value) === index)
                                }
                                allitems={properties}
                                showPriority = "0"
                                slug="priority"
                                    selected={selectedPriorities}
                                    title="Priority"
                                    onFilter={(selectedPriorities) => {
                                        setSelectedPriorities(selectedPriorities);
                                    }}
                                ></MultiCheckBoxFilter>

                                <MultiCheckBoxFilter items={
                                    properties
                                    .sort((a, b) =>
                                    a.behaviour > b.behaviour ? 1 : -1,
                                )
                                        .map((item) => item.behaviour)
                                        .filter((value, index, self) => self.indexOf(value) === index)
                                }
                                allitems={properties}
                                showPriority = "0"
                                slug="behaviour"
                                    selected={selectedBehaviours}
                                    title="Behaviour"
                                    onFilter={(selectedBehaviours) => {
                                        setSelectedBehaviours(selectedBehaviours);
                                    }}
                                ></MultiCheckBoxFilter>


                                <MultiCheckBoxFilter items={
                                    properties
                                    .sort((a, b) =>
                                    a.service_duration > b.service_duration ? 1 : -1,
                                )
                                .map((item) => item.service_duration)
                                        .filter((value, index, self) => self.indexOf(value) === index)
                                }
                                allitems={properties}
                                showPriority = "0"
                                slug="service_duration"
                                    selected={selectedDurations}
                                    title="Duration"
                                    onFilter={(selectedDurations) => {
                                        setSelectedDurations(selectedDurations);
                                    }}
                                ></MultiCheckBoxFilter>





                            </form>
                        </div>

                    </div>

                    <div className="lg:w-9/12 md:w-8/12 w-full  bg-white
border p-4 rounded-lg  border-gray-200 shadow-lg">

                        <div className="table  min-w-full">
                            <TableHead columns={tableColumns} onSorting={handleSorting} />


                            {
                                (filteredProperties) &&
                               filteredProperties.reduce((acc, cur) => {
                                    const existingItem = acc.find(item => cur.property_id === item.property_id);
                                    if(existingItem) {
                                       existingItem.count++;
                                    }
                                    else {
                                       acc.push({...cur, count: 1});    
                                    }
                                    return acc;
                                 }, [])
                                 
                                .map((property, key) =>
                                    <PropertyCard
                                        property={property} key={key} />
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