import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { colors } from '../colors';




const LoginLink = styled.Text`
    color: ${colors.blue};
    font-weight: 600;
    margin-top: 20px;
`;

export default function Welcome({navigation}) {
    const goToCreateAccount = () => navigation.navigate("CreateAccount");
    const goToLogin = () => navigation.navigate("LogIn");
    //console.log(props);
    return (
        <AuthLayout>
            <AuthButton text="Create New Account" disabled={false} onPress={goToCreateAccount} />
            <TouchableOpacity onPress={goToLogin}>
                <LoginLink>Log in</LoginLink>
            </TouchableOpacity>
        </AuthLayout>
    );
}