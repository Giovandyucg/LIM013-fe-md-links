import  {getLinks,optionValidate}  from './utils1.js'




// export default mdLinks;
const mdLinks = (route, options) => {
  if (options.validate === true) {
    return optionValidate(route)
    // .then(resp => resp).catch(err => err);  
  } 
  if (options.validate === false) {
    return new Promise(resolve => resolve(getLinks(route)));
  } 
};
export default mdLinks;
// module.exports = mdLinks;




