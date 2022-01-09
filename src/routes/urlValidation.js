const { ROUTES } = require('./routes.js')

const urlValidation = (req, res, next) => {
  let { originalUrl } = req;
  let recievedRoute = originalUrl.split('/')[1];
  
  if (!ROUTES.includes(recievedRoute)) {
    return res.status(404).send({
      message:'Request invalid'
    })
  }

  next();

}

module.exports = {
  urlValidation,
}