
import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'
import moment from 'moment'
import fetch from 'isomorphic-unfetch';

import {toLocalFormData} from './formSerializer';

const getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
}

export const setFormData = (formData) => {
  if (!process.browser) {
    return
  }
  Cookie.set('formData', formData);
}

export const unsetFormData = () => {
  if (!process.browser) {
    return
  }
  Cookie.remove('formData')
}

export const getFormDataFromLocalCookie = () => {
  return Cookie.getJSON('formData')
}


export const fetchFormData = async (email) => {
  let baseURL = undefined;

  if(window.location.hostname === 'localhost') {
    // local dev
    baseURL = 'http://localhost:3001'
  } else {
    // hosted
    baseURL = window.location.protocol +'//'+ window.location.hostname
  }

  return fetch(`${baseURL}/api/profile.js`, {
    method: 'POST',
    body: JSON.stringify({
      email
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(r => r.json())
  .then(data => {
    if(!data._rawJson) return null
    const serializedFormData =toLocalFormData(data._rawJson.fields);
    setFormData(serializedFormData)
    return serializedFormData;
  });
}


export const submitFormData = async (data) => {
  let baseURL = undefined;
  if(window.location.hostname === 'localhost') {
    // local dev
    baseURL = 'http://localhost:3001'
  } else {
    // hosted
    baseURL = window.location.protocol +'//'+ window.location.hostname
  }
  return fetch(`${baseURL}/api/submit.js`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
}