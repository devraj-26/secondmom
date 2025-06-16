const { API_BASE_URL } = require('../config/config');
const { getWebsiteID, fetchData } = require('../utils/helper');

exports.getBlogs = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/post/get-all-posts/${websiteID}`);
     return data || null
};

exports.getBlogDetails = async(slug) => {
    const websiteID = await getWebsiteID(); 
    const data = await fetchData(`${API_BASE_URL}/website/post/get-post-by-slug/${websiteID}?slug=${slug}`);
    return data || null
}
