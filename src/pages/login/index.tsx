import './style.module.scss';
import Link from 'next/link';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link href={'/register'}>Register</Link>
    </div>
  );
};

export default Login;
