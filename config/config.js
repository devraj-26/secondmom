const API_BASE_URL = process.env.API_BASE_URL; 
const WEBSITE_UID = process.env.WEBSITE_UID;
const S3_BASE_URL = process.env.S3_BASE_URL;

const WEBSITE_DATA_KEY = "websiteData";
const WEBSITE_ID_KEY = "websiteProjectId";
const POPUP_BANNER_IS_SHOWN = "popup-banner-is-shown";

const BANNER_TYPES = {
    HOME_BANNER: "HOME_BANNER",
    POPUP_BANNER: "POPUP_BANNER",
    AD_BANNER: "AD_BANNER",
  };

  const FETCH_METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  };

  const MEDIA_TYPES = {
    IMAGE: "IMAGE",
    VIDEO: "VIDEO",
  };

  // const CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
  //   EMAIL: "email",
  //   NAME: "strings.stringOne",
  //   CONTACT_NUMBER: "strings.stringTwo",
  //   REMARKS: "remarks",
  // };

  const CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
    EMAIL: "email",
    NAME: "strings.stringOne",
    CONTACT_NUMBER: "strings.stringTwo",
    CITY: "strings.stringThree",
    REMARKS: "remarks",
  };
  
  const CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
    
    NAME: "strings.stringOne",
    PHONE: "strings.stringTwo",
    QUALIFICATION : "strings.stringTree",
    RESUME: "files.fileOne",
    EMAIL: "email",
    EXPERIENCE: "strings.stringFour",
    POSITION: "strings.stringFive",
    REMARKS: "remarks",

  };

  const SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
    EMAIL: "email",
    CHILD_NAME: "strings.stringOne",
    CHILD_AGE: "strings.stringTwo",
    PARENT_NAME: "strings.stringThree",
    CONTACT_NO: "strings.numberOne",
    REMARKS: "remarks",
    SERVICE_TYPE: "serviceType",
    
  };
  const BOOK_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
    NAME: "strings.stringOne",
    EMAIL: "email",
    CONTACT_NUMBER: "strings.stringTwo",
    CITY: "strings.stringThree",
    TITLE: "strings.stringFour",
    REMARKS: "remarks",
    DATE:"dates.dateOne",
    TYPE: "serviceType",
    SERVICE: "objects.objectOne"
  };

  const BOOK_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
    NAME: "strings.stringOne",
    EMAIL: "email",
    CONTACT_NUMBER: "strings.stringTwo",
    CITY: "strings.stringThree",
    TITLE: "strings.stringFour",
    REMARKS: "remarks",
    DATE:"dates.dateOne",
    TYPE: "serviceType",
    SERVICE: "objects.objectOne"
  };

module.exports = {
    API_BASE_URL,
    WEBSITE_UID,
    S3_BASE_URL,
    WEBSITE_DATA_KEY, 
    WEBSITE_ID_KEY,
    POPUP_BANNER_IS_SHOWN,
    BANNER_TYPES,
    FETCH_METHODS,
    MEDIA_TYPES,
    CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS,
    CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS,
    SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS,
    BOOK_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS,
    BOOK_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS,
};


// const BANNER_TYPES = {
//     HOME_BANNER: "HOME_BANNER",
//     POPUP_BANNER: "POPUP_BANNER",
//     AD_BANNER: "AD_BANNER",
//   };

//   const FETCH_METHODS = {
//     GET: "GET",
//     POST: "POST",
//     PUT: "PUT",
//     DELETE: "DELETE",
//   };

//   const MEDIA_TYPES = {
//     IMAGE: "IMAGE",
//     VIDEO: "VIDEO",
//   };

//   const CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
//     EMAIL: "email",
//     NAME: "strings.stringOne",
//     CONTACT_NUMBER: "strings.stringTwo",
//     REMARKS: "remarks",
//   };
  
//   const CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
//     EMAIL: "email",
//     NAME: "strings.stringOne",
//     CONTACT_NUMBER: "strings.stringTwo",
//     REMARKS: "remarks",
//     RESUME: "files.fileOne",
//   };

//   const SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
//     EMAIL: "email",
//     NAME: "strings.stringOne",
//     CONTACT_NUMBER: "strings.stringTwo",
//     CITY: "strings.stringThree",
//     TITLE: "strings.stringFour",
//     REMARKS: "remarks",
//     SERVICE_TYPE: "serviceType",
//   };

  