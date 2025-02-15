import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CardSection from '../Components/CardSection';
import { Helmet } from 'react-helmet-async';
import BlogSection from '../Components/BlogSection';
import Review from '../Components/Review';

const HomeLayout = () => {
    return (

        <div className='font-poppins'>
            <Helmet>
                <title> Career Council | Home</title></Helmet>
            <navbar>
            <Navbar></Navbar>   
            </navbar>
            <header>
            <Header className='w-11/12 mx-auto'>
            </Header>
            </header>
            <main>
                <CardSection></CardSection>
                <BlogSection></BlogSection>
                <Review></Review>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;