import React from 'react'
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import {AddSchema} from "./schema/index.js"
import { useNavigate } from 'react-router';
import "./index.scss";
import {Helmet} from "react-helmet";

const AddPage = () => {
    const navigate =useNavigate()
  return (
    <div id='container'>
          <Helmet>
          <meta charSet="utf-8" />
          <title>Add brand</title>
          <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
         <Formik
       initialValues={{
        name: '',
        major: '',
        positon: '',
        price: '',
        imgUrl: '',
       }}
       validationSchema={AddSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
         axios.post(`http://localhost:8080/brands`, values)
         navigate("/")
       }}
     >
       {({ errors, touched }) => (
        <div className='formikBox'>
          <h1>Add brand</h1>
         <Form>
           <Field name="name" placeholder="Your name" className="inputBox"/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <br/>
           <Field name="major" placeholder="Your major" className="inputBox"/>
           {errors.major && touched.major ? (
             <div>{errors.major}</div>
           ) : null}
           <br/>
           <Field name="positon" placeholder="Your position" className="inputBox"/>
           {errors.positon && touched.positon ? <div>{errors.positon}</div> : null}
           <br/>
           <Field name="price" placeholder="Your salary" className="inputBox"/>
           {errors.price && touched.price ? <div>{errors.price}</div> : null}
           <br/>
           <Field name="imgUrl" placeholder="Your image" className="inputBox"/>
           {errors.imgUrl && touched.imgUrl ? <div>{errors.imgUrl}</div> : null}
           <br/>
           <button type="submit">Submit</button>
         </Form>
        </div>
       )}
     </Formik>
    </div>
  )
}

export default AddPage