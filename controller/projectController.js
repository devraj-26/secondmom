const { API_BASE_URL } = require('../config/config');
const { getWebsiteID, fetchData } = require('../utils/helper');

exports.getProjects = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/project-management/get-all-projects/${websiteID}`);
     return data || null
};

exports.getProjectTypes = async(req, res) => {  
    const websiteID = await getWebsiteID(); 
     const data = await fetchData(`${API_BASE_URL}/website/project-type/get-all-project-types/${websiteID}`);
     return data || null
};
exports.getProjectDetails = async(id) => {
    const websiteID = await getWebsiteID(); 
    const data = await fetchData(`${API_BASE_URL}/website/project-management/get-project-by-id/${websiteID}?id=${id}`);
    return data || null
}
exports.getProjectDetailsBySlug = async(slug) => { 
    const websiteID = await getWebsiteID(); 
    const data = await fetchData(`${API_BASE_URL}/website/project-management/get-project-by-slug/${websiteID}?slug=${slug}`);
    return data || null
}
