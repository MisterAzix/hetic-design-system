import './style.module.scss';
import Link from 'next/link';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <Link href={'/login'}>Login</Link>
    </div>
  );
};

export default Register;
