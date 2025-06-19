import { useForm } from "react-hook-form"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useNavigate } from 'react-router'
import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
// import { toLogIn } from "../features/user/userSlice"
// import { createUser, getUser } from "../database/CRUD"
import { useLazyGetUserQuery, useCreateUserMutation } from "../api"
import { toLogIn } from "../../user/userSlice"

// import './../App.css'

const RegisterForm = () => {

    const [getUser] = useLazyGetUserQuery()
    const [createUser] = useCreateUserMutation();
    const [message, setMessage] = useState('')


    const navigate = useNavigate();
    const { register, handleSubmit, watch } = useForm()

    const dispatch = useDispatch()

    const { email, password, name } = watch();

    const onSubmit = useCallback(async () => {


        try {
            const user = await getUser(email).unwrap()
            if (user === undefined) {
                const user = await createUser({ name: name, email: email, password: password }).unwrap()
                dispatch(toLogIn({ login: user.email, id: user.id, name: user.name }))
                navigate('/');
            }
            else {
                console.log('error creating user', user)
            }
        }
        catch (err) {
            console.log(err)
        }


    }, [email, password, name, dispatch, navigate]
    )


    return (
        <div className="reg-form"
        >
            <Typography className="reg-form-title">
                Регистрация
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid>
                    <Grid item >
                        <Typography>
                            Name
                        </Typography>
                        <TextField {
                            ...register('name', {
                                className: "reg-input",

                            })}
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item >
                        <Typography>
                            Email
                        </Typography>
                        <TextField {
                            ...register('email', {
                                required: 'Email is required',
                                className: "reg-input",
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Invalid email address',
                                }
                            })}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item >
                        <Typography>
                            Password
                        </Typography>
                        <TextField {
                            ...register('password',

                                {
                                    required: true, minLenght: 4,
                                    className: "reg-input"
                                })
                        }
                            type="password"
                        />
                    </Grid>
                    <Grid item >


                        <Button
                            type="submit"
                            className="reg-button"
                        >Зарегистрироваться
                        </Button>

                    </Grid>
                    <Grid item>
                    </Grid>
                </Grid>

            </form>
        </div>
    )
}

export default RegisterForm;
