import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface IFormAuth { 
    email: string,
    password: string
}

const Login: FC = () => {
    const { register, handleSubmit } = useForm<IFormAuth>();

    const onSubmit = (data: IFormAuth) => { 
        console.log(data);
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