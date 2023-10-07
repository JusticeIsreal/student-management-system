import { Button, Image, Radio, Select, TextInput } from "@mantine/core";
import TopBar from "../../components/admin/TopBar";
import { GiClick } from "react-icons/gi";
import { HiPlus } from "react-icons/hi";

import AddressForm from "../../components/admin/AddressForm";
import { useState } from "react";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

const AddStudents = () => {

    const addStudentDetailsSchema = z.object({
        firstName: z
            .string()
            .min(2, { message: "First name should be more than 2 letters" }),
        lastName: z
            .string()
            .min(2, { message: "Last name should be more than 2 letters" }),
        department: z
            .string()
            .min(5, { message: "Department should be more than 2 letters" }),
        level: z.string().min(1, { message: "Level is required" }),
        gender: z
            .string()
            .min(4, { message: "First name should be more than 4 letters" }),
        addresses: z.array(
            z.object({
                city: z.string().min(2, { message: "City is required" }),
                state: z.string().min(2, { message: "State is required" }),
                street: z.string().min(2, { message: "Street is required" }),
                addressType: z.string().min(2, { message: "Address type is required" }),
            })
        ),
    });

    const studentDetailsForm = useForm({
        validate: zodResolver(addStudentDetailsSchema),
        initialValues: {
            firstName: "",
            lastName: "",
            department: "",
            level: 0,
            gender: "",
            addresses: [
                {
                    city: "",
                    state: "",
                    street: "",
                    addressType: "",
                },
            ],
        },
    });

    const handleSubmit = ({
        firstName,
        lastName,
        department,
        level,
        gender,
        addresses,
    }) => {
        let newStudent = {
            firstName,
            lastName,
            department,
            level:parseInt(level),
            gender,
            addresses,
        };

        console.log(newStudent);
    };

    return (
        <div>
            <TopBar pageName={"Add student"} />
            <div className="app_container">
                <form
                    className="add_student_form"
                    onSubmit={studentDetailsForm.onSubmit((values) =>
                        handleSubmit(values)
                    )}
                >
                    <div className="input_field_container">
                        <div className="input_fields">
                            <div className="grid_2">
                                <TextInput
                                    size={"md"}
                                    label={"First name"}
                                    placeholder={"Enter first name"}
                                    {...studentDetailsForm.getInputProps("firstName")}
                                />
                                <TextInput
                                    size={"md"}
                                    label={"Last name"}
                                    placeholder={"Enter last name"}
                                    {...studentDetailsForm.getInputProps("lastName")}
                                />
                            </div>
                            <div className="grid_2">
                                <Select
                                    size={"md"}
                                    label={"Department"}
                                    placeholder={"Select department"}
                                    data={["COMPUTER SCIENCE"]}
                                    {...studentDetailsForm.getInputProps("department")}
                                />
                                <Select
                                    size={"md"}
                                    label={"Level"}
                                    placeholder={"Select level"}
                                    data={["100", "200", "300", "400", "500"]}
                                    {...studentDetailsForm.getInputProps("level")}
                                />
                            </div>

                            <div>
                                <Radio.Group
                                    name="gender"
                                    label="Select gender"
                                    {...studentDetailsForm.getInputProps("gender")}
                                >
                                    <Radio value="male" label="male" />
                                    <Radio value="female" label="female" />
                                </Radio.Group>
                            </div>
                        </div>

                        {studentDetailsForm.values.addresses.map((address, i) => (
                            <AddressForm
                                key={i}
                                index={i}
                                studentDetailsForm={studentDetailsForm}
                            />
                        ))}

                        <div className="add_more_address">
                            <Button
                                onClick={() => {
                                    studentDetailsForm.insertListItem("addresses", {
                                        city: "",
                                        state: "",
                                        street: "",
                                        addressType: "",
                                    });
                                }}
                                radius={"50px"}
                            >
                                Add address
                                <HiPlus />
                            </Button>
                        </div>
                        <Button type="submit" size={"md"}>
                            Submit
                        </Button>
                    </div>
                    <div className="image_upload">
                        <Image radius={"md"} />
                        <div className="image_upload_overlay">
                            <GiClick />
                            <p>Click to add image / drag and drop</p>
                            <input type="file" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStudents;
