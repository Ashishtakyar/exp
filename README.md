
**Prerequisites**   
[Now CLI](https://github.com/zeit/now)  

**External Services**  
[Airtable](https://airtable.com/tbletckg7M1zc0Qoo/viw0c0IMGGpoNRDEX?blocks=hide): This is being used as a stand in for a database. If data volume increases, this will need to be replaced with a real database, but in the meantime it gives us easy visibility and access to the captured data.

[Sendgrid](https://app.sendgrid.com/) We use their api for all automated email communication.
  
[Auth0](https://manage.auth0.com/dashboard/eu/expattaxback/) Auth0 handles user account management and site authentication.

[Cloudinary](https://cloudinary.com) Used for Image upload and hosting. Our form uses their js widget to handle image file or camera uploads.

[Now](https://zeit.co/expattaxback/expattaxback) Used for simple hosting, deployment and domain managmenet.



**To run locally**  
Make sure you have a valid `.env` file in your project root. This file should _never_ be checked into git.  
- To run both the server and the client from a single process run: `now dev`
- To start the api server only, run: `npm dev` from the `api` directory
- To start the start the client only: `npm dev` from the `www` directory

**Deployment**.   
Deployment to [Zeit](https://zeit.co/expattaxback/expattaxback) is handled manually via the [Now CLI](https://github.com/zeit/now)
  
Deploy to production with the command:
`now --prod`  
This will deploy the codebase and automatically alias it to `expattaxback.com`


Deploy to staging with the command:  
`now --target staging`  
This will deploy the codebase and automatically alias it to `expattaxback.expattaxback.now.sh`  
If you wish, you can then manually set this builds alias to `staging.expattaxback.com` via the [Zeit project dashboard](https://zeit.co/expattaxback/expattaxback)



