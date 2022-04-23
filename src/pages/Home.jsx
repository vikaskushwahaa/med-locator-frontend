import React, { Component } from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Result from '../pages/Result'
import Products from '../components/Products'
import Slider from '../components/Slider'
import SearchBar from '../components/searchBar'
import { Route, Link, Routes } from 'react-router-dom'


class Home extends Component {


    render() {
        return (
            <div>
                {/* <Announcement /> */}
                <Navbar />
                <Newsletter />
                {/* <Products /> */}
                <Slider />
                <Categories />
                <Footer />
                

                
                
                
            </div>
        );
    }
}

export default Home