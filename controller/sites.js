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