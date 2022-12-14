import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import {Redirect, Route, Switch} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <div className="container-fluid">
            <ToastContainer autoclose={300} hideProgressbar/>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route path="/course" component={ManageCoursePage} />
                <Redirect from="/about-page" to="about" />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    )
}

export default App;
