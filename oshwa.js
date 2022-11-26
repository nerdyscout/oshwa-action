const webrequest = require('webrequest-action/webrequest')

function post_project(url, token, payload) {
  const auth = { 'Authorization': 'Bearer ' + token } ;
  const response = webrequest(url + 'projects/', 'post', payload, auth);
  return response;
}
module.exports.post_project = post_project;

function get_project(url, token, id) {
  const auth = { 'Authorization': 'Bearer ' + token } ;
  const response = webrequest(url + 'projects/' + id, 'get', '', auth);
  return response;
}
module.exports.get_project = get_project;

function get_options(url, token) {
  const auth = { 'Authorization': 'Bearer ' + token } ;
  const response = webrequest(url + 'options/', 'get', '', auth);
  return response;
}
module.exports.get_options = get_options;
