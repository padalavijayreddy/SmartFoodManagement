import React from 'react'
import { observer } from 'mobx-react'
import {
   MainDiv,
   SubDiv,
   Logo,
   SignUp,
   FieldsDiv,
   UsernameFieldContainerDiv,
   InputLabelField,
   InputFieldTag,
   ErrorImageIcon,
   ErrorMessageSpan,
   PasswordFieldContainerDiv,
   SubmitButton,
   Footer,
   LoginButton,
   ButtonStyles,
   NoAccount,
   AnchorTag,
   InputDiv,
   ErrorMessage,
   Languages,
   Buttons
} from './LoginPageStyle'
import i18n from '../../../CommonModule/i18n'
import { observable } from 'mobx'
import { withTranslation, WithTranslation } from 'react-i18next'
import { login } from '../../../CommonModule/i18nStrings/strings.json'
import { InputField } from '../../../CommonModule/components/InputField'
import Button from '../../../CommonModule/components/Button/Button'

interface LoginProps extends WithTranslation {
   onChangeUsername: (e: any) => void
   onChangePassword: (e: any) => void
   onChangeLanguage: (e: any) => void
   username: string
   password: string
   onSubmit: (event: any) => Promise<void>
   isLoading: boolean
   errorType: string
   usernameErrorMessage: string | null
   passwordErrorMessage: string | null
   errorMessage: string
   userNameRef: React.RefObject<HTMLInputElement>
   passwordRef: React.RefObject<HTMLInputElement>
}

@observer
class LoginPage extends React.Component<LoginProps> {
   @observable isErrorPresent: boolean = false

   changeUserName = (event: React.FormEvent<HTMLInputElement>) => {
      const { onChangeUsername } = this.props
      const newUserNameValue = event.currentTarget.value
      onChangeUsername(newUserNameValue)
   }

   changePassword = (event: React.FormEvent<HTMLInputElement>) => {
      const { onChangePassword } = this.props
      const newPasswordValue = event.currentTarget.value
      onChangePassword(newPasswordValue)
   }

   render() {
      const {
         t,
         username,
         password,
         onSubmit,
         isLoading,
         errorType,
         usernameErrorMessage,
         passwordErrorMessage,
         errorMessage,
         userNameRef,
         passwordRef,
         onChangeLanguage
      } = this.props
      return (
         <MainDiv>
            <Languages>
               <Buttons onClick={() => onChangeLanguage('en')}>
                  {t('login:english')}
               </Buttons>
               <Buttons onClick={() => onChangeLanguage('te')}>
                  {t('login:telugu')}
               </Buttons>
            </Languages>
            <SubDiv>
               <Logo src={login.logoImgSrc} alt={login.ibhubsLogo}></Logo>
               <SignUp>{t('login:hiTherelogin')}</SignUp>
               <FieldsDiv>
                  <UsernameFieldContainerDiv>
                     <InputLabelField>{t('login:username')}</InputLabelField>
                     <InputDiv isErrorPresent={errorType == login.username}>
                        <InputField
                           placeholder='Username'
                           reference={userNameRef}
                           onChange={this.changeUserName}
                           value={username}
                           id={login.username}
                           type='text'
                           data-testid='username'
                        />
                        {errorType == login.username ? (
                           <ErrorImageIcon src={login.errorIconSrc} />
                        ) : (
                           ''
                        )}
                     </InputDiv>
                     <ErrorMessageSpan>{usernameErrorMessage}</ErrorMessageSpan>
                  </UsernameFieldContainerDiv>
                  <PasswordFieldContainerDiv>
                     <InputLabelField>{t('login:password')}</InputLabelField>
                     <InputDiv isErrorPresent={errorType == login.password}>
                        <InputField
                           placeholder='Password'
                           data-testid='password'
                           reference={passwordRef}
                           onChange={this.changePassword}
                           value={password}
                           id={login.password}
                           type='password'
                        />
                        {errorType == login.password ? (
                           <ErrorImageIcon src={login.errorIconSrc} />
                        ) : (
                           ''
                        )}
                     </InputDiv>
                     <ErrorMessageSpan>{passwordErrorMessage}</ErrorMessageSpan>
                  </PasswordFieldContainerDiv>
               </FieldsDiv>
               <SubmitButton>
                  <Button
                     text={login.login}
                     onClick={onSubmit}
                     dataTestId='sign-in-button'
                     {...{ isLoading, ButtonStyles }}
                  />
                  <ErrorMessage>{errorMessage}</ErrorMessage>
               </SubmitButton>
               <Footer>
                  <NoAccount>{t('login:dontHaveAnAccount')}</NoAccount>
                  <AnchorTag href=''>{t('login:signup')}</AnchorTag>
               </Footer>
            </SubDiv>
         </MainDiv>
      )
   }
}

export default withTranslation('', {})(LoginPage)
