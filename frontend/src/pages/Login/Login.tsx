import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { auth } from '../../services/auth';

interface IFormAuth { 
    email: string,
    password: string
}

const Login: FC = () => {
    const { register, handleSubmit } = useForm<IFormAuth>();

    const onSubmit = (data: IFormAuth) => { 
        const email = data.email;
        const password = data.password;

        auth.login(email, password)
            .then(response => { 
                const status = JSON.parse(response).status;

                if ( status === true ) { 
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                }
        })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register('email')} />
            <input type="password" {...register('password')} />
            <input type="submit" value="Submit" />
        </form>
    )
};

export default Login;