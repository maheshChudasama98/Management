import { Helmet } from 'react-helmet-async';

// import { LoginView } from 'src/sections/login';
import { LoginView } from 'src/sections_2/auth/login';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login  </title>
      </Helmet>

      <LoginView />
    </>
  );
}
