import { Content } from '../components/layout/Content.jsx';
import { PageHeader } from '../components/output/PageHeader.jsx';
import { SecHeader } from '../components/output/SecHeader.jsx';
import { Text } from '../components/output/Text.jsx';
import { Code } from '../components/output/Code.jsx';
import { BulletList } from '../components/output/BulletList.jsx';
import { TextHeader } from '../components/output/TextHeader.jsx';

export const Tutorial = () => {
  const setup = 
  `
  [1]  import phantomauth from 'phantomauth';
  [2]  import dotenv from 'dotenv';
  [3]
  [4]  dotenv.config();
  [5]
  [6]  const API_URL = process.env.API_URL; 
  [7]  const MONGO_URI = process.env.MONGO_URI; 
  [8]  const PORT = process.env.PORT;
  [9]
  [10] const pa = await phantomauth(MONGO_URI, API_URL);
  [11] const {app, verifyToken, verify2FA } = pa;
  [12] app.listen(PORT, () => {
  [13]
  [14] });
  `;
  const expl = [
    '[2] Create a .env file inside your root directory and store sensitive data as environment variables.',
    '[4] Remember to setup your .env file.',
    '[6] API_URL is your api url and it could be "api/v1/auth" for example.',
    '[7] This is your MongoDB connection string.',
    '[8] Both backend and frontend must run on the same domain. PhantomAuth doesn\'t allow Cross-Origin requests.',
    '[10] Don\'t forget the "await" call, otherwise the app will crash.',
    '[11] PhantomAuth object returns an Express.js app and two Express.js middlewares.',
    '[12] Start PhantomAuth like a usual Express.js server and have fun with the app.'
  ];

  const verifyTokEx = 
  `
  import phantomauth from 'phantomauth';
  import dotenv from 'dotenv';

  dotenv.config();

  const API_URL = process.env.API_URL; 
  const MONGO_URI = process.env.MONGO_URI; 
  const PORT = process.env.PORT;

  const pa = await phantomauth(MONGO_URI, API_URL);
  const {app, verifyToken, verify2FA } = pa;

  // Define your protected route and apply the PhantomAuth 'verifyToken' middleware.
  app.post('/your-protected-route', verifyToken, (req, res) => {
    res.json({ success: true, message: "2FA verified" });
  });

  // Start PhantomAuth
  app.listen(PORT, () => {
  
  });
  `;
  const verify2FAex =
  `
    app.post('/your-protected-route', verify2FA, (req, res) => {
      res.json({ success: true, message: "2FA verified" });
    });
  `;
  return (
    <div>
      <PageHeader header={'TUTORIAL'}/>
      <Content>
        <SecHeader header={'Installation'}/>
        <Text text={'To install PhantomAuth, run the following command: '}/>
        <Code code={'npm i phantomauth@latest'} />
        <SecHeader header={'Setup'}/>
        <Text text={'PhantomAuth is built on top of Express.js and is designed to be used just like a standard Express.js application. If you\'re already familiar to Node.js and Express.js just copy the code below, and you\'re done.'}/>
        <Code code={setup} />
        <BulletList list={expl}/>
        <SecHeader header={'How to use PhantomAuth?'}/>
        <Text text={'PhantomAuth includes a built-in authentication router. Refer to the Docs section to learn how to access it. To protect your routes, simply define them and apply the verification middleware as you would with standard Express.js middleware'}/>
        <TextHeader header={'Example Token Verification route'} />
        <Code code={verifyTokEx} />
        <TextHeader header={'Example 2FA Verification route'} />
        <Code code={verify2FAex} />
      </Content>
    </div>
  );
}