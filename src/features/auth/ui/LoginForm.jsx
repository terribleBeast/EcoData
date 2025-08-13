import { useForm } from "react-hook-form"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useNavigate } from 'react-router'
import { useCallback} from "react"
import { useDispatch } from "react-redux"

// import { toLogIn } from "../features/user/userSlice"
import { useLazyGetUserQuery } from "../api"
import { toLogIn } from "../../user/userSlice"

// import './../App.css'

const LoginForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const [message, setMessage] = useState('')


  const {
    register,
    handleSubmit,
    // formState: { errors },
    watch
  } = useForm();

  const { email, password } = watch()

  // const validateEmail = (value) => {
  //   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   if (!emailRegex.test(value)) {
  //     return 'Invalid email address';
  //   }
  //   return true;
  // };
  const [getUser,] = useLazyGetUserQuery()

  const onSubmit = useCallback(async () => {


    // TODO: error proccesing 

    try {

      const user = await getUser(email).unwrap()
      if (user !== undefined && user.password === password) {
        dispatch(toLogIn({
          login: user.email,
          id: user.id,
          name: user.name
        }))
        navigate('/')
      }
    }
    catch (err) {
      console.log(err)
    }



  }, [email, password, dispatch, getUser, navigate])


  return (
    <div className="login-form"
    >
      <Typography className="login-form-title">
        Вход
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid >
          <Grid  item>
            <Typography>
              Email
            </Typography>
            <TextField {
              ...register('email', {
                required: 'Email is required',
                className: "login-input",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                }
              })}
              variant="outlined"
            />
          </Grid>
          <Grid  item>
            <Typography>
              Пароль
            </Typography>
            <TextField {
              ...register('password',

                {
                  required: true, minLenght: 4,
                  className: "login-input"
                })
            }
              type="password"
            />
          </Grid>
          <Grid item >
            <Button
              type="submit"
              className="login-button"
            >Войти
            </Button>
          </Grid>

        </Grid>

      </form>



    </div>
  )
}

export default LoginForm;
