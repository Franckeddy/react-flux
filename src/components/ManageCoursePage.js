import React, {useEffect, useState} from "react";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";
import * as courseActions from '../actions/courseActions';

const ManageCoursePage = props => {
    const [errors, setErrors] = useState({})
    const [courses, setCourses] = useState(courseStore.getCourses())
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    useEffect( () => {
        courseStore.addChangeListener(onChange)
        const slug = props.match.params.slug;
        if (courses.length === 0) {
            courseActions.loadCourses();
        } else if (slug) {
            setCourse(courseStore.getCourseBySlug(slug))
        }
        return () => courseStore.removeChangeListener(onChange)
    }, [courses.length, props.match.params.slug])

    function onChange() {
        setCourses(courseStore.getCourses());
    }

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
        courseActions.saveCourse(course).then( () => {
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
