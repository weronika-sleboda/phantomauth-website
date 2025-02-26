
import { Content } from '../components/layout/Content.jsx';
import { PageHeader } from '../components/output/PageHeader.jsx';
import { SecHeader } from '../components/output/SecHeader.jsx';
import { Text } from '../components/output/Text.jsx';
import { BulletList } from '../components/output/BulletList.jsx';
import { Code } from '../components/output/Code.jsx';
import { TextHeader } from '../components/output/TextHeader.jsx';

export const Docs = () => {
  const reg = [
    'Endpoint: POST /register', 
    'Description: Registers a new user with email and password.', 
    'email - Required. The email of the user.',
    'password - Required. The password of the user.',
    'bottrap: Optional. A hidden field to trap bots. If filled, registration is rejected.'
  ];
  const regReq = { email: 'useremail@gmail.com', password: 'userPassword', bottrap: '' };
  const regRes = { success: true, message: 'User registration succeeded' };
  const regErrs = ['400 Bad Request: Missing fields, Bot detected, User already exists.', '500 Internal Server Error: Registration failed'];

  const login = [
    'Endpoint: POST /login', 
    'Description: Authenticates a user and generates a JWT token stored as an HTTP-only cookie.', 
    'email - Required. The email of the user.',
    'password - Required. The password of the user.',
  ];
  const loginReq = { email: 'useremail@gmail.com', password: 'userPassword' };
  const loginRes = { success: true, message: 'User login succeeded' };
  const loginErrs = ['400 Bad Request: Missing fields', '500 Internal Server Error: Login failed'];

  const logout = [
    'Endpoint: POST /logout', 
    'Description:  Logs out the user by invalidating the token and clearing the authentication cookie.',
  ];
  const logoutRes = { success: true, message: 'User logout succeeded' };
  const logoutErrs = ['400 Bad Request: Missing token, Invalid token.', '500 Internal Server Error: Logout failed'];

  const reset = [
    'Endpoint: POST /reset-password', 
    'Description: Resets the user\'s password after verifying the provided email.', 
    'email - Required. The email of the user.',
    'newPass- Required. New password of the user.',
    'confirmPass: Required. Must match newPass'
  ];
  const resetReq = { email: 'useremail@gmail.com', newPass: 'newPassword', confirmPass: 'newPassword' };
  const resetRes = { success: true, message: 'Password reset succeeded' };
  const resetErrs = ['400 Bad Request: Missing fields, Passwords don’t match, User not found.', '500 Internal Server Error: Password reset failed'];

  const enable2FA = [
    'Endpoint: POST /enable-2fa', 
    'Description: Enables two-factor authentication (2FA) for the user and returns a QR code for 2FA setup.', 
    'email - Required. The email of the user.'
  ];
  const enable2FAReq = { email: 'useremail@gmail.com' };
  const enable2FARes = { success: true, qrCode: 'data:image/png;base64,...' };
  const enable2FAErrs = ['400 Bad Request: Missing fields.', '404 Not Found: User not found.', '500 Internal Server Error: Enabling 2FA failed'];
  
  const verifyTok = [
    'Purpose: Verifies the authenticity of the JWT token stored in the token cookie.', 
    'Checks for the presence of the token in cookies.', 
    'Verifies the token against the secret key.',
    'Checks the validity of the token by comparing it with the hashed value stored in the database.',
    'Adds req.userId to the request object on successful verification.'
  ];
  const verifyTokEx = `app.use('/protected-route', verifyToken, (req, res) => {
    res.json({ success: true, message: "Access granted" });
  });`;
  const verifyTokErrs = ['400 Bad Request: Missing token, Invalid token, Expired token.', '500 Internal Server Error: Token verification failed'];

  const verify2FA = [
    'Purpose: Verifies the one-time password (OTP) for two-factor authentication.', 
    'Checks for email and otp in the request body.', 
    'Retrieves the user\'s 2FA secret from the database.',
    'Decrypts the secret and verifies the OTP using the TOTP algorithm.',
    'Adds req.userId to the request object on successful verification.'
  ];
  const verify2FAReq = { email: 'useremail@gmail.com', otp: '123456' };
  const verify2FAEx = `app.post('/protected-route', verify2FA, (req, res) => {
    res.json({ success: true, message: "2FA verified" });
  });`;
  const verify2FAErrs = ['400 Bad Request: Missing fields, Verification failed.', '500 Internal Server Error: 2FA verification failed due to a server error.'];
  return (
    <div>
      <PageHeader header={'DOCS'}/>
      <Content>
        <SecHeader header={'Routes'}/>
        <TextHeader header={'1. User Registration'}/>
        <BulletList list={reg} />
        <Text text={'Request Body'}/>
        <Code code={JSON.stringify(regReq, null, 2)}/>
        <Text text={'Response Body'}/>
        <Code code={JSON.stringify(regRes, null, 2)}/>
        <Text text={'Errors'}/>
        <BulletList list={regErrs}/>

        <TextHeader header={'2. User Login'}/>
        <Text text={'Sets a secure, HTTP-only cookie named token'}/>
        <BulletList list={login} />
        <Text text={'Request Body'}/>
        <Code code={JSON.stringify(loginReq, null, 2)}/>
        <Text text={'Response Body'}/>
        <Code code={JSON.stringify(loginRes, null, 2)}/>
        <Text text={'Errors'}/>
        <BulletList list={loginErrs}/>

        <TextHeader header={'3. User Logout'}/>
        <BulletList list={logout} />
        <Text text={'Request Body: Uses the token cookie for authentication'}/>
        <Text text={'Response Body'}/>
        <Code code={JSON.stringify(logoutRes, null, 2)}/>
        <Text text={'Errors'}/>
        <BulletList list={logoutErrs}/>

        <TextHeader header={'4. Password Reset'}/>
        <BulletList list={reset} />
        <Text text={'Request Body'}/>
        <Code code={JSON.stringify(resetReq, null, 2)}/>
        <Text text={'Response Body'}/>
        <Code code={JSON.stringify(resetRes, null, 2)}/>
        <Text text={'Errors'}/>
        <BulletList list={resetErrs}/>

        <TextHeader header={'5. Enable 2FA'}/>
        <BulletList list={enable2FA} />
        <Text text={'Request Body'}/>
        <Code code={JSON.stringify(enable2FAReq, null, 2)}/>
        <Text text={'Response Body'}/>
        <Code code={JSON.stringify(enable2FARes, null, 2)}/>
        <Text text={'Errors'}/>
        <BulletList list={enable2FAErrs}/>

        <SecHeader header={'Middlewares'}/>
        <TextHeader header={'1. Token Verification'}/>
        <BulletList list={verifyTok} />
        <Text text={'Example usage'}/>
        <Code code={verifyTokEx}/>
        <Text text={'Errors'}/>
        <BulletList list={verifyTokErrs}/>

        <TextHeader header={'2. 2FA Verification'}/>
        <BulletList list={verify2FA} />
        <Text text={'Example usage'}/>
        <Code code={verify2FAEx}/>
        <Text text={'Request Body'}/>
        <Code code={JSON.stringify(verify2FAReq, null, 2)}/>
        <Text text={'Errors'}/>
        <BulletList list={verify2FAErrs}/>
      </Content>
    </div>
  );
}