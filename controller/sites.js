const Site = require('../models/Site');

// @description Get all sites
// @route GET /api/v1/sites
// @access Public

exports.getSites = async (req, res, next) => {
    try {
      const sites = await Site.find();

      return res.status(200).json({
          success: true,
          count: sites.length,
          data: sites
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error'});
    }
}

// @description Create a site
// @route POST /api/v1/sites
// @access Public

exports.addSite = async (req, res, next) => {
  try {
    const site = await Site.create(req.body);

    return res.status(200).json({
      success: true,
      data: site
    });
  } catch (err) {
    console.error(err);
    if(err.code === 11000 ) {
      return res.status(400).json({ error: 'This site already exists'});
    }
    res.status(500).json({ error: 'Server error'});
  }
};