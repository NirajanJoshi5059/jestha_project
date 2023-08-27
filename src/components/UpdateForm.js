import {
    Card,
    Input,
    Select,
    Option,
    Button,
    Typography,
    Radio,
    Checkbox,Textarea,
} from "@material-tailwind/react";
import React from 'react'
import { gender, countries, program } from "../data/forms_data";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/userSlice";

const UpdateForm = () => {

    const nav = useNavigate();
    const {id} =useParams();
    const { users }= useSelector((store)=> store.userInfo);
    const user = users.find((user) => user.id === id);
    const dispatch = useDispatch();

    const userSchema = Yup.object().shape({
        username: Yup.string().min(8).max(20).required('Username required !'),
        email: Yup.string().email().required("Email required !"),
        gender: Yup.string().required('Gender required !'),
        program: Yup.array().min(1).required("Select Program !"),
        country: Yup.string().required("Select your country !"),
        msg: Yup.string().min(10).max(200).required('Message required !'),
        image:'',
    });

    const formik = useFormik({
        initialValues: {
            username: user?.username,
            email: user?.email,
            gender: user?.gender,
            program: user?.program,
            country: user?.country,
            msg: user?.msg,
            image: user?.image,
            id: user?.id,
        },
        onSubmit: (val) => {
            dispatch(updateUser(val));
            nav(-1);
        },

        validationSchema: userSchema
    });

    return (
        <Card color="transparent" shadow={true} className="max-w-lg p-5 mx-auto ">

            <Typography color="gray" className="mt-1 font-normal">
                Enter your details to register.
            </Typography>
            <form onSubmit={formik.handleSubmit} className="mt-2 mb-2 ">
                <div className="mb-4 flex flex-col gap-6">
                    <Input
                        onChange={formik.handleChange} name="username"
                        value={formik.values.username} size="lg" label="Name" />
                    {formik.errors.username && formik.touched.username && <h1 className="text-red-500">{formik.errors.username}</h1>}

                    <Input
                        onChange={formik.handleChange} name="email"
                        value={formik.values.email} size="lg" label="Email" />
                    {formik.errors.email && formik.touched.email &&<h1 className="text-red-500">{formik.errors.email}</h1>}


                    <div>
                        <Typography color="gray" className="mt-1 font-normal">
                            Select Your Gender.
                        </Typography>
                        <div className="flex gap-10">
                            {gender.map((gen, i) => {
                                return <Radio label={gen.label} color={gen.color} value={gen.value}
                                    onChange={formik.handleChange}
                                    checked={gen.value === formik.values.gender ? true :false}
                                    name="gender" key={i} />;
                            })};
                        </div>
                        {formik.errors.gender && formik.touched.gender &&<h1 className="text-red-500">{formik.errors.gender}</h1>}
                    </div>

                    <div>
                        <Typography color="gray" className="mt-1 font-normal">
                            Select Programming Language.
                        </Typography>
                        <div className="flex w-max gap-4">
                            {program.map((check, i) => {
                                return <Checkbox color={check.color} label={check.label}
                                checked={formik.values.program.includes(check.value) ? true : false}
                                    onChange={formik.handleChange}
                                    name="program" value={check.value} key={i} />
                            })};
                        </div>
                        {formik.errors.program && formik.touched.program &&<h1 className="text-red-500">{formik.errors.program}</h1>}
                    </div>

                    <div>
                        <Typography color="gray" className="mt-1 font-normal">
                            Select Your Country.
                        </Typography>
                        <div className="flex mt-3">
                            <Select label="Select Country" name="country"
                            value={formik.values.country}
                                onChange={(e) => formik.setFieldValue('country', e)} >
                                {countries.map((country, i) => {
                                    return <Option value={country.value} key={i}>{country.label}</Option>
                                })}
                            </Select>
                        </div>
                        {formik.errors.country && formik.touched.country && <h1 className="text-red-500">{formik.errors.country}</h1>}
                    </div>

                    <div className="">
                        <Textarea
                            onChange={formik.handleChange} name="msg"
                            value={formik.values.msg}
                            label="Message" />
                            {formik.errors.msg && formik.touched.msg && <h1 className="text-red-500">{formik.errors.msg}</h1>}
                    </div>

                    <div>
                        <Typography color="gray" className="mt-1 font-normal">
                            Select Image
                        </Typography>
                        <Input
                            onChange={(e) => {
                                const file = e.target.files[0];
                                const reader = new FileReader();
                                reader.readAsDataURL(file);
                                reader.addEventListener('load', (e) => {
                                    formik.setFieldValue('image', e.target.result);
                                })
                            }}
                            name="image" type="file" />
                        {formik.values.image && <img className="my-2" src={formik.values.image} alt="Loading ..." />}
                    </div>


                </div>

                <Button type='submit' className="mt-6" fullWidth>
                    Submit
                </Button>
            </form>
        </Card>
    );
}


export default UpdateForm
