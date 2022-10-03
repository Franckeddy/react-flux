import React, {useEffect, useState} from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi"
import {toast} from "react-toastify";

const ManageCoursePage = props => {
    const [errors, setErrors] = useState({})
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    useEffect( () => {
        const slug = props.match.params.slug;
        if (slug) {
            courseApi.getCourseBySlug(slug).then(_course => setCourse(_course))
        }
    }, [props.match.params.slug])

    function handleChange({ target }) {
        setCourse({
            ...course,
            [target.name]: target.value
        })
    }

    function formIsValid() {
        const _errors = {};

        if (!course.title) _errors.title = "Title required";
        if (!course.authorId) _errors.authorId = "Auth required";
        if (!course.category) _errors.category = "Cat required";

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if (!formIsValid()) return;
        courseApi.saveCourse(course).then( () => {
            props.history.push("/courses")
            toast.success("Course Save !!")
        });
    }

    return(
        <>
            <h2>Manage Course</h2>
            <CourseForm
                errors={errors}
                course={course}
                onChange={handleChange}
                onSubmit={handleSubmit} error={errors}/>
        </>
    )
}

export default ManageCoursePage
