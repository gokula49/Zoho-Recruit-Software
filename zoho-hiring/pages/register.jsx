import styles from '../styles/register.module.css'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from "next/router";
import { URLS } from '../components/Auth/const';


export default function Home() {

  
const router = useRouter();
 function handleSubmit(e){

  e.preventDefault();
   
   const username = e.target.fullname.value;
   const email = e.target.email.value;
   const password = e.target.password.value;
  

   const user = {
    username : username,
    email : email,
    password : password,
    role : [username,"ROLE_USER"]

   }


   axios.post(`${URLS}/api/auth/signup`,user).then((response)=>{
   alert("saved"),
   
  localStorage.setItem("id", JSON.stringify(response.data.id))
    // localStorage.setItem("ids", JSON.stringify(response.data.id)),
     
     router.push('/organizationsetup')
  }).catch(()=>{
     alert("Something Went Wrong")
   })
 }
  return (
    <div> 
      <div style={{marginLeft:'35%', marginTop: '50px'}}>
        <div style={{fontSize:'16px', fontWeight:'300', float:'right', marginRight: '5%'}}>
            <span>Have a Zoho Account? 
                <a className={styles.signin} style={{color: '#f0483e', textTransform: 'uppercase', fontWeight:'500'}}>
                    <Link href="/signin"> Sign In</Link>
                </a>
            </span>
        </div>
        <br/><br/><br/>
          <a>
              <img src = 'https://www.zohowebstatic.com/sites/default/files/styles/product-home-page/public/icon-recruit.png?itok=ORRrhnt4' style={{maxWidth: '44px'}}></img>
              <span className={styles.logo}>Recruit</span>
          </a>
          <br/><br/><br/>
          <h3>Are you a recruiter or a hiring manager?</h3>
          <span style={{fontSize: '15px'}}>Sign Up for Enterprise plan | 15 days Free Trial</span>
          <br/><br/><br/><br/>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <span className={styles.placeholder}>Full Name</span><br/>
                <input autoFocus type='text' name='fullname' placeholder='Full Name' className={styles.input} required></input>
              </div><br/>
              <div>
                <span className={styles.placeholder}>Email</span><br/>
                <input autoFocus type='email' name='email' placeholder='Email' className={styles.input} required></input>
              </div><br/>
              <div>
                <span className={styles.placeholder}>Password</span><br/>
                <input autoFocus type='password' name='password' placeholder='Password' className={styles.input} required></input>
              </div><br/>
              <div>
                <input name='accountType' value='1' type='radio' required></input>
                <label style={{fontSize: '13px'}}>Staffing Agency</label>
                <input name='accountType' value='2' type='radio'></input>
                <label style={{fontSize: '13px'}}>Corporate HRs</label>
              </div><br/>
              <div>
              <span className={styles.placeholder}>Country/Region</span><br/>
              <select name="country" placeholder="Select Country" className={styles.input}>
              <option value="AF">Afghanistan</option><option value="AL"  >Albania</option><option value="DZ"   >Algeria</option><option value="AS"   >American Samoa</option><option value="AD"   >Andorra</option><option value="AO"   >Angola</option><option value="AI"   >Anguilla</option><option value="AQ"   >Antarctica</option><option value="AG"   >Antigua and Barbuda</option><option value="AR"   >Argentina</option><option value="AM"   >Armenia</option><option value="AW"   >Aruba</option><option value="AU" newsletter_mode="3">Australia</option><option value="AT" newsletter_mode="2">Austria</option><option value="AZ"   >Azerbaijan</option><option value="BS"   >Bahamas</option><option value="BH"   >Bahrain</option><option value="BD"   >Bangladesh</option><option value="BB"   >Barbados</option><option value="BY"   >Belarus</option><option value="BE" newsletter_mode="2">Belgium</option><option value="BZ"   >Belize</option><option value="BJ"   >Benin</option><option value="BM"   >Bermuda</option><option value="BT"   >Bhutan</option><option value="BO"   >Bolivia</option><option value="BQ"   >Bonaire, Sint Eustatius and Saba</option><option value="BA"   >Bosnia and Herzegovina</option><option value="BW"   >Botswana</option><option value="BV"   >Bouvet Island</option><option value="BR"   >Brazil</option><option value="IO"   >British Indian Ocean Territory</option><option value="VG"   >British Virgin Islands</option><option value="BN"   >Brunei</option><option value="BG" newsletter_mode="2">Bulgaria</option><option value="BF"   >Burkina Faso</option><option value="BI"   >Burundi</option><option value="KH"   >Cambodia</option><option value="CM"   >Cameroon</option><option value="CA" newsletter_mode="2">Canada</option><option value="CV"   >Cape Verde</option><option value="KY"   >Cayman Islands</option><option value="CF"   >Central African Republic</option><option value="TD"   >Chad</option><option value="CL"   >Chile</option><option value="CN"   >China</option><option value="CX"   >Christmas Island</option><option value="CC"   >Cocos Islands</option><option value="CO"   >Colombia</option><option value="KM"   >Comoros</option><option value="CG"   >Congo</option><option value="CK"   >Cook Islands</option><option value="CR"   >Costa Rica</option><option value="HR" newsletter_mode="2">Croatia</option><option value="CU"   >Cuba</option><option value="CW"   >Curaçao</option><option value="CY" newsletter_mode="2">Cyprus</option><option value="CZ" newsletter_mode="2">Czech Republic</option><option value="CI"   >Côte dIvoire</option><option value="DK" newsletter_mode="2">Denmark</option><option value="DJ"   >Djibouti</option><option value="DM"   >Dominica</option><option value="DO"   >Dominican Republic</option><option value="EC"   >Ecuador</option><option value="EG"   >Egypt</option><option value="SV"   >El Salvador</option><option value="GQ"   >Equatorial Guinea</option><option value="ER"   >Eritrea</option><option value="EE" newsletter_mode="2">Estonia</option><option value="ET"   >Ethiopia</option><option value="FK"   >Falkland Islands</option><option value="FO"   >Faroe Islands</option><option value="FJ"   >Fiji</option><option value="FI" newsletter_mode="2">Finland</option><option value="FR" newsletter_mode="2">France</option><option value="GF"   >French Guiana</option><option value="PF"   >French Polynesia</option><option value="TF"   >French Southern Territories</option><option value="GA"   >Gabon</option><option value="GM"   >Gambia</option><option value="GE"   >Georgia</option><option value="DE" newsletter_mode="3">Germany</option><option value="GH"   >Ghana</option><option value="GI"   >Gibraltar</option><option value="GR" newsletter_mode="2">Greece</option><option value="GL"   >Greenland</option><option value="GD"   >Grenada</option><option value="GP"   >Guadeloupe</option><option value="GU"   >Guam</option><option value="GT"   >Guatemala</option><option value="GG"   >Guernsey</option><option value="GN"   >Guinea</option><option value="GW"   >Guinea-Bissau</option><option value="GY"   >Guyana</option><option value="HT"   >Haiti</option><option value="HM"   >Heard Island And McDonald Islands</option><option value="HN"   >Honduras</option><option value="HK"   >Hong Kong</option><option value="HU" newsletter_mode="2">Hungary</option><option value="IS" newsletter_mode="2">Iceland</option><option value="IN"    selected>India</option><option value="ID"   >Indonesia</option><option value="IR"   >Iran</option><option value="IQ"   >Iraq</option><option value="IE" newsletter_mode="2">Ireland</option><option value="IM"   >Isle Of Man</option><option value="IL"   >Israel</option><option value="IT" newsletter_mode="2">Italy</option><option value="JM"   >Jamaica</option><option value="JP"   >Japan</option><option value="JE"   >Jersey</option><option value="JO"   >Jordan</option><option value="KZ"   >Kazakhstan</option><option value="KE"   >Kenya</option><option value="KI"   >Kiribati</option><option value="XK" newsletter_mode="2">Kosovo</option><option value="KW"   >Kuwait</option><option value="KG"   >Kyrgyzstan</option><option value="LA"   >Laos</option><option value="LV" newsletter_mode="2">Latvia</option><option value="LB"   >Lebanon</option><option value="LS"   >Lesotho</option><option value="LR"   >Liberia</option><option value="LY"   >Libya</option><option value="LI"   >Liechtenstein</option><option value="LT" newsletter_mode="2">Lithuania</option><option value="LU" newsletter_mode="2">Luxembourg</option><option value="MO"   >Macao</option><option value="MK"   >Macedonia</option><option value="MG"   >Madagascar</option><option value="MW"   >Malawi</option><option value="MY"   >Malaysia</option><option value="MV"   >Maldives</option><option value="ML"   >Mali</option><option value="MT" newsletter_mode="2">Malta</option><option value="MH"   >Marshall Islands</option><option value="MQ"   >Martinique</option><option value="MR"   >Mauritania</option><option value="MU"   >Mauritius</option><option value="YT"   >Mayotte</option><option value="MX"   >Mexico</option><option value="FM"   >Micronesia</option><option value="MD"   >Moldova</option><option value="MC"   >Monaco</option><option value="MN"   >Mongolia</option><option value="ME"   >Montenegro</option><option value="MS"   >Montserrat</option><option value="MA"   >Morocco</option><option value="MZ"   >Mozambique</option><option value="MM"   >Myanmar</option><option value="NA"   >Namibia</option><option value="NR"   >Nauru</option><option value="NP"   >Nepal</option><option value="NL" newsletter_mode="2">Netherlands</option><option value="AN"   >Netherlands Antilles</option><option value="NC"   >New Caledonia</option><option value="NZ"   >New Zealand</option><option value="NI"   >Nicaragua</option><option value="NE"   >Niger</option><option value="NG"   >Nigeria</option><option value="NU"   >Niue</option><option value="NF"   >Norfolk Island</option><option value="KP"   >North Korea</option><option value="MP"   >Northern Mariana Islands</option><option value="NO" newsletter_mode="2">Norway</option><option value="OM"   >Oman</option><option value="PK"   >Pakistan</option><option value="PW"   >Palau</option><option value="PS"   >Palestine</option><option value="PA"   >Panama</option><option value="PG"   >Papua New Guinea</option><option value="PY"   >Paraguay</option>
              <option value="PE">Peru</option><option value="PH"   >Philippines</option><option value="PN"   >Pitcairn</option><option value="PL" newsletter_mode="2">Poland</option><option value="PT" newsletter_mode="2">Portugal</option><option value="PR"   >Puerto Rico</option><option value="QA"   >Qatar</option><option value="RE"   >Reunion</option><option value="RO" newsletter_mode="2">Romania</option><option value="RU"   >Russia</option><option value="RW"   >Rwanda</option><option value="BL"   >Saint Barthélemy</option><option value="SH"   >Saint Helena</option><option value="KN"   >Saint Kitts And Nevis</option><option value="LC"   >Saint Lucia</option><option value="MF"   >Saint Martin</option><option value="PM"   >Saint Pierre And Miquelon</option><option value="VC"   >Saint Vincent And The Grenadines</option><option value="WS"   >Samoa</option><option value="SM"   >San Marino</option><option value="ST"   >Sao Tome And Principe</option><option value="SA"   >Saudi Arabia</option><option value="SN"   >Senegal</option><option value="RS"   >Serbia</option><option value="SC"   >Seychelles</option><option value="SL"   >Sierra Leone</option><option value="SG"   >Singapore</option><option value="SX"   >Sint Maarten</option><option value="SK" newsletter_mode="2">Slovakia</option><option value="SI" newsletter_mode="2">Slovenia</option><option value="SB"   >Solomon Islands</option><option value="SO"   >Somalia</option><option value="ZA" newsletter_mode="2">South Africa</option><option value="GS"   >South Georgia And The South Sandwich Islands</option><option value="KR"   >South Korea</option><option value="SS"   >South Sudan</option><option value="ES" newsletter_mode="2">Spain</option><option value="LK"   >Sri Lanka</option><option value="SD"   >Sudan</option><option value="SR"   >Suriname</option><option value="SJ"   >Svalbard And Jan Mayen</option><option value="SZ"   >Swaziland</option><option value="SE" newsletter_mode="2">Sweden</option><option value="CH" newsletter_mode="2">Switzerland</option><option value="SY"   >Syria</option><option value="TW"   >Taiwan</option><option value="TJ"   >Tajikistan</option><option value="TZ"   >Tanzania</option><option value="TH"   >Thailand</option><option value="CD"   >The Democratic Republic Of Congo</option><option value="TL"   >Timor-Leste</option><option value="TG"   >Togo</option><option value="TK"   >Tokelau</option><option value="TO"   >Tonga</option><option value="TT"   >Trinidad and Tobago</option><option value="TN"   >Tunisia</option><option value="TR"   >Turkey</option><option value="TM"   >Turkmenistan</option><option value="TC"   >Turks And Caicos Islands</option><option value="TV"   >Tuvalu</option><option value="VI"   >U.S. Virgin Islands</option><option value="UG"   >Uganda</option><option value="UA"   >Ukraine</option><option value="AE"   >United Arab Emirates</option><option value="GB" newsletter_mode="2">United Kingdom</option><option value="US"   >United States</option><option value="UM"   >United States Minor Outlying Islands</option><option value="UY"   >Uruguay</option><option value="UZ"   >Uzbekistan</option><option value="VU"   >Vanuatu</option><option value="VA"   >Vatican</option><option value="VE"   >Venezuela</option><option value="VN"   >Vietnam</option><option value="WF"   >Wallis And Futuna</option><option value="EH"   >Western Sahara</option><option value="YE"   >Yemen</option><option value="ZM"   >Zambia</option><option value="ZW"   >Zimbabwe</option><option value="AX"   >Åland Islands</option></select>
              </div><br/>
              <div>
                <label style={{fontSize: '13px'}}>
                <input name='agreeTOS' type='checkbox'></input>
                  I agree to the 
                  <a href="https://www.zoho.com/terms.html" style={{textDecoration: 'underline'}}> Terms of Service </a>
                  and 
                  <a href="https://www.zoho.com/privacy.html" style={{textDecoration: 'underline'}}> Privacy Policy</a>
                </label>
              </div><br/>
              <div>
              <input type="submit" value="Sign Up" style={{opacity: '1'}} className={styles.signupBtn}/>
              </div><br/>
              <div> 
                <p>
                    <b style={{fontSize: '13px', marginRight: '10px', fontWeight:'300'}}>or sign in using</b>
                    <div  className={styles.socialSign}>
                        <span className={styles.google}>Google</span>
                        <span className={styles.linkedin}></span>
                        <span className={styles.office}></span>
                    </div>
                </p>
              </div><br/><br/><br/><br/><br/>
              <div style={{fontSize: '13px'}}>
                <p>© 2021, Zoho Corporation Pvt. Ltd. All Rights Reserved.</p>
              </div>
            </form>
          </div>
      </div>
      <div className={styles.testimonial}>
        <div className={styles.testimonialBlack}>
          <img src='https://www.betterbuys.com/wp-content/uploads/2015/06/Zoho.png' style={{width:'100px', height:'90px', margin:'15px'}}></img>
          <div className={styles.content}>
            <span className={styles.span1}>
                <img src='https://www.zohowebstatic.com/sites/default/files/recruit/mike-tozer.jpg' className={styles.img}></img>
                <p className={styles.para}> Our process from profiling to shortlisting candidates has gone from days to hours </p>
                <br/>
                <p className={styles.para1}>- Mike Tozer</p>
            </span>
          </div>
        </div>
      </div>
    </div>      
  )
}