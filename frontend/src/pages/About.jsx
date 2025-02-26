import { Content } from '../components/layout/Content.jsx';
import { PageHeader } from '../components/output/PageHeader.jsx';
import { SecHeader } from '../components/output/SecHeader.jsx';
import { Text } from '../components/output/Text.jsx';
import { BulletList } from '../components/output/BulletList.jsx';

export const About = () => {
  const pros = [
    'Unlike Google OAuth, which comes with costs and usage limits, PhantomAuth is completely free. You can make as many authentication requests as you need, without any restrictions. While it does not provide the same level of advanced security as Google OAuth, it offers a cost-effective and simpler alternative.',
    'Simplicity Over Complexity: Full-stack frameworks like Next.js can be overly complex and require a significant time investment, almost equivalent to learning backend development—defeating their purpose. In contrast, PhantomAuth requires just a few lines of code to set up. It’s designed to help you learn less and do more, rather than investing more time just to simplify your workflow.',
    'Built-In Security Without the Hassle: Security is one of the most challenging aspects of backend development and is a specialized field in itself. PhantomAuth offers a reasonable level of security out of the box, allowing you to focus on your area of expertise without the need to master yet another discipline. Whether you\'re already navigating frontend and backend development, PhantomAuth ensures you don’t have to become a security expert too. It takes care of the essential security tasks, so you don’t have to.'
  ];
  const features = [
    'User Registration',
    'User Login',
    'User Logout',
    'Password Reset',
    'Token Verification',
    '2FA Verification',
    '2FA Activation'
  ];
  return (
    <div>
      <PageHeader header={'ABOUT'}/>
      <Content>
        <SecHeader header={'What is PhantomAuth?'}/>
        <Text text={'PhantomAuth is an open-source authentication library for Node.js, built on top of Express.js and designed for simplicity and security. It enables frontend developers to transform their applications into full-stack solutions with just a few lines of code and in seconds.'}/>
        <SecHeader header={'Is PhantomAuth Worth Your Time?'}/>
        <BulletList list={pros} />
        <SecHeader header={'PhantomAuth Features'}/>
        <Text text={'PhantomAuth relies on MongoDB to manage user data and offers the following features:'}/>
        <BulletList list={features}/>
        <SecHeader header={'The Story Behind PhantomAuth'}/>
        <Text text={'Becoming an expert in frontend development is challenging because it almost always requires a dedicated backend. In contrast, backend developers can showcase their skills without building a full frontend, using tools like Swagger. Frontend developers don’t have this flexibility. Free APIs are often limited and widely reused, making it hard to stand out. To truly showcase your frontend skills, you need to go beyond basic projects like to-do lists or weather apps. You also need to demonstrate your ability to handle complex features, such as token verification and 2FA security. PhantomAuth was created to solve this problem. It enables frontend developers to set up a custom backend easily, without having to become full-stack developers.'}/>
      </Content>
    </div>
  );
}