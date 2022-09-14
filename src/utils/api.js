import axios from "axios";
import config from "../config";

export function request( method, path, data = {}, headers = {}, extra = {} ) {
  const token = localStorage.getItem( "token" );
  const promise = method === 'post' || method === 'put' ?
      axios[method]( `${config.api.url}${path}`, data, { headers: { Authorization: `Bearer ${token}`, ...headers }, ...extra } ) :
      axios[method]( `${config.api.url}${path}`, { headers: { Authorization: `Bearer ${token}`, ...headers }, ...extra } );

  return promise.then( result => result.data ).catch( error => {
    let wrapped;
    if( error.response ) {
      if( !error.response.data ){
        wrapped = new Error( error.response.statusText );
        wrapped.code = error.response.status;
      } else {
        wrapped = new Error( error.response.data.message );
        wrapped.code = error.response.data.code;
      }
    } else if( error.request ) {
      wrapped = new Error( 'No response from server' );
      wrapped.code = 0;
    } else {
      wrapped = new Error( error.message );
      wrapped.code = -1;
    }
    throw wrapped;
  } );
}

export function get( path, headers = {} ) {
  return request( 'get', path, {}, headers );
}

export function post( path, data, headers = {} ) {
  return request( 'post', path, data, headers );
}

export function upload( path, files, data, onUploadProgress = () => {}, headers = {} ) {
  const form = new FormData();
  files.forEach( file => {
    form.append( 'files[]', file );
  } );
  form.append( 'data', JSON.stringify( data ) );
  return request( 'post', path, form, {
    "Content-Type": "multipart/form-data",
    ...headers
  }, {
    onUploadProgress
  } );
}

export function put( path, data, headers = {} ) {
  return request( 'put', path, data, headers );
}

export function remove( path, headers = {} ) {
  return request( 'delete', path, {}, headers );
}