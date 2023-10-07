import { z } from "zod"
import {useForm, zodResolver} from "@mantine/form"
import {TextInput, Button, PasswordInput} from "@mantine/core"
const SignUp = () => {

    const schema =z.object({
        username: z.string().min(3, {message:"Username should atleast be 3 letters"}),
        email: z.string().email({message:"Invalid email"}),
        password: z.string().min(6, {message:"Password should atleast be 8 letters"}),
        confirmPassword: z.string().min(6, {message:"Password should atleast be 8 letters"}),
    }).refine(data => data.password === data.confirmPassword, {message: "Password and Confirm password should match",path:["confirmPassword"] })

    const form = useForm({
        validate: zodResolver(schema),

        initialValues: {
            username: '',
            confirmPassword: '',
            password: '',
            email: '',
        },
    })

    const handleSubmit = (user) =>{
        let newUser = {
            username: user.username,
            email: user.email,
            password: user.password
        }

        console.log(newUser)
    }

  return (
    <div>
        <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
            <h2>Sign up</h2>
            <h2>Username</h2>
            <div style={{width:"450px", margin:"50px auto"}} >
                <TextInput width={500} 
                    label={"Username"}
                    variant='filled'
                    mb="15px"
                   {...form.getInputProps("username")}
                />

                <TextInput width={500} 
                    label={"Email"}
                    variant='filled'
                    mb="15px"
                    {...form.getInputProps('email')}
                />

                <PasswordInput width={500} 
                    label={"Password"}
                    variant='filled'
                    mb="15px"
                    {...form.getInputProps('password')}
                />

                <PasswordInput width={500} 
                    label={"Confirm password"}
                    variant='filled'
                    mb="15px"
                    {...form.getInputProps('confirmPassword')}
                />

                <Button type="submit" fullWidth>Sign up</Button>

            </div>
        </form>
    </div>
  )
}

export default SignUp