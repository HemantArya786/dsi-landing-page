import React from "react";
import NavBar from "./NavBarPage";
import ContentPage from "./ContentPage";
import Footer from "./FooterPage";

function Home () {

    return(
        <main>
            <section>
                <NavBar/>

            </section>
            <section>
                <ContentPage/>

            </section>
            <section>
                <Footer/>
            </section>


        </main>


    )
}
export default  Home;