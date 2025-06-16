const { API_BASE_URL } = require('../config/config');
const { getWebsiteID, fetchData } = require('../utils/helper');

exports.getGalleries = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/gallery/get-all-galleries/${websiteID}`);
     return data || null
};

exports.getGalleryDetails = async(id) => {
    const websiteID = await getWebsiteID(); 
    const data = await fetchData(`${API_BASE_URL}/website/gallery/get-gallery-by-id/${websiteID}?id=${id}`);
    return data || null
}
