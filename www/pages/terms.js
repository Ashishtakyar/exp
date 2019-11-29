import React from 'react'
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import securePage from '../hocs/securePage'


const styles = theme => ({
  section: {
    padding: "80px 20px"
  },
  sectionContent: {
    extend: 'section',
    maxWidth: '800px',
    margin: '0 auto',
    minHeight: '300px',
    padding: '0px 40px',
  },
  sectionHeader: {
    paddingBottom: 20,
  },
  subHeader: {
    paddingTop: 20,
    paddingBottom: 5,
  },
  mainContent: {
    paddingTop: 20,
  }
});


const Terms = ({ classes }) => (
  <div className={classes.section}>
    <div className={classes.sectionContent}>
      <Typography variant={"h4"} className={classes.sectionHeader}>
        Terms and Conditions
      </Typography>

      <Typography variant={"h5"} className={classes.subHeader}>
        1. ACCEPTANCE OF TERMS
      </Typography>
      <Typography variant={"body1"} >
        Expat Tax Back  provides its service to you, subject to the following Terms of Service (“TOS”), which may be updated by us from time to time without notice to you. Expat Tax Back may offer in the future other services that are governed by different Terms of Service.
      </Typography>

      <Typography variant={"h5"} className={classes.subHeader}>
        2. DESCRIPTION OF SERVICE
      </Typography>
      <Typography variant={"body1"} >
        Expat Tax Back currently provides users with an electronic filing system that enables users to submit an application for a tax refund on a “No refund No fee” basis online. 
        <br/><br/> You understand and agree that the Service may include advertisements and that these advertisements may be necessary in the future for Expat Tax Back to provide the Service. You also understand and agree that the service may include certain communications from Expat Tax Back, such as service announcements, administrative messages and a Expat Tax Back Newsletter, and that these communications are considered part of the Expat Tax Back membership and that you will be able to opt out of receiving them if you wish to do so.
        <br/><br/> You understand and agree that the Service is provided “AS-IS” and that Expat Tax Back assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications.
        <br/><br/> Once authorised and registered as your tax agent with the relevant Tax Authority, all correspondence regarding your application must be handled directly by Expat Tax Back. Any measures taken by you, the customer, to make direct contact with the tax office without first consulting Expat Tax Back will be considered  a breach of contract and our relevant processing fee will still apply for all processing work completed by us during the application process.
        <br/><br/> Expat Tax Back will organise the refund of the maximum amount possible based on the information and documentation provided by its customers and in line with the legal entitlements and obligations of the customer within the tax law of the country from which the tax refund is being reclaimed.
      </Typography>

      <Typography variant={"h5"} className={classes.subHeader}>
        3. Expat Tax Back PRIVACY POLICY
      </Typography>
      <Typography variant={"body1"} >
        Registration Data and certain other information about you is subject to our Privacy Policy. For more information, see our full  privacy policy
      </Typography>
      
      <Typography variant={"h5"}  className={classes.subHeader}>
        4. MEMBER ACCOUNT, PASSWORD AND SECURITY
      </Typography>
      <Typography variant={"body1"} >
        You will receive a password and account designation upon completing the Service’s registration process. You are responsible for maintaining the confidentiality of the password and account, and are fully responsible for all activities that occur under your password or account. You agree to (a) immediately notify Expat Tax Back of any unauthorized use of your password or account or any other breach of security, and (b) ensure that you exit from your account at the end of each session. Expat Tax Back cannot and will not be liable for any loss or damage arising from your failure to comply with this Section 4.
      </Typography>

      <Typography variant={"h5"} className={classes.subHeader} >
        5. MODIFICATIONS TO SERVICE
      </Typography>
      <Typography variant={"body1"} >
        Expat Tax Back reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that Expat Tax Back shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.
      </Typography>


      <Typography variant={"h5"} className={classes.subHeader} >
        6. TERMINATION
      </Typography>
      <Typography variant={"body1"} >
        You agree that Expat Tax Back may, under certain circumstances and without prior notice  ,immediately terminate your Expat Tax Back Members account, any associated access to the Service. Cause for such termination shall include, but not be limited to, (a) breaches or violations of the TOS or other incorporated agreements or guidelines, (b) requests by law enforcement or other government agencies, (c) a request by you (self-initiated account deletions), (d) discontinuance or material modification to the Service (or any part thereof), (e) unexpected technical or security issues or problems, and (f) extended periods of inactivity.
        <br/><br/>Termination of your Expat Tax Back account includes (a) removal of access to all offerings within the Service, including but not limited to Expat Tax Back Members area, (b) deletion of your password and all related information, files and content associated with or inside your account (or any part thereof), and (c) barring further use of the Service. Further, you agree that all terminations for cause shall be made in Expat Tax Back sole discretion and that Expat Tax Back shall not be liable to you or any third-party for any termination of your account or access to the Service.
      </Typography>

      <Typography variant={"h5"} className={classes.subHeader} >
        7. LINKS
      </Typography>
      <Typography variant={"body1"} >
        The Service may provide, or third parties may provide, links to other World Wide Web sites or resources. Because Expat Tax Back has no control over such sites and resources, you acknowledge and agree that Expat Tax Back is not responsible for the availability of such external sites or resources, and does not endorse and is not responsible or liable for any Content, advertising, products, or other materials on or available from such sites or resources. You further acknowledge and agree that Companies Limited shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such Content, goods or services available on or through any such site or resource.
      </Typography>

      <Typography variant={"h5"} className={classes.subHeader} >
        8. Expat Tax Back PROPRIETARY RIGHTS
      </Typography>
      <Typography variant={"body1"} >
        You acknowledge and agree that the Service and any necessary software used in connection with the Service (“Software”) contain proprietary and confidential information that is protected by applicable intellectual property and other laws. You further acknowledge and agree that Content contained in sponsor advertisements or information presented to you through the Service or advertisers is protected by copyrights, trademarks, service marks, patents or other proprietary rights and laws.
      </Typography>

      <Typography variant={"h5"} className={classes.subHeader} >
        9. LIMITATION OF LIABILITY
      </Typography>
      <Typography variant={"body1"} >
        YOU EXPRESSLY UNDERSTAND AND AGREE THAT Expat Tax Back SHALL NOT BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF Expat Tax Back HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM: (i) THE USE OR THE INABILITY TO USE THE SERVICE; (ii) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM THE SERVICE; (iii) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (iv) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICE; OR (v) ANY OTHER MATTER RELATING TO THE SERVICE.
      </Typography>

      <Typography variant={"h5"} className={classes.subHeader} >
        10. EXCLUSIONS AND LIMITATIONS
      </Typography>
      <Typography variant={"body1"} >
        SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS OF SECTIONS 8 AND 9 MAY NOT APPLY TO YOU.
      </Typography>

      <Typography variant={"h5"} className={classes.subHeader} >
        11. VIOLATIONS
      </Typography>
      <Typography variant={"body1"} >
        Please report any violations of the TOS to  www.expattaxack.com
      </Typography>

      <Typography variant={"h5"} className={classes.subHeader} >
        12. APPLICATION FORM TERMS AND CONDITIONS  
      </Typography>
      <Typography variant={"body1"} >
        Please report any violations of the TOS to  www.expattaxack.com
      </Typography>

    </div>
  </div>
);

export default withTheme()(withStyles(styles)(securePage(Terms)));
