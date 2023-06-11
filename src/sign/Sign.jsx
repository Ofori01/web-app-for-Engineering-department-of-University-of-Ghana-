import React from "react";
import * as Components from './Components';
import './sign.css'

function Sign () {
    const [signIn, toggle] = React.useState(true);
     return( <div className="container">
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder='Full Name' />
                     <Components.Input type='text' placeholder='ID' />
                     <Components.Input type='text' pattern="100|200|300|400" placeholder='level' />
                     <Components.Input type='text'  placeholder='Department' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input type='text' placeholder='ID' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button>Sigin In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Already Have an Account?</Components.Title>
                     <Components.Paragraph>
                         Sign in with your personal details to see what's going on in the Engineering School!
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Don't have an account?</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and join other engineers In the University of Ghana
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sign Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         </div>
     )
}

export default Sign;