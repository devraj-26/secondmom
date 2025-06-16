require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const path = require('path');
const { getWebsiteID } = require('./utils/helper');
const { CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS, CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS, BOOK_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS,SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, BOOK_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS, API_BASE_URL, WEBSITE_ID_KEY, websiteID} = require('./config/config'); 
const { getHomeDesktopBanner, getTestimonials, getPosts, getPopupBanner,getClient } = require('./controller/homeController');
const { getProjects, getProjectTypes, getProjectDetails, getProjectDetailsBySlug } = require('./controller/projectController');
const { getBlogs, getBlogDetails } = require('./controller/blogsController');
const { getGalleries, getGalleryDetails} = require('./controller/galleryController');
const { getStaffs } = require('./controller/aboutController');
const {getJobs, getJobDetails}= require('./controller/jobController');
const { title } = require('process');
const app = express();
const port = process.env.PORT;

const metaLogoPath = "/assets/images/secondmomlogo.png";
// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Define the views directory

// Serve static files (like CSS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', async (req, res) => {
    const banners = await getHomeDesktopBanner();
    const popupBanner = await getPopupBanner();
    const websiteID = await getWebsiteID();

    const HomeDesktopBanner = await getHomeDesktopBanner();
    const testimonials = await getTestimonials();
    const imageGalleries = await getGalleries();
    const galleries = await getGalleries();  // console.log("galleries=", galleries?.length);

    const currentURL = req.url;
    const posts = await getPosts();
    const clientData = await getClient();
    const projectType = await getProjectTypes();
    const projects = await getProjects(); //console.log("projects=", projects[0]);
    
    const pathPart = "home";
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
      title: 'Best child play school activities center in bhayli baroda.',
      metaDescription: 'Top rated child playschool center experience World Class activities programs, Infrastructure and child development with childcare.',
      metaKeyword: 'Second Mom',
      canonical: "https://secondmom.in/",

      metaImage: `${baseUrl}/${metaLogoPath}`, 

    }
  res.render('index', { pathPart,currentURL, galleries, API_BASE_URL , websiteID , WEBSITE_ID_KEY, SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails, imageGalleries, banners, popupBanner, HomeDesktopBanner, testimonials, posts, projects, projectType, clientData,baseUrl, body: "" }); // Pass title to the view
});

 
app.get('/about', async (req, res) => {
  const pathPart = req.path.split('/').pop();
  const staff = await getStaffs();
  staff.shift();
  const currentURL = req.url;

  const baseUrl = req.protocol + '://' + req.get('Host');
  const seoDetails = {
    title: 'Budget-friendly Center for infant to toddler child in baroda',
    metaDescription: 'Choose your best budget friendly center for your infant to toddler child,secondMom helps a child learn to make independent choices and gain self-confidence',
    metaKeyword: 'Second Mom',
    canonical: currentURL,
    metaImage: `${baseUrl}/${metaLogoPath}`,
  }
  res.render('about', { pathPart, seoDetails,baseUrl, staff, body: "" }); // Pass title to the view
});

app.get('/programs', async (req, res) => {
  const pathPart = req.path.split('/').pop();
 
  const currentURL = req.url;

  const baseUrl = req.protocol + '://' + req.get('Host');
  const seoDetails = {
    title: 'Best Preschool/Nursery class in the last 10 years in baroda.',
    metaDescription: 'We are having experience of 10 years in child care industry, join us and give them an excellent pre-school education.',
    metaKeyword: 'Second Mom',
    canonical: currentURL,
    metaImage: `${baseUrl}/${metaLogoPath}`,
  }
  res.render('programs', { pathPart, seoDetails,baseUrl, body: "" }); // Pass title to the view
});
app.get('/young-toddlers', async (req, res) => {
  const pathPart = req.path.split('/').pop();
 
  const currentURL = req.url;

  const baseUrl = req.protocol + '://' + req.get('Host');
  const seoDetails = {
    title: 'Young-toddlers',
    metaDescription: 'Second Mom is best place for the young-toddlers',
    metaKeyword: 'Second Mom',
    canonical: currentURL,
    metaImage: `${baseUrl}/${metaLogoPath}`,
  }
  res.render('young-toddlers', { pathPart, seoDetails,baseUrl, body: "" }); // Pass title to the view
});
app.get('/infant-care', async (req, res) => {
  const pathPart = req.path.split('/').pop();
 
  const currentURL = req.url;

  const baseUrl = req.protocol + '://' + req.get('Host');
  const seoDetails = {
    title: 'Infant-care',
    metaDescription: 'Second Mom is best place for the infant-care',
    metaKeyword: 'Second Mom',
    canonical: currentURL,
    metaImage: `${baseUrl}/${metaLogoPath}`,
  }
  res.render('infant-care', { pathPart, seoDetails,baseUrl, body: "" }); // Pass title to the view
});
app.get('/older-toddlers', async (req, res) => {
  const pathPart = req.path.split('/').pop();
 
  const currentURL = req.url;

  const baseUrl = req.protocol + '://' + req.get('Host');
  const seoDetails = {
    title: 'Older-toddlers',
    metaDescription: 'Second Mom is best place for the Older-toddlers',
    metaKeyword: 'Second Mom',
    canonical: currentURL,
    metaImage: `${baseUrl}/${metaLogoPath}`,
  }
  res.render('older-toddlers', { pathPart, seoDetails,baseUrl, body: "" }); // Pass title to the view
});
app.get('/centers', async (req, res) => {
  const pathPart = req.path.split('/').pop();
 
  const currentURL = req.url;

  const baseUrl = req.protocol + '://' + req.get('Host');
  const seoDetails = {
    title: 'Be the Part of our Ever Growing Legacy - Explore the Chain of Most Trusted Child Care Centres ',
    metaDescription: 'We are Expanding and we are on mission to provide the Best in Class. Safe Hygienic and Compassionate Care for your child.',
    metaKeyword: 'Second Mom',
    canonical: currentURL,
    metaImage: `${baseUrl}/${metaLogoPath}`,
  }
  res.render('centers', { pathPart, seoDetails,baseUrl, body: "" }); // Pass title to the view
});

app.get('/corporate', async (req, res) => {
  const pathPart = req.path.split('/').pop();
  const staff = await getStaffs();
  staff.shift();
  const currentURL = req.url;

  const baseUrl = req.protocol + '://' + req.get('Host');
  const seoDetails = {
    title: ' Get the best care for your baby in baroda.',
    metaDescription: 'Safety has always been our first priority, Get the best care for your child with a safe environment and also our highly expert Paediatric doctor team.',
    metaKeyword: 'Second Mom',
    canonical: currentURL,
    metaImage: `${baseUrl}/${metaLogoPath}`,
  }
  res.render('corporate', { pathPart,baseUrl, seoDetails, staff, body: "" }); // Pass title to the view
});

app.get('/blogs', async (req, res) => {
  const pathPart = req.path.split('/').pop(); // Extract the path part
  const page = parseInt(req.query.page) || 1; // Current page, default to 1
  const limit = 20; // Number of posts per page
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const baseUrl = req.protocol + '://' + req.get('Host');


  const allPosts = await getPosts(); // Fetch all posts
  const posts = allPosts.slice(startIndex, endIndex); // Paginated posts
  const totalPages = Math.ceil(allPosts.length / limit); // Total pages
  const currentURL = req.url;
  
  //console.log("projects=", posts);
  const seoDetails = {
      title: 'Best nearby child development center in bhayli baroda',
      metaDescription: 'Check out ones this top child development center how to they take care,  of the early childhood development of your child at their pre-schooling age',
      metaKeyword:' Second Mom',
      canonicle: currentURL,
      metaImage: `${req.protocol}://${req.get('Host')}/path-to-logo.jpg`,
  };

  // Pass `posts` correctly to the view
  res.render('blogs', { 
      pathPart, 
      seoDetails, 
      posts,   // Pass the posts data to the view
      currentPage: page, 
      totalPages,
      baseUrl,
  });
});

app.get('/blog/:slug', async (req, res) => {
  const pathPart = req.path.split('/').pop();
  const blogDetails = await getBlogDetails(req.params.slug); // Use the slug to get the correct blog post details
  const blogs = await getBlogs();
  const baseUrl = req.protocol + '://' + req.get('Host')+ req.originalUrl;
  const currentURL = req.url;
  

  // Extract tags and convert them into a comma-separated string
  const keywords = blogDetails?.seoDetails?.tags ? blogDetails?.seoDetails?.tags.join(', ') : ''; // Join tags into a comma-separated string
  // console.log("blog-details=sssrs",blogDetails)

  // console.log('Keywords:', keywords); 
  // Generate the meta image URL based on the blog's banner details
  const metaimg = blogDetails?.banner?.bannerType === "IMAGE" && blogDetails?.banner?.image && blogDetails?.banner?.image !== "" 
    ? process.env.S3_BASE_URL + blogDetails?.banner?.image 
    : `${baseUrl}/${metaLogoPath}`;

  // Utility function to strip HTML tags
const stripHtmlTags = (html) =>
  html
    .replace(/<\/?[^>]+(>|$)/g, "")     // Remove HTML tags
    .replace(/&nbsp;/g, " ")            // Remove named entity &nbsp;
    .replace(/\u00A0/g, " ")            // Remove actual non-breaking space character
    .replace(/\s+/g, " ")               // Collapse multiple spaces
    .trim();                            // Trim leading/trailing whitespace

  // Utility function to truncate text
  const truncate = (str, length) => str.length > length ? str.slice(0, length) + "..." : str;

  const seoDetails = {
    title: truncate(blogDetails?.title || "Blog Details", 60), // Limit title to 60 characters
    metaDescription: truncate(stripHtmlTags(blogDetails?.description || ""), 160), // Limit description to 160 characters
    metaImage: metaimg,
    // metaKeyword: 'Technolitics',
    canonical: currentURL,
    metaKeyword: keywords, // Pass the comma-separated tags here
  };

  res.render('blogdetails', { pathPart, seoDetails, blogDetails, blogs, body: "",baseUrl,currentURL, }); // Pass blog details to the view
});

app.get('/videos', async (req, res) => {
  const pathPart = req.path.split('/').pop();
  const galleries = await getGalleries();  // console.log("galleries=", galleries?.length);
  const imageGalleries = galleries?.filter(item => item.mediaDetails?.mediaType === "IMAGE");
  const videoGalleries = galleries?.filter(item => item.mediaDetails?.mediaType === "VIDEO");
  const baseUrl = req.protocol + '://' + req.get('Host');
  const currentURL = req.url;

  const seoDetails = {
    title: 'Friendly, Compassionate and Caring Playcare centre in Vadodara',
    metaDescription: 'Second Mom provides the best in class, caring and compassionate environment for all round development of your child',
    metaKeyword: 'Second Mom',
    canonical: currentURL,
    metaImage: `${baseUrl}/${metaLogoPath}`,
  } 
  const galleryTitles = galleries?.map(item => ({
    _id: item._id,
    title: item.title
}));
  // console.log("galleryTitles=", galleryTitles);
  res.render('videos', { pathPart,baseUrl, galleryTitles, seoDetails, imageGalleries, videoGalleries, body: "" }); // Pass title to the view
});


app.get('/franchise-enquiry', async (req, res) => {
  const pathPart = req.path.split('/').pop();
  const testimonials = await getTestimonials();
  const websiteID = await getWebsiteID();
  const currentURL = req.url;
  const projects = await getProjects(); 
  const projectType = await getProjectTypes(); 
  const baseUrl = req.protocol + '://' + req.get('Host');
  const seoDetails = {
    title: 'Franchise',
    metaDescription: 'Enquire about Franchise with us',
    metaKeyword: 'Second Mom',
    canonical: currentURL,
    metaImage: `${baseUrl}/${metaLogoPath}`,
  }
  
  res.render('franchise-enquiry', { pathPart, websiteID, WEBSITE_ID_KEY, currentURL, API_BASE_URL, BOOK_DEALERSHIP_ENQUIRY_DYNAMIC_FIELDS_KEYS, API_BASE_URL, testimonials, seoDetails, projects,baseUrl, projectType, body: "" }); // Pass title to the view
});


app.get('/gallery', async (req, res) => {
  const pathPart = req.path.split('/').pop();
  const galleries = await getGalleries();  // console.log("galleries=", galleries?.length);
  const imageGalleries = galleries?.filter(item => item.mediaDetails?.mediaType === "IMAGE");
  const videoGalleries = galleries?.filter(item => item.mediaDetails?.mediaType === "VIDEO");
  const baseUrl = req.protocol + '://' + req.get('Host');
  const currentURL = req.url;

  const seoDetails = {
    title: 'Best in Class Playschool for Toddlers in Vadodara',
    metaDescription: 'Second Mom Child Care Centres provides designed learning curriculum for your children for developing their learning abilities',
    metaKeyword: 'Second MOm',
    canonical: currentURL,
    metaImage: `${baseUrl}/${metaLogoPath}`,
  } 
  const galleryTitles = galleries?.map(item => ({
    _id: item._id,
    title: item.title
}));
  // console.log("galleryTitles=", galleryTitles);
  res.render('gallery', { pathPart, galleryTitles, seoDetails,baseUrl, imageGalleries, videoGalleries, body: "" }); // Pass title to the view
});

  

app.get('/career', async (req, res) => {
  const pathPart = req.path.split('/').pop();
  const jobs = await getJobs(); 
  // console.log("jobs=",jobs);
  
  const websiteID = await getWebsiteID();
  const currentURL = req.url;

  const baseUrl = req.protocol + '://' + req.get('Host');
  const seoDetails = {
    title: 'Certified and Trained Best in Class Pre School in Vadodara',
    metaDescription: 'Explore the Best in Class PreSchool in Vadodara, Trusted by Mothers, Loved by Kids, for learning, for all round development of child',
    metaKeyword: 'Second MOm',
    canonical: currentURL,
    metaImage: `${baseUrl}/${metaLogoPath}`,
  }
  res.render('career', { pathPart,baseUrl, seoDetails, CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS, API_BASE_URL, websiteID, WEBSITE_ID_KEY,jobs, body: "" }); // Pass title to the view
});


app.get('/contact', async (req, res) => {
  const pathPart = req.path.split('/').pop();
  const websiteID = await getWebsiteID();
  // console.log("testimonials=", websiteID);
  
  const baseUrl = req.protocol + '://' + req.get('Host');
  const currentURL = req.url;
  const seoDetails = {
    title: 'Contact',
    metaDescription: 'Contact us for your child care needs',
    metaKeyword:'Second Mom',
    canonicle: currentURL,
    metaImage: `${baseUrl}/${metaLogoPath}`,
  }
  res.render('contact', { pathPart,baseUrl, seoDetails, CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS,SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS, API_BASE_URL, websiteID, WEBSITE_ID_KEY, body: "" }); // Pass title to the view
});

// app.get('/thank-you', async (req, res) => {
//   res.render('thank-you'); 
// });

app.get('/thank-you', async (req, res) => {
  const formType = req.query.form || "general"; // Default if no form type

  res.render('thank-you', { formType });
});



// app.get('/contact-thank-you', async (req, res) => {
//   const seoDetails = {
//   };
//   res.render('contact-thank-you',{seoDetails, }); 
// });

app.use((req, res) => {
  res.status(404).render('404');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port,"0.0.0.0"}`);
});
