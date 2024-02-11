const checkID = (req, res, next) => {
    const id = req.params.id;
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ msg: 'ID no Válido ' });
    }
    next();
  };
  
  module.exports = checkID;