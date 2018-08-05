const { insertProfileData, getProfileData } = require('../database/queries/profile');

const postProfile = (req, res) => {
  const data = req.body;
  const { id } = req.query;
  const parameters = ['location', 'date_of_birth', 'cared_for_situation', 'looking_for', 'offer'];
  const missingParams = [];
  parameters.forEach((parameter) => {
    if (!data.hasOwnProperty(parameter)) {
      missingParams.push(parameter);
    }
  });
  if (missingParams.length>0 || !id) {
    const idParam = id? '' : 'id';
    res.send({ err: `(${missingParams}, ${idParam}) parameters are missing`});
    return;
  }
  data.id = id;
  data.date_of_birth = 35;  // just to make it work, we should change db type
  console.log(data)
  insertProfileData(data, (err, result) => {
    if (err) {
      console.error('insertProfileData', err);
      res.send({ err: 'Something went wrong'});
    } else {
      res.send({ msg: 'profile has been updated'});
    }
  });
}

const getProfile = (req, res, ) => {
  const { id } = req.query;
  getProfileData(id, (err, result) => {
    if (err) {
      res.send({ err: 'Something went wrong'});
      return;
    }
    if (result.length === 0) {
      res.send({ err: 'There is no recored for this id'});
      return;
    }
    res.send(result);

  });
}

module.exports = { postProfile, getProfile };
