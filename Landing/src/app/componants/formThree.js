'use client'
import React,{useState} from "react"
import Select from 'react-select';
import { FiSearch, FiHome, LuCircleDollarSign } from '../assets/icons/vander'

export default function FormThree(){
    let [activeTabIndex, setactiveTabIndex] = useState(0);

    let handleTabClick = (tabIndex) => {
        setactiveTabIndex(tabIndex);
    };
    let Houses = [
        { value: 'AF', label: 'Apartment' },
        { value: 'AZ', label: ' Offices' },
        { value: 'BS', label: 'Townhome' },
      ]
      let minPrice = [
        { value: '1', label: '500' },
        { value: '2', label: '1000' },
        { value: '3', label: '2000' },
        { value: '4', label: '3000' },
        { value: '5', label: '4000' },
        { value: '5', label: '5000' },
        { value: '5', label: '6000' },
      ]
      let maxPrice = [
        { value: '1', label: '500' },
        { value: '2', label: '1000' },
        { value: '3', label: '2000' },
        { value: '4', label: '3000' },
        { value: '5', label: '4000' },
        { value: '5', label: '5000' },
        { value: '5', label: '6000' },
      ]
    return(
        <div className="grid grid-cols-1">
        <ul className="inline-block sm:w-fit w-full flex-wrap justify-center text-center p-4 bg-white dark:bg-slate-900 rounded-t-xl border-b dark:border-gray-800" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
            <li role="presentation" className="inline-block">
                <button onClick={() => handleTabClick(0)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 0 ? 'text-white bg-green-600' : 'hover:text-green-600'}`} id="buy-home-tab" data-tabs-target="#buy-home" type="button" role="tab" aria-controls="buy-home" aria-selected="true">Buy</button>
            </li>
            <li role="presentation" className="inline-block">
                <button onClick={() => handleTabClick(1)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 1 ? 'text-white bg-green-600' : 'hover:text-green-600'}`} id="sell-home-tab" data-tabs-target="#sell-home" type="button" role="tab" aria-controls="sell-home" aria-selected="false">Sell</button>
            </li>
            <li role="presentation" className="inline-block">
                <button onClick={() => handleTabClick(2)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 2 ? 'text-white bg-green-600' : 'hover:text-green-600'}`} id="rent-home-tab" data-tabs-target="#rent-home" type="button" role="tab" aria-controls="rent-home" aria-selected="false">Rent</button>
            </li>
        </ul>

        <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900 rounded-ss-none rounded-se-none md:rounded-se-xl rounded-xl shadow-md dark:shadow-gray-700">
            {activeTabIndex === 0 && (
                <div id="buy-home" role="tabpanel" aria-labelledby="buy-home-tab">
                    <form action="#">
                        <div className="registration-form text-dark text-start">
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                <div>
                                    <label className="form-label text-slate-900 dark:text-white font-medium">Search : <span className="text-red-600">*</span></label>
                                    <div className="filter-search-form relative filter-border mt-2 ">
                                        <FiSearch  className="icons" width={18}/>
                                        <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">Select Categories:</label>                                                        
                                    <div className="filter-search-form relative filter-border mt-2">
                                        <FiHome  className="icons" width={18}/>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={Houses} />

                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Min Price :</label>                                                        
                                    <div className="filter-search-form relative filter-border mt-2">
                                        <LuCircleDollarSign  className="icons" width={18}/>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={minPrice} />

                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Max Price :</label>                                                        
                                    <div className="filter-search-form relative mt-2">
                                        <LuCircleDollarSign  className="icons" width={18}/>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={maxPrice} />

                                    </div>
                                </div>

                                <div className="lg:mt-6">
                                    <input type="submit" id="search-buy" name="search" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded" value="Search" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {activeTabIndex === 1 && (
                <div id="sell-home" role="tabpanel" aria-labelledby="sell-home-tab">
                    <form action="#">
                    <div className="registration-form text-dark text-start">
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                <div>
                                    <label className="form-label text-slate-900 dark:text-white font-medium">Search : <span className="text-red-600">*</span></label>
                                    <div className="filter-search-form relative filter-border mt-2">
                                        
                                        <FiSearch  className="icons" width={18}/>
                                        <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">Select Categories:</label>                                                        
                                    <div className="filter-search-form relative filter-border mt-2">
                                        <FiHome  className="icons" width={18}/>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={Houses} />

                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Min Price :</label>                                                        
                                    <div className="filter-search-form relative filter-border mt-2">
                                        <LuCircleDollarSign  className="icons" width={18}/>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={minPrice} />

                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Max Price :</label>                                                        
                                    <div className="filter-search-form relative mt-2">
                                        <LuCircleDollarSign  className="icons" width={18}/>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={maxPrice} />

                                    </div>
                                </div>

                                <div className="lg:mt-6">
                                    <input type="submit" id="search-buy" name="search" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded" value="Search" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {activeTabIndex === 2 && (
                <div id="rent-home" role="tabpanel" aria-labelledby="rent-home-tab">
                    <form action="#">
                    <div className="registration-form text-dark text-start">
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                <div>
                                    <label className="form-label text-slate-900 dark:text-white font-medium">Search : <span className="text-red-600">*</span></label>
                                    <div className="filter-search-form relative filter-border mt-2">
                                        <FiSearch  className="icons" width={18}/>
                                        <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">Select Categories:</label>                                                        
                                    <div className="filter-search-form relative filter-border mt-2">
                                        <FiHome  className="icons" width={18}/>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={Houses} />

                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Min Price :</label>                                                        
                                    <div className="filter-search-form relative filter-border mt-2">
                                         <LuCircleDollarSign  className="icons" width={18}/>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={minPrice} />

                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Max Price :</label>                                                        
                                    <div className="filter-search-form relative mt-2">
                                         <LuCircleDollarSign  className="icons" width={18}/>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={maxPrice} />

                                    </div>
                                </div>

                                <div className="lg:mt-6">
                                    <input type="submit" id="search-buy" name="search" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded" value="Search" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    </div>
    )
}