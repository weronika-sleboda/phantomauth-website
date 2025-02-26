import { Content } from "../components/layout/Content.jsx";
import { PageHeader } from "../components/output/PageHeader.jsx";
import { RegReq } from "../components/requests/RegReq.jsx";
import { LoginReq } from "../components/requests/LoginReq.jsx";
import { VerifyReq } from "../components/requests/VerifyReq.jsx";
import { LogoutReq } from "../components/requests/LogoutReq.jsx";
import { Enable2FAReq } from "../components/requests/Enable2FAReq.jsx";
import { Verify2FA } from "../components/requests/Verify2FA.jsx";
import { ResetPassReq } from "../components/requests/ResetPassReq.jsx";

export const Demo = () => {
  return (
    <div>
      <PageHeader header={'DEMO'}/>
      <Content>
        <RegReq/>
        <LoginReq/>
        <VerifyReq/>
        <LogoutReq/>
        <Enable2FAReq/>
        <Verify2FA />
        <ResetPassReq/>
      </Content>
    </div>
  );
}