const { API_BASE_URL } = require('../config/config');
const { getWebsiteID, fetchData } = require('../utils/helper');

exports.getJobs = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/job-listing/get-all-jobs/${websiteID}`);
     return data || null
};

exports.getJobDetails = async(slug) => {
    const websiteID = await getWebsiteID(); 
    const data = await fetchData(`${API_BASE_URL}/website/job-listing/get-job-by-slug/${websiteID}?slug=${slug}`);
    return data || null
}
