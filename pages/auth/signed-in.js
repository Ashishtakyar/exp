import React, { PropTypes } from 'react'
import Router from 'next/router'
import jwtDecode from 'jwt-decode'
import { setToken } from '../../utils/auth';

import { parseHash } from '../../utils/auth0';

import { fetchFormData, submitFormData } from '../../utils/form';
import { toServerFormData } from  '../../utils/formSerializer';

export default class SignedIn extends React.Component {
  // static propTypes = {
  //   url: PropTypes.object.isRequired
  // }

  componentDidMount () {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    parseHash(async (err, result) => {
      if(err) {
        console.error('Something happened with the Sign In request')
        return;
      }
      setToken(result.idToken, result.accessToken);

      const idToken = jwtDecode(result.idToken)
      
      await fetchFormData(idToken.email)
        .then( async (data) => {
          if(redirect && redirect != 'undefined' && redirect != undefined) {
            // if a rediret is provided, always use that
            console.log('redirecting after login', redirect);
            Router.push(redirect)
          } else {
            if(data && data.completedAt && typeof data.completedAt != "undefined") {
              console.log(`${idToken.email} logged in after submitting - redirect to profile page`);
              Router.push('/../profile');
              return;
            } else {
              if(!data || !data.email){
                // no profile exists for this user. First time theyre signing in. Create one
                const formData = toServerFormData({
                  email: idToken.email,
                  name: idToken.name
                });
                await submitFormData({
                  form: formData
                })
                .then( data => {
                  console.log('User profile created for', idToken.email);
                })
                .catch((err)=>{
                  console.log('Error creating profile for', idToken.email, err);
                })
                console.log(`${idToken.email} logged in before submitting - redirect to getstarted page`);
                Router.push('/../disclaimer');
              } else {
                console.log(`${idToken.email} logged in before submitting - redirect to getstarted page`);
                Router.push('/../disclaimer');
              }
              
            }
          }
        })
        .catch((err)=>{
          console.error('Fetch ERROR:',err)
          Router.push('/');
        });
      


      

      
      
    })


    


  }
  render () {
    return null
  }
}