import {FC} from 'react'
import { LuUserCircle2 as UserIcon } from "react-icons/lu";
import {LoginContainer , LoginText} from "./login-button.styles.ts";

export const LoginButton: FC = () => {
    return (
        <LoginContainer>
            <UserIcon size={22}/>
            <LoginText>Fazer login</LoginText>
        </LoginContainer>
    )
}
